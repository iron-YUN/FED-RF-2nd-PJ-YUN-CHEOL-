
import mFn from "../my_function";
import React from 'react';

function sub4_gbox(props) {
    const gbox = mFn.qs(".gbox");

    let target = mFn.qsEl(gbox, "ul");
  console.log(target);

  const updateCriteria = () => mFn.qsaEl(target, "li")[0].offsetWidth;

  let criteria = updateCriteria();

  mFn.addEvt(
    window,
    "resize",

    () => {
      criteria = updateCriteria();
    }
  );

  // 현재 translate 값
  let currVal = 0;

  function moveGallery() {
    // 현재값 1씩 감소
    target.style.translate = --currVal + "px";

    if (currVal <= Math.floor(-criteria)) {
      target.appendChild(mFn.qsaEl(target, "li")[0]);

      // translate 값 초기화
      target.style.translate = "0px";

      // 한 이미지 크기만큼 나가면 currVal값 초기화
      currVal = 0;
      
    } ///////////////// if 문 /////////

    if (!stopSts) setTimeout(moveGallery, 10);
  } //////// moveGallery ///////////////

  let stopSts = false;

  mFn.addEvt(gbox, "mouseenter", () => {
    stopSts = true;
  });

  mFn.addEvt(gbox, "mouseleave", () => {
    stopSts = false;

    moveGallery();
  });
}

export default sub4_gbox;


