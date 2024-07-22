import React, { useContext, useEffect, useState } from "react";
import { bCon, cCon } from "../modules/bCon";
// 제이쿼리
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";
import "../../css/wish_detail.scss";
import WhyBuyFromBose from "../modules/WhyBuyFromBose";
import { card } from "../data/card_data";
// 아이콘
import { HiMinus, HiPlus } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import MainPageRd from "../modules/MainPageRd";
function Wish({}) {
  const myCon = useContext(bCon);
  const goNav = useNavigate();
  // 로컬스 데이터 가져오기
  // const selData = JSON.parse(myCon.localsCart);
  const [selData, setSelData] = useState(JSON.parse(myCon.localsCart));
  ///////////////////////////////////////////////////////////////////
  console.log("ㅇ야양야양", myCon.loginSts);

  // 강제 리랜더링을 위한 상태변수
  const [force, setForce] = useState(false);
  // 더하기 버튼
  const [force1, setForce1] = useState(false);
  const [force2, setForce2] = useState(false);
  //////////////////////////////////////////////////
  useEffect(() => {
    const localCartData = JSON.parse(localStorage.getItem("wish-data"));
    if (localCartData) {
      setSelData(localCartData);
      myCon.localsCart = JSON.stringify(localCartData); // Context에 업데이트
    }
  }, []);
  selData.map((v, i) => {
    // 이거왜 두번실행되는거지
    // console.log(v.cnt);
    // console.log(v);
  });
  const updateCartData = (index, increment) => {
    if (index >= 0 && index < selData.length) {
      const updatedCnt = Math.max(
        1,
        parseInt(selData[index].cnt, 10) + increment
      );
      const updatedData = [...selData];
      updatedData[index].cnt = String(updatedCnt);

      // 상태 업데이트
      setSelData(updatedData);
      setForce(!force);
      // 로컬 스토리지에 업데이트된 데이터 저장
      localStorage.setItem("wish-data", JSON.stringify(updatedData));
      myCon.localsCart = JSON.stringify(updatedData); // Context에 업데이트
    }
  };
  //////////////////////////////////////////////////
  ///////////////////////////////////////////////
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } /////////////////
  ////////////////////////////////////////////////////

  // input 데이터 에 따른 display
  const [promoCode, setPromoCode] = useState("");

  const inputChange = (event) => {
    setPromoCode(event.target.value);
  };
  const showBtn = () => {
    window.open(
      "https://groups.id.me/en/groups/new",
      "_blank",
      "noopener,noreferrer"
    );
  };

  //  console.log("로컬스:", selData);
  // 전체 데이터 개수
  const dataCnt = selData.length;
  // console.log("데이터수:", dataCnt);
  // 총합계함수 /////////////
  const totalFn = () => {
    let result = 0;
    $(".sum-num2").each((idx, ele) => {
      // console.log("값:", $(ele).val());
      result += Number($(ele).val());
    });
    return result;
  }; ////////// totalFn ///////////
  //////////////// 총 가격 ///////////////////////
  useEffect(() => {
    $(".total-num").text("$" + addComma(totalFn()) + ".00");
    $(".total-saving").text(
      "$" + addComma(Math.round(totalFn() * 0.05 * 100) / 100)
    );
  }, [dataCnt, force, selData]);
  ///////////////////////////////////////////////
  function showFn1() {
    const box = document.querySelectorAll(".acount-info")[0];
    if (force1 !== true) {
      box.style.display = "block";
    } else if (force1 === true) {
      box.style.display = "none";
    }
  }
  function showFn2() {
    const box = document.querySelectorAll(".acount-info")[1];
    if (force2 !== true) {
      box.style.display = "block";
    } else if (force2 === true) {
      box.style.display = "none";
    }
  }
  return (
    <>
      <div id="wish_detail">
        <h1>Your Wish-list</h1>
        {/* 2.상세정보박스 */}
        <div className="detail-box">
          {/************************ 2-1. 왼쪽박스 ************************/}
          <div className="left">
            <h3 className="pcnt">Products ({dataCnt})</h3>
            {
              // 데이터수 0 이면 안내메시지 출력
              // 그게아니면 장바구니 리스트 출력
              dataCnt === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is currently empty.</p>
                  <Link
                    to="/shop"
                    style={{ textDecoration: "underline" }}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      myCon.setPos(0);
                    }}
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="cart-list-box">
                  {selData.map((v, i) => (
                    <a
                      key={i}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.scrollTo(0, 0);
                        myCon.setPos(0);
                        myCon.setSelColor(v.color);
                        goNav("/detail", {
                          state: {
                            pname: v.pname,
                            type: v.type,
                            idx: v.idx,
                            src: v.src,
                            sel: myCon.selColor,
                          },
                        });
                      }}
                    >
                      <div className="cart-item">
                        <button
                          className="del"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            // confirm()의 "확인"클릭시 true
                            if (
                              window.confirm(
                                "Are you sure you want to delete this item?"
                              )
                            ) {
                              // console.log("삭제함!!!");
                              // console.log("현재객체:",selData);
                              // console.log("지울순번:",i);
                              // // splice 자체를 찍으면 지워진 요소가 찍힘
                              // console.log("지우기:",selData.splice(i,1));

                              // 지울 배열 순번은 map()에서 i로 들어옴
                              // 지울 배열은 selData임
                              // 1.데이터 지우기 :
                              selData.splice(i, 1);
                              // 2. 데이터 문자화하기 : 변경된 원본을 문자화
                              let res = JSON.stringify(selData);
                              // 3.로컬스 "wish-data"반영하기
                              localStorage.setItem("wish-data", res);
                              // 4. 카트리스트 전역상태변수 변경
                              myCon.setLocalsCart(res);
                              // 5. 데이터개수가 0이면 카트리스트
                              // 상태변수를 false로 변경하여
                              // 카트리스트 출력을 없앤다!
                              if (selData.length == 0) myCon.setCartSts(false);
                              // let aa = [];
                              // aa.splice(지울순번,지울개수)
                            } //// if /////
                          }}
                        >
                          <IoCloseOutline />
                        </button>
                        <div className="cart-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              v.src +
                              v.idx +
                              "/" +
                              v.color +
                              "/0.webp"
                            }
                            alt=""
                          />
                        </div>
                        <div className="cart-info">
                          <div className="item-name">{v.pname}</div>
                          <div className="item-color">color: {v.color}</div>
                          <div className="item-num">
                            <div className="item-cnt">
                              <button
                                onClick={(e) => {
                                  updateCartData(i, -1);
                                  e.stopPropagation();
                                  e.preventDefault();
                                }}
                              >
                                <HiMinus />
                              </button>
                              <span>{v.cnt}</span>
                              <button
                                onClick={(e) => {
                                  updateCartData(i, 1);
                                  e.stopPropagation();
                                  e.preventDefault();
                                }}
                              >
                                <HiPlus />
                              </button>
                            </div>
                            <div className="item-price">
                              ${addComma(v.price * v.cnt)}.00
                            </div>
                            <input
                              className="sum-num2"
                              type="hidden"
                              defaultValue={v.price * v.cnt}
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )
            }
            <div className="row">
              <div className="col-8">
                <h3>Subtotal : </h3>
              </div>
              <div className="col-4">
                <h3 className="total-num"></h3>
              </div>
            </div>
          </div>
          {/************************* 2-2.오른쪽박스 *************************/}
         
          {/**************************  **************************/}
        </div>
      </div>
      <WhyBuyFromBose />
      <MainPageRd />
    </>
  );
}

export default Wish;
