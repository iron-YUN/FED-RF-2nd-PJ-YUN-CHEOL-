import React from 'react';
import mFn from '../my_function';

function sub4_poster(e) {
    
    const poster = mFn.qsa('.poster-common');

    
    const movFn = () => {
        
        mFn.qs(".main-poster").classList.add("on");
        // 2초후 앞에 있는 포스터 없애기
        setTimeout(()=>{
            poster[0].style.display="none";
        },3000)
    };
    
    mFn.addEvt(poster[0],"mouseenter",movFn)

}

export default sub4_poster;