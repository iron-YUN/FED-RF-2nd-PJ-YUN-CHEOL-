import React from 'react';
import mFn from '../my_function';


function sub4_mousePo(props) {
    const wrap = mFn.qs(".wrap");
    const moving = mFn.qs(".pointer");

    wrap.onmousemove = (e) => {
            moving.style.top = e.pageY + "px";
            moving.style.left = e.pageX + "px";
    };

    wrap.onmouseenter = () => {
        moving.style.opacity = 1;
    };
    
    wrap.onmouseleave = () => {
        moving.style.opacity = 0;
    };
}

export default sub4_mousePo;