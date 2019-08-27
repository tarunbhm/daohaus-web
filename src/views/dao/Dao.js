import React, { useState, useEffect } from "react";
import { get } from "../../util/requests";
import ApplicationList from "../../components/applicationList/ApplicationList";
import ApplyButton from "../../components/applyButton/applyButton";
import MolochService from "../../util/molochService";
import "./Dao.scss";
import { useWeb3Context } from "web3-react";
import UpdateDelegate from "../../components/updatedDelegate/UpdateDelegate";

const Dao = props => {
  const context = useWeb3Context();
  const [daoData, setDaoData] = useState({});
  const [applications, setApplications] = useState({});
  const [contractData, setContractData] = useState({});
  const [updateDelegateView, setUpdateDelegateView] = useState(false);
  const [isMemberOrApplicant, setIsMemberOrApplicant] = useState(false);

  useEffect(() => {
    if (context.active && applications.length) {
      const applicantData = applications.find(applicant => {
        return (
          applicant.applicantAddress.toLowerCase() ===
          context.account.toLowerCase()
        );
      });
      if (applicantData) {
        setIsMemberOrApplicant(true);
      }
    }
  }, [context, applications]);

  useEffect(() => {
    const fetchData = async () => {
      const daoRes = await get(`moloch/${props.match.params.contractAddress}`);
      setDaoData(daoRes.data);
      console.log("daoData", daoRes.data);

      const applicationRes = await get(
        `moloch/${props.match.params.contractAddress}/applications`
      );
      setApplications(applicationRes.data);

      const molochService = new MolochService(
        props.match.params.contractAddress
      );
      const totalShares = await molochService.getTotalShares();
      const token = await molochService.approvedToken();
      setContractData({ totalShares, token });
    };

    fetchData();
  }, [props.match.params.contractAddress]);

  return (
    <div className="View">
      {updateDelegateView ? (
        <UpdateDelegate contractAddress={daoData.contractAddress} />
      ) : (
        <>
          {daoData.contractAddress ? (
            <div>
              <h2 className="DaoName">{daoData.name}</h2>
              <p className="Large">{daoData.description}</p>
              {daoData.daoUrl && (<a className="small" href={daoData.daoUrl} alt="link to dao site">{daoData.daoUrl}</a>)}
              <p className="Label">Shares</p>
              <p className="Value Data">{contractData.totalShares}</p>
              <p className="Label">Summoner</p>
              <p className="Value Data">{daoData.summonerAddress}</p>
              <p className="Label">Minimum Tribute</p>
              <p className="Value Data">
                {daoData.minimumTribute} {contractData.token}
              </p>
              {isMemberOrApplicant ? (
                <>
                  <p>you are a member or applicant</p>
                  <button onClick={() => setUpdateDelegateView(true)}>
                    update delegate
                  </button>
                </>
              ) : (
                <ApplyButton contractAddress={daoData.contractAddress} />
              )}
              {applications.length ? (
                <>
                  <h3>Pledges</h3>
                  <ApplicationList applications={applications} />
                </>
              ) : null}
            </div>
          ) : (
            <p>THE HAUS IS LOADING THE DAO</p>
          )}
        </>
      )}
    </div>
  );
};

export default Dao;