import React from "react";

// CSS불러오기
import "../../css/searching.scss";

// 데이터 불러오기 : 캐릭터 리스트 데이터
// import { catListData } from "../data/swiper_cat";

import { searchProd } from "../data/items_main_data";
import SearchShopItems from "./SearchShopItems";
console.log("이거!",searchProd);

let keyObj = Object.keys(searchProd);
console.log("키배열:",keyObj);

let selData = [];
// 배열안의 배열이므로 두번 forEach() 처리한다!
keyObj.forEach(v=>{
  searchProd[v].forEach(v2=>selData.push(v2));
});
// 
// let selData = [
//   ...searchProd[keyObj[0]],
//   ...searchProd[keyObj[1]],
//   ...searchProd[keyObj[2]],
//   ...searchProd[keyObj[3]],
//   ...searchProd[keyObj[4]],
// ];


console.log("새데이터:",selData);



// 캐릭터 리스트 결과 컴포넌트
// import SearchingCat from "./SearchingCat";

function Searching({kword}) {
    // kword - 전달받은 키워드
    console.log("kword:", kword);

    let kw = kword.toLowerCase();

    const lastData = selData.filter(v=>{
      let pname = v.name.toLowerCase();
      if(pname.indexOf(kw)!=-1) return true;
    });

    console.log("최종데이터:",lastData);
 
  // 코드 리턴구역 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {
          lastData.length > 0 &&
        <SearchShopItems data={lastData} />
        }
        {
          lastData.length === 0 &&
          <div className="no_result">
            <h1>더 발전적으로 검색해 보세요~!!!</h1>
          </div>
        }
      </section>
    </>
  );
}

export default Searching;
