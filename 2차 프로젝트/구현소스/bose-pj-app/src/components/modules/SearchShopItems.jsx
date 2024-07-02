import React, { useEffect } from "react";
import { WishlistHeartIcon } from "../data/icons";
import { colorList } from "../data/color_data";

import $ from "jquery";
// css
import "./css/shop_items.scss";
import { Link } from "react-router-dom";

function SearchShopItems({ data }) {
  // console.log(catName);
  // console.log(colorList);
  // console.log(products2);
  // console.log(products2[catName]);
  const getRdItem = (arr) => {
    // 예) 순번1:Headphones -> 품목개수6개 중 랜덤순번품목의 순번을 rdIdx 에 담는다
    const rdIdx = Math.floor(Math.random() * arr.length);
    // console.log(rdIdx);
    return arr[rdIdx];
    // 위에서 rdIdx 에 담은 순번을 Headphones[랜덤수] 로 리턴해 getRdItem 에 담는다.
  }; ////////////// 랜덤1 함수 getRdItem ////////////

  // 제품 색상바꾸기 함수
  const colorFn = (e, clr) => {
    e.preventDefault();
    // console.log("나를 선택했군!!", clr);
    // console.log("나를 선택했군!!", e.currentTarget);
    // ./images/speakers/1/white_smoke/0.webp
    // 0. 원조대상
    let org = $(e.currentTarget);

    // 1. 대상이미지선택
    let tg = org.parents(".item-p-info").prev().find("img");

    // 2. 대상이미지 src값 읽기
    let isrc = tg.attr("src").split("/");
    // console.log("전isrc:", JSON.stringify(isrc));
    // 3. 대상이미지 src값 변경
    isrc[9] = clr;
    // console.log("후isrc:", isrc);
    // 4. 대상이미지경로 복원
    isrc = isrc.join("/");
    // console.log("최종isrc:", isrc);
    // 5. 대상이미지 src 실제로 변경
    tg.attr("src", isrc);

    // 6. 현재 자신에게 클래스"on"넣기
    org.addClass("on").siblings().removeClass("on");
  }; ///////////// colorFn ////////////////

  useEffect(() => {
    // useEffect 안에서 jQuery를 이용한 이벤트 처리
    $(".wish svg").click(function () {
      // 현재 fill 속성 값을 가져옵니다.
      const currentFill = $(this).attr("fill");

      // 새로운 fill 속성 값을 설정합니다. 여기서는 빨강과 검정을 토글합니다.
      const newFill = currentFill === "red" ? "none" : "red";

      // 새로운 fill 속성 값을 적용합니다.
      $(this).attr("fill", newFill);
    });

    // clean-up 함수: 컴포넌트가 언마운트될 때 클릭 이벤트 핸들러를 제거합니다.
    return () => {
      $(".wish svg").off("click"); // 이벤트 제거
    };
  }, []);

  const products = data;
  return (
    <>
      <div className="shop-item">
        {/* 플렉스 설정 item-box */}
        {products.map((v, i) => {
          // console.log(v);
          const rdColor = getRdItem(v.color);
          // console.log(rdColor);
          // console.log(v.color);
          return (
            // 제품 각 박스
            <div className="item-cat-cont" key={i}>
                {/* 1.위시리스트 버튼 */}
                <span className="wish">
                  <WishlistHeartIcon strokeWidth="1" width="30" height="30" />
                </span>
                <Link
                to="/detail"
                state={{
                  pname: v.name,
                  type: v.MainType,
                  idx: v.idx,
                  src: v.isrc,
                  color: v.color,
                  cimg:v.cimg,
                  sel: rdColor
                }}
              >
              <div className="item-p-box">
                {/* ******************************* */}
                {/* 2.제품이미지 */}
                <div className="item-p-img">
                  <img
                    idx={v.idx}
                    src={`${process.env.PUBLIC_URL+v.isrc}${v.idx}/${rdColor}/0.webp`}
                    alt={v.name}
                  />
                </div>
                {/* ******************************* */}
                {/* 3.제품별 정보박스 */}
                <section className="item-p-info">
                  {/* 3-1.제품명 */}
                  <p className="item-p-name">{v.name}</p>
                  {/* 3-2.제품가격 */}
                  <p className="item-p-price">$ {v.price}</p>
                  {/* 3-3.제품색상 */}
                  <div className="item-p-color-box">
                    {v.color.map((clr, idx) => (
                      <div
                        key={idx}
                        className={`color-circle-wrap ${
                          clr == rdColor ? "on" : ""
                        }`}
                        onClick={(e) => colorFn(e, clr)}
                      >
                        <div
                          className="color-circle"
                          style={{ backgroundColor: colorList[clr] }}
                          title={clr}
                        />
                      </div>
                    ))}
                  </div>
                </section>
                {/* ******************************* */}
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SearchShopItems;
