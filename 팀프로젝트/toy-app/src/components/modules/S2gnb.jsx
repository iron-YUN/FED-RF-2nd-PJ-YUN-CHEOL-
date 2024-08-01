import React, { useEffect, useState } from 'react';
import { gnbItems2 } from "../func/sub2/sub2_data";
import mFn from '../func/my_function';
const S2gnb = () => {

    useEffect(() => {
        const gnbLi = mFn.qsa(".gnb-ul li");
        // console.log("나와라 li",gnbLi);
        gnbLi[0].classList.add('on');
    }, []);
    return (
        <ul className="gnb-ul">
            {
                gnbItems2.map((v, i) => (
                    <li key={i}>
                       <a href={`#${v.link}`}>{v.tit}</a>
                    </li>
                ))
            }
        </ul>
    );
}

export default S2gnb;