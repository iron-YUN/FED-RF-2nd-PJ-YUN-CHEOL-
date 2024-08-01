import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnsplash } from "@fortawesome/free-brands-svg-icons";
import { designData } from '../data/sub1/sub1_data';


// CSS 불러오기
import "../../css/sub1.scss";



function S1Degin () {

  const [dmovieBtn, setDmovieBtn] = useState(false);

  const s1drButton = () => {
    setDmovieBtn(!dmovieBtn);
  };



  return (
    <>
      {designData.map((v,i) => (
        <section key={i} className="S1deintro">
          <div className="S1demovie">
            <h3>{v.title01}</h3>
          </div>
          <div className="S1dbox">
            <div className="dmovie1">
              <iframe src={v.mvid01}></iframe>
            </div>
            <div className="dmovie2">
              <iframe src={v.mvid02}></iframe>
            </div>
            <button
          className="S1dbtn"
          onClick={s1drButton}
          >
          <FontAwesomeIcon icon={faUnsplash} bounce size="xl" />
          </button>
          {dmovieBtn && (
          <h4>{v.subintro01}</h4>
          )}
          </div>
        </section>
      ))}
    </>
  );
  }




export default S1Degin;