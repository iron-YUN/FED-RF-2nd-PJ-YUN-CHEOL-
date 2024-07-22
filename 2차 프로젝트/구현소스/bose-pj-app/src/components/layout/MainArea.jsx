// 메인영역 컴포넌트 ///

import { Outlet } from "react-router-dom";
// Outlet 컴포넌트는 리액트라우터에서 컴포넌트를
// 변경하여 출력하는 자리를 잡아주는 역할을 한다
// export const MainArea =memo(({loginSts})=> {
//     const [nowColor, setNowColor] = useState('');
// //////////////////////////////////////////////////
//     return (
//         <cCon.Provider value={{nowColor, setNowColor }}>
//         <main className="cont">
//             <Outlet loginSts={loginSts}/>
//         </main>
//         </cCon.Provider>
//       );
// }); ////////////// MainArea /////////////
export default function MainArea({ loginSts }) {
  //////////////////////////////////////////////////
  return (
    <main className="cont">
      <Outlet loginSts={loginSts} />
    </main>
  );
} ////////////// MainArea /////////////
