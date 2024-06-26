import React from 'react';

// 아이콘 svg 불러오기
import { snsIconMenu } from "../data/icons";

const sData = snsIconMenu;
console.log(sData);

function SnsLink() {
    return (
        <div className='sns-link'>
            {sData.map((v,i)=>
                <div className='sns-icon' key={i}>
                <a href={v.link}  title={v.txt} target="_blank">{v.comp}</a>
                </div>
            )}
        </div>
    );
}

export default SnsLink;