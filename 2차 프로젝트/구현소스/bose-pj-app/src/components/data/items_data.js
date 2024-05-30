// 제품 카테고리별 분류
// 메인분류 : 유형별
// 서브분류 : 사용목적별
// https://www.bose.com/c/headphones
const productMainType = [
  "Headphones",
  "Earbuds",
  "Speakers",
  "Home Theater",
  "PA Systems",
];
const productSubType = [
"Over-ear",
"Aviation",
"In Ear",
"Open Ear",
"Portable",
"Home Speakers",
"Amplifiers",
"Soundbars",
"Bass modules",
"Surround speakers",
"Portable PA",
"Array Systems",
"Sub-woofers",
"Mixers",
"Sets",
];
const productList =[
  {
    dix:"",
    name:"",
    price:"",
    MainType:"",
    SubType:"",
    color:[],
    gridimg:"",
    // 서브페이지에 들어갈 정보들
    subPageImg:[],
    infoText1:"",
    infoIcon:{},
    subTopVideo:"",
    infoBox1:[],
    infoBox2:{},
  },
  ];

const poductColor={
"Black":"#000",
"White Smoke":"#eee8e5",
"Sandstone":"#928982",
"Luxe Silver":"#adb0b1",
"Cypress Green":"#537262",
"Moonstone Blue":"#a2c2d9",
"Chilled Lilac":"#c5c6e1",
"Blue Dusk":"#486e8a",
"Stone Blue":"#7f98a5",
"Triple Black":"#283238",
"Arctic White":"#f4f3ef",
"Bose Black":"#202020",
"bgc1":"#181818",
"bgc2":"#191919",
"bgc3":"#0d0d0d",
"bgc4":"#282828",
};

