import mFn from "./my_function.js";

export default function goSub(){
      // 대상: .GNB
      const GNB = mFn.qs("#GNB");
      // 대상: .ts
      const TS = mFn.qs(".ts");
      // 대상: .bg-image

    // GNB 내용
    let gnbContent = '<ul class="menu-list">';
    // TS 내용
    let tsContent = '';
    for (let i = 1; i <= 4; i++) {
        gnbContent += `
        <li data-index="${i}"><a href="./sub${i}.html">Toy Story ${i}</a></li>
        `;
        tsContent += `<img src="./IMG/poster/0${i}_ts.jpg" alt="ts${i}" class="ts-img">`;
    }
    gnbContent += "</ul>";

    // 내용 삽입
    GNB.innerHTML = gnbContent;
    TS.innerHTML = tsContent;

}///////////////////////
