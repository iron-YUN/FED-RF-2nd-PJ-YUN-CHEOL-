import React from 'react';
import Banner from '../modules/Banner';
import Searching from '../modules/Searching';
import WhyBuyFromBose from '../modules/WhyBuyFromBose';

// 라우터 전달변수값 받기위해
import { useLocation } from 'react-router-dom';
import MainPageRd from '../modules/MainPageRd';

function SearchPage() {
    // 라우터 전달값 받기 객체 생성
    const loc = useLocation();
    // 넘어온 키워드 받기 ////
    let keyword = loc.state.keyword;

    console.log("검색어:",keyword)

    // 코드 리턴구역 //////////
    return (
        <>
        <Banner catName="Search"/>
        <Searching kword={keyword} />
        <WhyBuyFromBose />
        {/* 랜덤 추천 제품 */}
        <MainPageRd />
    </>
    );
}

export default SearchPage;