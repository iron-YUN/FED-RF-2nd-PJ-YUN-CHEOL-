

// 데이터 불러오기
import { footerItems } from "../data/top_foot_data";
const sns = footerItems.sns;
const policy = footerItems.policy;

export default function FooterArea() {
  // 코드 리턴구역 ////
  return (
    <>
      <div id="foot-back">
        <footer id="footer-area" className="section ibx">
          <div className="footer-bx col-12">
              <div className="sns-part">
                <aside className="sns-box">
                  <ul>
            { 
                    sns.map((v,i)=>
                    <li key={i}>
                      <a href={v.href} target="_blank">{v.text}</a>
                    </li>
                    )
              }
                  </ul>
                </aside>
              </div>
            
              <div className="fcont-part">
                <aside className="info-link">
                  <ul>
                  { 
                    policy.map((v,i)=>
                    <li key={i}>
                      <a href={v.href} target="_blank">{v.text}</a>
                    </li>
                    )
              }
                  </ul>
                </aside>
              </div>
            
            
            <div className="corp-part">
              <address className="corp-info">
                © 1986-2024 DISNEY / PIXAR
              </address>
            </div>
            
          </div>
        </footer>
      </div>
    </>
  );
} /////// FooterArea /////
