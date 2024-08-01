import React, { useState } from "react";
import { charS3 } from "../data/sub3_char_data";

function S3CharSlide() {
    const [currentTab, clickTab] = useState(0);

    const selectMenu = (i) => {
        clickTab(i);
    };

    return (
        <div id="s3Char-area">
            <section className="char-area inbox">
                <div className="cont-box ">
                    <h2 className="main-title s3Sub-tit">Character</h2>
                    <div className="obj">
                    <div className="char-btn">
                        <ul className="indic">
                            {charS3.map((v, i) => (
                                <li key={i} className={i === currentTab ? "submenu focused" : "submenu"} onClick={() => selectMenu(i)}>
                                    <img src={process.env.PUBLIC_URL + v.cimg} />
                                    <span>{v.tit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="Desc">
                        <div className="char-box">
                            <ul className="char-banner sub-text2">
                                <li>
                                    <img src={process.env.PUBLIC_URL +charS3[currentTab].cimg} alt={charS3[currentTab].tit} />
                                    <p>{charS3[currentTab].ctxt}</p>
                                </li>
                                <li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default S3CharSlide;
