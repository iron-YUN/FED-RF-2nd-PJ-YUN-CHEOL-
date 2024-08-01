
import { chaData } from "../../data/sub1/sub1_data.js";

//CSS 불러오기
import "../../../css/sub1.scss";


export default function sub1Cbox(ref) {
  const chgrid = ref.current;

  // 이미지 넣기
  if (chgrid) {
    for (let i = 1; i <= 8; i++) {
      chgrid.innerHTML += `
        <div class="s1chbox">
          <img src=${process.env.PUBLIC_URL}/images/img1/cha0${i}.jpg alt="캐릭터">
          <div class="s1chtit">
          <h3>${chaData[i - 1].chaname}</h3>
          <p>${chaData[i - 1].chaintro}</p>
          </div>
        </div>
      `;
    }
  }
}
