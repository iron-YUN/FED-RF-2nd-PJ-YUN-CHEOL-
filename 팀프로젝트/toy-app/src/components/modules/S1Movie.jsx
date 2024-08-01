import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnsplash } from "@fortawesome/free-brands-svg-icons";
import { clipData } from "../data/sub1/sub1_data";

// CSS 불러오기
import "../../css/sub1.scss";

function S1Movie() {

  const [tmovieBtn, setTmovieBtn] = useState(false);

  const s1trButton = () => {
    setTmovieBtn(!tmovieBtn);
  };


  return (
    <>
      {clipData.map((v,i) => (
        <section key={i} className="S1trintro">
          <div className="S1trmovie">
            <h3>{v.title}</h3>
          </div>
          <div className="S1tbox">
            <div className="tmovie1">
              <iframe src={v.mvid01}></iframe>
            </div>
            <div className="tmovie2">
              <iframe src={v.mvid02}></iframe>
            </div>
          <button
          className="S1tbtn"
          onClick={s1trButton}
          >
          <FontAwesomeIcon icon={faUnsplash} bounce size="xl" />
          </button>
          {tmovieBtn && (
          <h4>{v.subintro}</h4>
          )}
          </div>
        </section>
      ))}
    </>
  );
}

export default S1Movie;
