import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./css/main_page_top.scss";
import { logoSrc } from "../data/img_src";
import { topVideo } from "../data/main_page_banner";
import { subMenu } from "../data/gnb";
import { banColor } from "../data/color_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-regular-svg-icons";
import { faVolumeXmark, faVolumeHigh, faExpand } from "@fortawesome/free-solid-svg-icons";
import { bCon } from "./bCon";


const MainPageTop = () => {
  const myCon = useContext(bCon);
  const mainVideoRef = useRef(null);
  const smallVideoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [vcolor, setVColor] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false); // 전체화면 상태 추가
  const [savedVolume, setSavedVolume] = useState(0.3); // 소리 설정 상태 추가

  useEffect(() => {
    const rdIdx = Math.floor(Math.random() * topVideo.length);
    const randomVideo = topVideo[rdIdx];
    const color =
      rdIdx === 0
        ? banColor.moonstone_blue
        : rdIdx === 1
        ? banColor.pure_white
        : rdIdx === 2
        ? banColor.white_smoke
        : rdIdx === 3
        ? banColor.head
        : banColor.ear;

    setSelectedVideo(randomVideo);
    setVColor(color);
  }, []);

  useEffect(() => {
    const mainVideo = mainVideoRef.current;
    const smallVideo = smallVideoRef.current;

    if (mainVideo && smallVideo) {
      const syncVideos = () => {
        smallVideo.currentTime = mainVideo.currentTime;
        if (mainVideo.paused && !smallVideo.paused) {
          smallVideo.pause();
        } else if (!mainVideo.paused && smallVideo.paused) {
          smallVideo.play().catch((error) => {
            console.error("Error attempting to play the small video:", error);
          });
        }
      };

      mainVideo.volume = muted ? 0 : savedVolume; // 저장된 볼륨 설정 적용
      smallVideo.volume = muted ? 0 : 0;

      const handlePlayPause = () => {
        syncVideos();
        setIsPlaying(mainVideo.paused);
      };

      const handleTimeUpdate = () => {
        syncVideos();
      };

      mainVideo.addEventListener("play", handlePlayPause);
      mainVideo.addEventListener("pause", handlePlayPause);
      mainVideo.addEventListener("seeked", handleTimeUpdate);
      mainVideo.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        mainVideo.removeEventListener("play", handlePlayPause);
        mainVideo.removeEventListener("pause", handlePlayPause);
        mainVideo.removeEventListener("seeked", handleTimeUpdate);
        mainVideo.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [muted, savedVolume]); // muted와 savedVolume 상태가 변경될 때마다 useEffect 실행

  const togglePlayPause = () => {
    const mainVideo = mainVideoRef.current;
    if (mainVideo.paused) {
      mainVideo.play();
      setIsPlaying(true);
    } else {
      mainVideo.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const toggleFullscreen = () => {
    const mainVideo = mainVideoRef.current;
    if (!isFullscreen) {
      if (mainVideo.requestFullscreen) {
        mainVideo.requestFullscreen();
      } else if (mainVideo.mozRequestFullScreen) { /* Firefox */
        mainVideo.mozRequestFullScreen();
      } else if (mainVideo.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        mainVideo.webkitRequestFullscreen();
      } else if (mainVideo.msRequestFullscreen) { /* IE/Edge */
        mainVideo.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  // 전체화면 상태에 따라 아이콘 변경 로직 추가
  const playPauseIcon = isPlaying ? (
    <FontAwesomeIcon icon={faCirclePlay} className="play-icon play-a" />
  ) : (
    <FontAwesomeIcon icon={faCirclePause} className="play-icon play-a" />
  );

  const muteIcon = muted ? (
    <FontAwesomeIcon icon={faVolumeXmark} className="play-icon play-b" />
  ) : (
    <FontAwesomeIcon icon={faVolumeHigh} className="play-icon play-b" />
  );

  return (
    <div className="main-page-top">
      <div className="top-video">
        <div className="big-wrap-box">
          <div className="big-box">
            <video
              ref={mainVideoRef}
              src={selectedVideo}
              loop
              autoPlay
              muted={muted}
              className="big-video"
              controls={isFullscreen ? true : false} // 전체화면일 때만 컨트롤바 표시
            ></video>
          </div>
        </div>
        <div className="small-wrap-box">
          <div className="small-box">
            <video
              ref={smallVideoRef}
              src={selectedVideo}
              loop
              muted={muted}
              className="small-video"
            ></video>
            <div className="logo-box none-sel nonedrag">
              <img src={logoSrc.svg1} alt="logo " />
            </div>
          </div>
        </div>
        <ul className="play-top-vid" style={{ color: vcolor }}>
          <li onClick={togglePlayPause}>
            {playPauseIcon}
          </li>
          <li onClick={toggleMute}>
            {muteIcon}
          </li>
          <li onClick={toggleFullscreen}>
            <FontAwesomeIcon icon={faExpand} className="play-icon play-c" />
          </li>
        </ul>
      </div>
      <div className="go-tit-box">
        <div className="go-tit">
          {subMenu.map((v, i) => (
            <div className="tit-box" key={i} style={{ color: vcolor }}>
              <h2 className="tit1 wavw1" style={{ color: vcolor }}>
                {v.txt}
              </h2>
              <h2 className="tit1 wavw2">
                <Link to={v.link} style={{ color: vcolor }}>
                  {v.txt}
                </Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default MainPageTop;