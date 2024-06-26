import React from "react";

// CSS불러오기
import "../../css/searching.scss";

// 데이터 불러오기 : 캐릭터 리스트 데이터
// import { catListData } from "../data/swiper_cat";

import { searchProd } from "../data/items_main_data";
import SearchShopItems from "./SearchShopItems";
console.log("이거!", searchProd);

let keyObj = Object.keys(searchProd);
console.log("키배열:", keyObj);

let selData = [];
// 배열안의 배열이므로 두번 forEach() 처리한다!
keyObj.forEach((v) => {
  searchProd[v].forEach((v2) => selData.push(v2));
});
//
// let selData = [
//   ...searchProd[keyObj[0]],
//   ...searchProd[keyObj[1]],
//   ...searchProd[keyObj[2]],
//   ...searchProd[keyObj[3]],
//   ...searchProd[keyObj[4]],
// ];
console.log("새데이터:", selData);

// 캐릭터 리스트 결과 컴포넌트
// import SearchingCat from "./SearchingCat";

function Searching({ kword }) {
  // kword - 전달받은 키워드
  console.log("kword:", kword);

  let kw = kword.toLowerCase();

  const lastData = selData.filter((v) => {
    let pname = v.name.toLowerCase();
    pname = pname.indexOf(kw) != -1;
    let mtype = v.MainType.toLowerCase();
    mtype = mtype.indexOf(kw) != -1;
    let stype = v.SubType.toLowerCase();
    stype = stype.indexOf(kw) != -1;
    let cType = v.color.some((color) => color.toLowerCase().indexOf(kw) !== -1);
    if (pname || mtype || stype || cType) return true;
  });

  console.log("최종데이터:", lastData);


  // [ 정렬기능 추가하기 ] /////////
  // (1) 오름차순일 경우
  if (sort == "asc") {
    newList.sort((a, b) =>
      a.cname > b.cname ? 1 : a.cname < b.cname ? -1 : 0
    );
  } /// if ///////////////////////
  // (2) 내림차순일 경우
  else if (sort == "desc") {
    newList.sort((a, b) =>
      a.cname > b.cname ? -1 : a.cname < b.cname ? 1 : 0
    );
  } /// else if ///////////////////


  // 코드 리턴구역 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {lastData.length > 0 && (
          <>
            <div className="result">
              <h1>No results found.</h1>
              <h2>
                Search results for: <span>"{kword}"</span>
              </h2>
              {/* 2-2. 정렬선택박스 */}
            </div>
              <aside className="sortbx">
                <select
                  name="sel"
                  id="sel"
                  className="sel"
                  // 값을 변경할때 이벤트발생
                  onChange={(e) => {
                    console.log(e.target.value);
                    // 정렬기준 상태변수 업데이트
                    setSort(e.target.value);
                  }}
                >
                  <option value="asc">A-Z</option>
                  <option value="desc">Z-A</option>
                </select>
              </aside>
            <SearchShopItems data={lastData} />
          </>
        )}
        {lastData.length === 0 && (
          <div className="no_result">
            <h1>No results found.</h1>
            <h2>
              Search results for: <span>"{kword}"</span>
            </h2>
            <h2>Please search by product name.</h2>
          </div>
        )}
      </section>
    </>
  );
}

export default Searching;
