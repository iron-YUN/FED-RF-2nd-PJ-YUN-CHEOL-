// 메인페이지 컴포넌트 ///
import "../../css/main_area.scss";
import MainPageBan from "../modules/MainPageBan";
import Trending from "../modules/Trending";
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
      <div className="items-area">
        <Trending/>
      </div>
      <div className="main-ban-area">
        <MainPageBan />
      </div>
      <div className="sns-area"></div>
    </>
  );
} ////////////// TopArea /////////////
