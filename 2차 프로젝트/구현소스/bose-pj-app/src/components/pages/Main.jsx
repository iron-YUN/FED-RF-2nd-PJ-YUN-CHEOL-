// 메인페이지 컴포넌트 ///
import "../../css/main_area.scss";
import MainPageBan from "../modules/MainPageBan";
export default function Main() {
  return (
    <>
      <div className="top-video">
        <a href="###">
          <video
            src="./videos/speak/speaker_main.mp4"
            loop
            autoPlay
            muted
            controls
          ></video>
        </a>
      </div>
      <div className="items-area"></div>
      <div className="main-ban-area">
        <MainPageBan />
      </div>
      <div className="sns-area"></div>
    </>
  );
} ////////////// TopArea /////////////
