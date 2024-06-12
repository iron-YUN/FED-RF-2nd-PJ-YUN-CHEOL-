// DC.com GNB메뉴 데이터
const menu = [
    {
        txt:"HOME",
        link:"/",
    },
    {
        txt:"SHOP",
        link:"/shop",
        sub:[
            {
                txt: "Headphones",
                link: "/headphones",
            },
            {
                txt: "Earbuds",
                link: "/earbuds",
            },
            {
                txt: "Speakers",
                link: "/speakers",
            },
            {
                txt: "Home Theater",
                link: "/hometheater",
            },
            {
                txt: "PA Systems",
                link: "/pasystems",
            },
        ],
    },
    {
        txt:"EXPLORE",
        link:"/explore",
    },
    {
        txt:"SUPPORT",
        link:"/support",
    },

    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
];

const subMenu = menu
  .filter(item => item.sub) // sub 속성이 있는 객체만 필터링
  .map(item => item.sub)    // 각 객체의 sub 속성만 추출
  .flat();                  // 다차원 배열을 단일 배열로 평탄화


export {menu,subMenu};