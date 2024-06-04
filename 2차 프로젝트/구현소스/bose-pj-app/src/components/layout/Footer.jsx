// 하단영역 컴포넌트 ///
import Logo from "../modules/Logo";

// 하단메뉴 데이터불러오기
import { bmData } from "../data/bmenu";

// 하단영역 css 불러오기
import "../../css/footer_area.scss";
export default function FooterArea() {
  return (
    <footer className="info">
      <ul>
        {Object.keys(bmData).map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </footer>
  );
} ////////////// FooterArea /////////////

{
  /* 하단링크박스 */
}
// <ol className="bmenu">
//   {
//     bmData.map((v,i)=>
//     <li key={i}>
//       <a href={v.link} target="_blank">
//         {v.txt.toUpperCase()
//         // toUpperCase 대문자변환
//         // toLowerCase 소문자변환
//       }
//       </a>
//     </li>)
//   }
// </ol>
