import mFn from "./my_function.js";
import slideTrailersFn from "./sub2/slide.js";

export default function showTrailers() {
    const slide = mFn.qs("#slide");
    let hcode = "";
    hcode = `
    <div class="trailer">
    <video src="./video/sub_2/Trailer_1.mp4" controls poster="./video/sub_2/tp1.jpg"></video>
  </div>
  <div class="trailer">
    <video src="./video/sub_2/Trailer_2.mp4" controls poster="./video/sub_2/tp2.jpg"></video>
  </div>
  <div class="trailer">
    <video src="./video/sub_2/Trailer_3.mp4" controls poster="./video/sub_2/tp3.jpg"></video>
  </div>
  <div class="trailer">
    <video src="./video/sub_2/Trailer_4.mp4" controls poster="./video/sub_2/tp4.jpg"></video>
  </div>
    `;
    slide.innerHTML =hcode; 
    slideTrailersFn();
}///////////////showTrailers//////////////