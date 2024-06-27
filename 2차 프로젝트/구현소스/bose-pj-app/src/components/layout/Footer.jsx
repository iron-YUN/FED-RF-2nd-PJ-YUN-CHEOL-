// 하단영역 컴포넌트 ///
import Logo from "../modules/Logo";

// 하단메뉴 데이터불러오기
import { bmData, bmData2, bmData3 } from "../data/bmenu";


// 하단영역 css 불러오기
import "../../css/footer_area.scss";
import SnsLink from "../modules/SnsLink";

export default function FooterArea() {
  return (
    <footer className="footer-area">
      <section className="info">
      <div className="from-container">
        <div className="send-email-tit">
          <span>
            Be the first to know. Sign up to receive Bose emails &
            communications.
          </span>
        </div>
        <div className="input-holder">
          <input
            type="email"
            className="input-send"
            placeholder="Email address"
          />
          <button type="submit" className="btn-secondary">
            <span className="btn-text">SEND</span>
          </button>
        </div>
      </div>
      <div className="footer-md">
        <ul className="about-link1">
          {Object.keys(bmData).map((v, i) => (
            <li key={i}>
              <p className="link-tit">{v}</p>
              <ol>
                {bmData[v].map((v, i) => (
                  <li key={i}>
                    <a href={v.link} target="_blank" rel="noopener noreferrer">
                      {v.text}
                    </a>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
        <ul className="footer-app">
          {bmData2.map((v, i) => (
            <li key={i}>
              <a href={v.link} target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL+v.src} alt="app-img" />
                <span>{v.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sns-link-box"><SnsLink/></div>
      <ul className="about-link2">
        © Bose Corporation 2024
        {bmData3.map((v, i) => (
          <li key={i}>
            <a href={v.link} target="_blank" rel="noopener noreferrer">
              {v.text}
            </a>
          </li>
        ))}
      </ul>

      </section>
    </footer>
  );
} ////////////// FooterArea /////////////
