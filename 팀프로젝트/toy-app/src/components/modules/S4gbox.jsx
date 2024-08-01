import React, { useEffect } from "react";

import sub4_gbox from "../func/sub4/sub4_gbox";
import { gData } from "../data/sub4/sub4_gdata";

import "../../css/sub4.scss";



function S4gbox(props) {
  useEffect(() => {
    sub4_gbox();
  }, []);

  return (
    <div className="gbox">
      <ul >
        {gData.map((v, i) => (
          <li key={i} >
            <a href="#">
              <img src={process.env.PUBLIC_URL+`/images/img4/${v.imgName}.jpg`} alt={v.idx} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default S4gbox;