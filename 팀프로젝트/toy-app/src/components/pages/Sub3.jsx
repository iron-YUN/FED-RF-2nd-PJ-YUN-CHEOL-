import "../../css/sub3.scss";
import S3CharSlide from "../modules/S3CharSlide";
import S3trailer from "../plugin/s3Trailer";

// import goTop from "../func/sub3/goTop";
import { useEffect } from "react";
import scrollShowFn from "../func/sub3/scroll_show";

export default function Sub3() {

    useEffect(()=>{
        scrollShowFn();
    },[]);

    // goTop();

    // 코드 리턴구역 ////
    return (
        <>
         {/* <button id="btn-back-to-top" title="위로 가기"></button> */}
            <div id="s3Intro-area">
                <section className="intro-area">
                    <div className="cont-box">
                        <div className="bg-box"></div>

                        <div className="toy-3rd-logo">
                            <img src={process.env.PUBLIC_URL+
                        "/images/img3/toystory_logo3-removebg-preview.png"} alt="toy3-logo" />
                        </div>

                        <div className="sino-box">
                            <span className="sub-text sub-text1">
                                The creators of the beloved Toy Story films re-open the toy box and bring moviegoers back to the delightful world of our favorite gang of toy characters in Toy Story 3. As Andy prepares to depart for college, Buzz, Woody, and the rest of his loyal toys are troubled about their uncertain future. <br />
                                <br />
                                Toy Story 3 is a comical adventure that lands the toys in a room full of untamed tots who can't wait to get their sticky little fingers on these "new" toys. It's pandemonium as the toys try to stay together, ensuring that "no toy gets left behind."
                            </span>
                        </div>
                    </div>
                </section>
            </div>

            <S3CharSlide />

            <div id="s3Video-area">
                <section className="video-area inbox">
                    <h2 className="s3Sub-tit main-title">Trailer</h2>
                    <S3trailer/>
                </section>
            </div>
        </>
    );
} /////// Sub3 /////
