import React from 'react';

import "../../css/mypage.scss";
import Banner from '../modules/Banner';
function Mypage(props) {
    return (
        <>
        <Banner catName="My page" />
        <div id='mypage'>
            <h1>My Page</h1>
           <section>
            <div className="left"></div>
            <div className="right"></div>
           </section>
        </div>
        </>
    );
}

export default Mypage;