// 보그 PJ 메인 JS - main.js
import TopArea from "./components/TopArea";
import MainArea from "./components/MainArea";
import ItemsArea from "./components/ItemsArea";
import FooterArea from "./components/FooterArea";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import Member from "./components/Member";
// [1]메인페이지 전체 레이아웃 로딩 컴포넌트
function Layout(){
  // 상태관리변수 설정구역 //
  // [1] 메뉴 변경 상태변수
  const [menu, setMenu] = React.useState("home");

  // 화면 랜더링 직전에 css 로딩 변경하기
  React.useLayoutEffect(()=>{
    // memu 상태변수에 의존시킨다
    document.querySelector("#main-css").href = 
    menu=="home" 
    ? "./css/main.css" 
    : menu=="gallery" 
    ? "./css/gallery.css" 
    : menu=="login" 
    ? "./css/login.css" 
    : menu=="member" 
    ? "./css/member.css" 
    : "./css/items.css";
    // memu값이 홈인경우 메인css 로딩
    // gallery 값인경우 겔러리css 로딩
    // 기타메뉴인경우 아이템css 로딩
  },[menu]);


  return(
  <React.Fragment>
        {/* // 1.상단영역 컴포넌트 */}
        <TopArea changeMenu={setMenu}/>
        
        {/* // 2.메인영역 컴포넌트 */}
        {
            menu=="home"
            ?<MainArea />
            :menu=="gallery"
            ?<Gallery />
            :menu=="login"
            ?<Login />
            :menu=="member"
            ?<Member />
            :<ItemsArea catName={menu} />
        }
        
        {/* // 3.하단영역 컴포넌트 */}
        <FooterArea/>
  </React.Fragment>
  );
}///////////////////////////////////

// 메인페이지 전체출력하기
ReactDOM.render(<Layout/>,document.querySelector("#root"));