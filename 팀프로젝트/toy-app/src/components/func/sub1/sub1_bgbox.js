import mFn from "../my_function.js";

//CSS 불러오기
import "../../../css/sub1.scss";


export default function sub1bgbox() {

  const bgcgrid = mFn.qs("#S1bgc-box");
  
  // 이미지 넣기
  if (bgcgrid) {
    // 20개 이미지 넣기
    for (let i = 1; i <= 19; i++) {
      bgcgrid.innerHTML += `
      <div ${
        i === 1
          ? 'class="first beingTxt"'
          : i === 8
          ? 'class="second beingTxt"'
          : i === 15
          ? 'class="third beingTxt"'
          : i === 18
          ? 'class="fourth beingTxt"'
          : ""
      }>
          <img src=${process.env.PUBLIC_URL}/images/img1/bged${i}.jpg alt="bg">
      </div>
      `;
    } //////// for /////////

    const S1imgTxt = [
      "[Andy's House]<br>Andy’s room was a world of its own, home to most of Toy Story’s characters and a place that immediately conveyed comfort and safety. That sense of safety provided the conflict as the characters faced new anxieties like leaving the house and welcoming a new toy.",
      "[Sid's House]<br>Movie villains are often more fun than the straight guy, and many on the Pixar team found they related to the mutant impulses of Sid, the bad boy next door. “I think Sid is normal,” says Andrew Stanton. “I think Andy is the weird one, this boy who takes care of his toys.” Coming up with disturbing new creations to populate Sid’s room became one of the most popular tasks in Toy Story.",
      "Dinoco Station",
      "Pizza Planet",
    ];

    mFn.qsaEl(bgcgrid, ".beingTxt").forEach((ele, idx) => {
      ele.innerHTML += `<span>${S1imgTxt[idx]}</span>`;
    });
  }
}
