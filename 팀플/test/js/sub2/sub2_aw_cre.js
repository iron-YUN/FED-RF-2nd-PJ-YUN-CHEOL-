import mFn from "../my_function.js";
import { creditsItems, awardsItems} from "./sub2_data.js";
export default function showAwardsCredits (){
////////////////////////////////////////크레딧뿌려주기///////////////////////////////////////////////////////
innerCredits();
function innerCredits() {
  const credits = mFn.qs(".credits-text");
  let hcode = ``;
  Object.keys(creditsItems).forEach((key) => {
    if (key !== "CAST") {
      hcode += `<p><strong>${key}</strong><br>${creditsItems[key]}<br></p>`;
    } /////////// if ///////////////////
    else {
      hcode += `<p><strong>${key}</strong><br></p>`;
    } //////////// else ///////////////
  });
  credits.innerHTML = hcode;
} ////////////////////////////////////크레딧뿌려주기/////////////////////////////////////////

///////////////////////////////어워즈 뿌려주기//////////////////////////////////////////////
innerAwards();
function innerAwards() {
  const awards = mFn.qs(".awards-text");
  let hcode = ``;
  Object.keys(awardsItems).forEach((key) => {
    hcode += `<p><strong>${key}</strong><br>`;
    awardsItems[key].forEach((item) => {
      hcode += `${item ? item + "<br>" : "<br>"}`;
    });
    hcode += `</p>`;
  });
  awards.innerHTML = hcode;
} /////////////////////////////////////어워즈 뿌려주기////////////////////////////////////////
}