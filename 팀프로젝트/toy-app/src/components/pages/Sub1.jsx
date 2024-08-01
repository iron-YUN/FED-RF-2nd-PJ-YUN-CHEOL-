import S1Movie from "../modules/S1Movie";
import S1Main from "../modules/S1Main";
import S1Degin from "../modules/S1Degin";
import S1Character from "../modules/S1Character";
import S1BgDegin from "../modules/S1BgDegin";
import S1ChDegin from "../modules/S1ChDegin";
import S1BgCdegin from "../modules/S1BgCdegin";



/// CSS 불러오기
import "../../css/sub1.scss";



export default function Sub1(){
    // 코드 리턴구역 ////
    return(
        <>
        <div className="S1main-bx">
            <S1Main/>
        </div>
        <div className="trmovie-box">
            <S1Movie/>
        </div>
        <div className="S1Cha-box">
            <S1Character/>
        </div>
        <div className="S1design-bx">
            <S1Degin/>
            <S1BgDegin/>
        </div>
        <div className="S1cha-designbx">
            <S1ChDegin/>
        </div>
        <div className="S1bg-designbx">
            <h2>Background Concept Design</h2>
            <S1BgCdegin/>
        </div>
        </>
    );
} /////// Sub1 /////