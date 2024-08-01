import mFn from "../my_function.js";
import slideTrailersFn from "./slide.js";

export default function showTrailers() {
  slideTrailersFn();
  const slide = mFn.qs("#slide");
  let hcode = "";
  for (let i = 1; i < 5; i++) {
    hcode += `
    <div class="trailer">
    <video src="/video/sub_2/Trailer_${i}.mp4" controls poster="/video/sub_2/tp${i}.jpg">
    </video>
  </div>
    `;
  }
  slide.innerHTML = hcode;
} ///////////////showTrailers//////////////
