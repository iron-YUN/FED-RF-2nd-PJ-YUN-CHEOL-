// 제품 카테고리별 분류
// 메인분류 : 유형별
// 서브분류 : 사용목적별
// https://www.bose.com/c/headphones

const headphones = [
  {
    idx: "0",
    name: "Bose QuietComfort Ultra Headphones",
    price: "379.00",
    MainType: "Headphones",
    SubType: "Over-ear",
    color: ["sand_stone", "black", "white_smoke"],
    cimg:{
      "sand_stone":8,
      "black":9,
      "white_smoke":9,
    },
    isrc: `/images/headphones/`,
  },
  {
    idx: "1",
    name: "Bose QuietComfort 45 headphones 2021 Model",
    price: "329.00",
    MainType: "Headphones",
    SubType: "Over-ear",
    color: ["white_smoke"],
    cimg:{
      "white_smoke":5,
    },
    isrc: `/images/headphones/`,
  },
  {
    idx: "2",
    name: "Bose QuietComfort Headphones",
    price: "249.00",
    MainType: "Headphones",
    SubType: "Over-ear",
    color: [ "moonstone_blue","black", "white_smoke", "cypress_green",],
    cimg:{
      "moonstone_blue":6,
      "black":8,
      "white_smoke":9,
      "cypress_green":6,
    },
    isrc: `/images/headphones/`,
  },
  {
    idx: "3",
    name: "Bose A30 Aviation Headset",
    price: "1,299.00",
    MainType: "Headphones",
    SubType: "Aviation",
    color: ["black"],
    cimg:{
      "black":5,
    },
    isrc: `/images/headphones/`,
  },
  {
    idx: "4",
    name: "ProFlight Series 2 Aviation Headset",
    price: "1,045.00",
    MainType: "Headphones",
    SubType: "Aviation",
    color: ["black"],
    cimg:{
      "black":5,
    },
    isrc: `/images/headphones/`,
  },
  {
    idx: "5",
    name: 'A20 Aviation Headset with Bluetooth',
    price: "1,095.00",
    MainType: "Headphones",
    SubType: "Aviation",
    color: ["black"],
    cimg:{
      "black":4,
    },
    isrc: `/images/headphones/`,
  },
]; ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const earbuds = [
  {
    idx: "0",
    name: "Bose QuietComfort Ultra Earbuds",
    price: "249.00",
    MainType: "Earbuds",
    SubType: "In Ear",
    color: [ "moonstone_blue","black", "white_smoke",],
    cimg:{
      "moonstone_blue":8,
      "black":8,
      "white_smoke":8,
    },
    isrc: `/images/earbuds/`,
  },
  {
    idx: "1",
    name: "Bose Ultra Open Earbuds",
    price: "299.00",
    MainType: "Earbuds",
    SubType: "Open Ear",
    color: ["white_smoke","black", ],
    cimg:{
      "black":10,
      "white_smoke":11,
    },
    isrc: `/images/earbuds/`,
  },
  {
    idx: "2",
    name: "Bose Ultra Open Earbuds Silicone Case Cover",
    price: "25.00",
    MainType: "Earbuds",
    SubType: "Open Ear",
    color: [ "chilled_lilac","black", "white_smoke",],
    cimg:{
      "black":2,
      "white_smoke":2,
      "chilled_lilac":2,
    },
    isrc: `/images/earbuds/`,
  },
  {
    idx: "3",
    name: "Bose Ultra Open Earbuds Wireless Charging Case Cover",
    price: "49.00",
    MainType: "Earbuds",
    SubType: "Open Ear",
    color: ["black", "white_smoke",],
    cimg:{
      "black":3,
      "white_smoke":3,
    },
    isrc: `/images/earbuds/`,
  },
]; ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const speakers = [
  {
    idx: "0",
    name: "Bose SoundLink Max Portable Speaker",
    price: "399.00",
    MainType: "Speakers",
    SubType: "Portable",
    color: ["blue_dusk","black", ],
    cimg:{
      "black":7,
      "blue_dusk":8,
    },
    isrc: `/images/speakers/`,
  },
  {
    idx: "1",
    name: "Bose SoundLink Flex Bluetooth Speaker",
    price: "149.00 ",
    MainType: "Speakers",
    SubType: "Portable",
    color: [
      "chilled_lilac",
      "black",
      "white_smoke",
      "cypress_green",
      "stone_blue",
    ],
    cimg:{
      "black":4,
      "chilled_lilac":6,
      "cypress_green":6,
      "stone_blue":4,
      "white_smoke":4,
    },
    isrc: `/images/speakers/`,
  },
  {
    idx: "2",
    name: "Bose SoundLink Mini II Special Edition",
    price: "179.00",
    MainType: "Speakers",
    SubType: "Portable",
    color: ["triple_black", "luxe_silver"],
    cimg:{
      "triple_black":5,
      "luxe_silver":5,
    },
    isrc: `/images/speakers/`,
  },
  {
    idx: "3",
    name: "Bose SoundLink Micro Bluetooth Speaker",
    price: "119.00",
    MainType: "Speakers",
    SubType: "Portable",
    color: ["black","stone_blue", "white_smoke"],
    cimg:{
      "black":5,
      "stone_blue":5,
      "white_smoke":5,
    },
    isrc: `/images/speakers/`,
  },
  {
    idx: "4",
    name: "Bose Portable Smart Speaker",
    price: "349.00",
    MainType: "Speakers",
    SubType: "Portable",
    color: [ "luxe_silver","triple_black",],
    cimg:{
      "triple_black":4,
      "luxe_silver":4,
    },
    isrc: `/images/speakers/`,
  },
  {
    idx: "5",
    name: "Bose SoundLink Revolve+ II Bluetooth Speaker",
    price: "249.00",
    MainType: "Speakers",
    SubType: "Portable",
    color: ["triple_black", "luxe_silver"],
    cimg:{
      "triple_black":4,
      "luxe_silver":4,
    },
    isrc: `/images/speakers/`,
  },
  {
    idx: "6",
    name: "Bose SoundLink Revolve II Bluetooth Speaker",
    price: "219.00",
    MainType: "Speakers",
    SubType: "Portable",
    color: ["triple_black", "luxe_silver"],
    cimg:{
      "triple_black":5,
      "luxe_silver":5,
    },
    isrc: `/images/speakers/`,
  },
  {
    idx: "7",
    name: "251® environmental speakers",
    price: "398.00",
    MainType: "Speakers",
    SubType: "Home Speakers",
    color: ["white","black", ],
    cimg:{
      "black":2,
      "white":2,
    },
    isrc: `/images/speakers/`,
  },
  {
    idx: "8",
    name: "Bose Smart Speaker 500",
    price: "379.00",
    MainType: "Speakers",
    SubType: "Home Speakers",
    color: ["luxe_silver","triple_black", ],
    cimg:{
      "triple_black":5,
      "luxe_silver":5,
    },
    isrc: `/images/speakers/`,
  },
  {
    idx: "9",
    name: "Bose Music Amplifier",
    price: "699.00",
    MainType: "Speakers",
    SubType: "Amplifiers",
    color: ["black",],
    cimg:{
      "black":5,
    },
    isrc: `/images/speakers/`,
  },
]; ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const homeTheater = [
  {
    idx: "0",
    name: "Bose Smart Ultra Soundbar",
    price: "799.00",
    MainType: "Home Theater",
    SubType: "Soundbars",
    color: ["black", "arctic_white"],
    cimg:{
      "black":7,
      "arctic_white":7,
    },
    isrc: `/images/hometheater/`,
  },
  {
    idx: "1",
    name: "Bose Smart Soundbar 600",
    price: "399.00 ",
    MainType: "Home Theater",
    SubType: "Soundbars",
    color: ["black"],
    cimg:{
      "black":6,
    },
    isrc: `/images/hometheater/`,
  },
  {
    idx: "2",
    name: "Bose TV Speaker",
    price: "199.00",
    MainType: "Home Theater",
    SubType: "Soundbars",
    color: ["black"],
    cimg:{
      "black":5,
    },
    isrc: `/images/hometheater/`,
  },
  {
    idx: "3",
    name: "Bose Bass Module 500",
    price: "499.00",
    MainType: "Home Theater",
    SubType: "Bass modules",
    color: ["black"],
    cimg:{
      "black":3,
    },
    isrc: `/images/hometheater/`,
  },
  {
    idx: "4",
    name: "Bose Bass Module 700",
    price: "699.00",
    MainType: "Home Theater",
    SubType: "Bass modules",
    color: ["bose_black", "arctic_white"],
    cimg:{
      "bose_black":2,
      "arctic_white":2,
    },
    isrc: `/images/hometheater/`,
  },
  {
    idx: "5",
    name: "Bose Surround Speakers",
    price: "399.00",
    MainType: "Home Theater",
    SubType: "Surround speakers",
    color: ["bose_black", "arctic_white"],
    cimg:{
      "bose_black":3,
      "arctic_white":3,
    },
    isrc: `/images/hometheater/`,
  },
  {
    idx: "6",
    name: "Bose Surround Speakers 700",
    price: "599.00",
    MainType: "Home Theater",
    SubType: "Surround speakers",
    color: ["bose_black", "arctic_white"],
    cimg:{
      "bose_black":2,
      "arctic_white":2,
    },
    isrc: `/images/hometheater/`,
  },
]; ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const paSystems = [
  {
    idx: "0",
    name: "Bose S1 Pro+ Portable Bluetooth Speaker System",
    price: "599.00",
    MainType: "PA Systems",
    SubType: "Portable PA",
    color: ["black"],
    cimg:{
      "black":12,
    },
    isrc: `/images/pasystem/`,
  },
  {
    idx: "1",
    name: "L1 Pro16 Portable Line Array System",
    price: "1,899.00",
    MainType: "PA Systems",
    SubType: "Array Systems",
    color: ["black"],
    cimg:{
      "black":8,
    },
    isrc: `/images/pasystem/`,
  },
  {
    idx: "2",
    name: "L1 Pro8 Portable Line Array System",
    price: "1,299.00",
    MainType: "PA Systems",
    SubType: "Array Systems",
    color: ["black"],
    cimg:{
      "black":6,
    },
    isrc: `/images/pasystem/`,
  },
  {
    idx: "3",
    name: "F1 Model 812 Flexible Array loudspeaker",
    price: "1,199.00",
    MainType: "PA Systems",
    SubType: "Array Systems",
    color: ["black"],
    cimg:{
      "black":6,
    },
    isrc: `/images/pasystem/`,
  },
  {
    idx: "4",
    name: "Sub1 Powered Bass Module",
    price: "899.00",
    MainType: "PA Systems",
    SubType: "Sub-woofers",
    color: ["black"],
    cimg:{
      "black":3,
    },
    isrc: `/images/pasystem/`,
  },
  {
    idx: "5",
    name: "Sub2 Powered Bass Module",
    price: "1,299.00",
    MainType: "PA Systems",
    SubType: "Sub-woofers",
    color: ["black"],
    cimg:{
      "black":3,
    },
    isrc: `/images/pasystem/`,
  },
  {
    idx: "6",
    name: "F1 Subwoofer",
    price: "1,299.00",
    MainType: "PA Systems",
    SubType: "Sub-woofers",
    color: ["black"],
    cimg:{
      "black":4,
    },
    isrc: `/images/pasystem/`,
  },
  {
    idx: "7",
    name: "T4S ToneMatch mixer",
    price: "699.00",
    MainType: "PA Systems",
    SubType: "Mixers",
    color: ["black"],
    cimg:{
      "black":2,
    },
    isrc: `/images/pasystem/`,
  },
  {
    idx: "8",
    name: "T8S ToneMatch mixer",
    price: "999.00",
    MainType: "PA Systems",
    SubType: "Mixers",
    color: ["black"],
    cimg:{
      "black":2,
    },
    isrc: `/images/pasystem/`,
  },
];


const headphonesSub={
  src: `/images/headphones/items_sub_ban/`,
  tit1: `Leveled-up listening`,
  stit1: `Bose QuietComfort Ultra Headphones`,
  tit2: `Best noise cancelling headphones`,
  stit2: `Discover features and find your perfect fit.`,
};
const earbudsSub={
  src: `/images/earbuds/items_sub_ban/`,
  tit1: `All-day comfort`,
  stit1: `Tennis pro Ben Shelton sports Ultra Open Earbuds.`,
  tit2: `Open-ear vs in-ear:`,
  stit2: `Find your fit`,
  tit3: `Design your own`,
  stit3: `Customize and purchase QuietComfort Ultra Earbuds on Colorware.com`,
};
const speakersSub={
  src: `/images/speakers/items_sub_ban/`,
  tit1: `Run the vibe`,
  stit1: `Introducing the new Bose SoundLink Max Portable Speaker`,
  tit2: `Unleashing the energy`,
  stit2: `DJ and Producer John Summit on how he sets the vibe and starts the party.`,
};
const homeTheaterSub={
  src: `/images/hometheater/items_sub_ban/`,
  tit1: `“Makes the sound come alive”`,
  stit1: `~ Pinnerman08`,
  tit2: `What is Dolby Atmos?`,
  stit2: `Learn more about this new technology and how it revolutionizes surround sound.`,
  tit3: `Smart-sized cinematic sound`,
  stit3: `Bose Smart Soundbar 600`,
};
const paSystemsSub={
  src: `/images/pasystem/items_sub_ban/`,
  tit1: `Transform sound into something more`,
  stit1: `S1 Pro+ Wireless PA System: Add any vibe, anywhere you play`,
  tit2: `The best PA systems for live music`,
  stit2: `Get the best sound experience for your live performances.`,
};

export const products = [ 
  headphones,
  earbuds,
  speakers,
  homeTheater,
  paSystems,
];
export const products2 = {
 "Headphones": headphones,
 "Earbuds":  earbuds,
 "Speakers":  speakers,
 "Home Theater":  homeTheater,
 "PA Systems":  paSystems,
 "SHOP":  products, // map을 못돌림 idx 값 중복으로 확인됨
};
export const searchProd = {
 "Headphones": headphones,
 "Earbuds":  earbuds,
 "Speakers":  speakers,
 "Home Theater":  homeTheater,
 "PA Systems":  paSystems,
};
export const productsSub = {
  "Headphones": headphonesSub,
  "Earbuds":  earbudsSub,
  "Speakers":  speakersSub,
  "Home Theater":  homeTheaterSub,
  "PA Systems":  paSystemsSub,
};

