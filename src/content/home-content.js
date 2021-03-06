import HeroMGD from '../assets/featured/Hero__MGD--1.jpeg';
import HeroOrochi from '../assets/featured/orochi__hero.jpeg';
import HeroMetaCartel from '../assets/featured/metacartel__hero.jpg';
import AvatarMetaCartel from '../assets/featured/metacartel__avatar.jpg';
import AvatarRaidGuild from '../assets/featured/raidguild__avatar.png';
import AvatarMachiX from '../assets/featured/machix__avatar.jpg';
import AvatarVentures from '../assets/featured/ventures__avatar.jpg';
import AvatarMGD from '../assets/featured/mgd__avatar.jpg';
import IconA from '../assets/branding/Icon__A.png';
import IconB from '../assets/branding/Icon__B.png';
import IconD from '../assets/branding/Icon__D.png';

export const heroSlides = [
  {
    id: 1,
    heading: 'Juliana, Summoner of Meta Gamma Delta',
    content:
      'Before having a DAO, I was already seeding and flourishing a chat group of blockchain developers. Even though there is a lot of engagement in the chat channel, in a DAO things get more serious. The sense of commitment is much more developed.',
    image: HeroMGD,
  },
  {
    id: 2,
    heading: 'Peter, Summoner of MetaCartel',
    content:
      'It’s a great way to bring people together who want to get shit done. The process of building a DAO community is an experience that you will never regret.',
    image: HeroMetaCartel,
  },
  {
    id: 3,
    heading: 'Makoto, Summoner of Orochi DAO',
    content:
      'By summoning a DAO, I learned in and out of how a Moloch works and I can say that I turn from DAO noob to expert to the point that I was able to present at a meetup.',
    image: HeroOrochi,
  },
];

export const daohausFeatures = [
  {
    icon: IconA,
    sub: 'Share Goals',
    content:
      'Collaborate with anyone, anywhere in an unstoppable organization that lives on the internet.',
  },
  {
    icon: IconB,
    sub: 'Share Money',
    content:
      'Raise money and spend it together on shared goals with 100% transparency.',
  },
  {
    icon: IconD,
    sub: 'Share Power',
    content:
      'Everyone has a voice. Not a single dollar can be spent without a community vote.',
  },
];

export const featuredCommunities = [
  {
    name: 'MetaCartel',
    address: '0x0372f3696fa7dc99801f435fd6737e57818239f2',
    sub: 'Digital Nation for Web3',
    image: AvatarMetaCartel,
  },
  {
    name: 'Machi X',
    address: '0x016e79e9101a8eaa3e7f46d6d1c267819c09c939',
    sub: 'Network of Crypto Artists',
    image: AvatarMachiX,
  },
  {
    name: 'Meta Gamma Delta',
    address: '0x1b3d7efb93ec432b0d1d56880c23303979b379e9',
    sub: 'Support female-led initiatives.',
    image: AvatarMGD,
  },
  {
    name: 'Raid Guild',
    address: '0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d',
    sub: 'Digital Cooperative of Builders',
    image: AvatarRaidGuild,
  },
  {
    name: 'Venture DAO',
    address: '0x4570b4faf71e23942b8b9f934b47ccedf7540162',
    sub: 'Digital Nation for Web3',
    image: AvatarVentures,
  },
];

export const integrationLogos = [
  {
    img: 'telegram__logo.png',
    alt: 'Telegram',
    top: 115,
    left: 45,
  },
  {
    img: 'discord__logo.png',
    alt: 'Discord',
    top: 15,
    left: 150,
  },
  {
    img: 'airtable__logo.svg',
    alt: 'Airtable',
    top: 260,
    left: 90,
  },
  {
    img: '3Box__logo.svg',
    alt: '3Box',
    top: 57,
    left: 270,
  },
  {
    img: 'thegraph__logo.png',
    alt: 'The Graph',
    top: 150,
    left: 150,
  },
  {
    img: 'ENS__Logo.svg',
    alt: 'ENS',
    top: 220,
    left: 250,
  },
];
