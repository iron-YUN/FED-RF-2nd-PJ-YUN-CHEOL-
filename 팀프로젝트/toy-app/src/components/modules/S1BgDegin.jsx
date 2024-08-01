import React from 'react';

import { designBData } from '../data/sub1/sub1_data';

// CSS 불러오기
import "../../css/sub1.scss";

function S1BgDegin(props) {
    return (
        <>
          {designBData.map((v,i) => (
            <section key={i} className="S1bgdintro">
              <div className="S1degbmovie">
              <h3>{v.title02}</h3>
              <div className="S1dbg-box">
                <div className="dmovie3">
                  <iframe src={v.mvid03}></iframe>
                </div>
                <div className="dmovie4">
                  <iframe src={v.mvid04}></iframe>
                </div>
                <h4>{v.subintro02}</h4>
              </div>
              </div>
            </section>
          ))}
        </>
      );
}

export default S1BgDegin;