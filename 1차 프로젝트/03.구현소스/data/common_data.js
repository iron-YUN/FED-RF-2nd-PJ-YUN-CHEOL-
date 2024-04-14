// 공통요소 데이터 객체 - common_data.js
const comData ={
    // 상단영역 코드
    topArea : `
    <header class="inbox top-area">
    <div class="cont-box top-box">
      <!-- 2-1.메인메뉴 아이콘박스 -->
      <div class="col-top2 icon-menu1">
        <nav class="">
          <!-- 메인메뉴 아이콘 -->
          <ul>
            <li>
              <a href="###" class="btnMenu top-btn">
                <span>
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <g fill="currentColor">
                      <path
                        d="M11.53 9.765c-1.381.801-2.769 1.496-4.53 1.496v2c2.323 0 4.102-.936 5.533-1.765l.47-.275c.534-.313 1-.587 1.466-.807C15.051 10.14 15.539 10 16 10c.46 0 .949.14 1.531.414.466.22.932.493 1.465.806l.47.276c1.432.83 3.211 1.765 5.534 1.765v-2c-1.761 0-3.148-.695-4.53-1.496a78.44 78.44 0 0 1-.415-.242c-.545-.32-1.115-.656-1.672-.918C17.666 8.267 16.873 8 16 8c-.872 0-1.666.267-2.383.605-.557.262-1.127.597-1.672.918l-.415.242Z"
                      ></path>
                      <path
                        d="M7 16.261c1.761 0 3.149-.695 4.53-1.496l.415-.242c.545-.32 1.115-.656 1.672-.918.717-.338 1.51-.605 2.383-.605.872 0 1.666.267 2.383.605.557.262 1.127.597 1.672.918.14.082.279.164.415.242 1.382.801 2.769 1.496 4.53 1.496v2c-2.323 0-4.102-.936-5.533-1.765l-.47-.275c-.534-.313-1-.587-1.466-.807C16.949 15.14 16.461 15 16 15c-.46 0-.949.14-1.531.414-.466.22-.932.493-1.465.806l-.47.276c-1.432.83-3.211 1.765-5.534 1.765v-2Z"
                      ></path>
                      <path
                        d="M7 21.261c1.761 0 3.149-.695 4.53-1.496l.415-.242c.545-.32 1.115-.656 1.672-.918.717-.338 1.51-.605 2.383-.605.872 0 1.666.267 2.383.605.557.262 1.127.597 1.672.918.14.082.279.164.415.242 1.382.801 2.769 1.496 4.53 1.496v2c-2.323 0-4.102-.936-5.533-1.765l-.47-.275c-.534-.313-1-.587-1.466-.807C16.949 20.14 16.461 20 16 20c-.46 0-.949.14-1.531.414-.466.22-.932.493-1.465.806l-.47.276c-1.432.83-3.211 1.765-5.534 1.765v-2Z"
                      ></path>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- 2-2. 메인로고 -->
      <div class="col-top1 logo-top-box">
        <a class="top-logo2" href="./index.html">
          <img
            class="top-logo"
            src="../01.자료수집/LOGO/Logo.svg"
            alt="메인 로고"
          />
        </a>
      </div>
      <!--2-3. 아이콘 메뉴 -->
      <div class="col-top2 icon-menu2">
        <ul>
          <li>
            <a href="#" class="top-btn">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <g fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M19.274 16.78A5 5 0 1 0 16 18c3.192 0 6 3.004 6 7h2c0-3.585-1.898-6.796-4.726-8.22ZM19 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    d="M10 25c0-2.375 1.013-4.441 2.516-5.696l-1.282-1.535C9.25 19.424 8 22.064 8 25h2Z"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" class="top-btn">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 11v1H8v13h16V12h-4v-1a4 4 0 0 0-8 0Zm4-2a2 2 0 0 0-2 2v5h-2v-2h-2v9h12v-9h-2v2h-2v-2h-2v-2h2v-1a2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
    `,
    
    // 하단영역 코드
    footerArea:`
    <footer class="footer-area inbox">
    <div class="f-top">
      <div class="f-top-flex">
        <div>
          Join The Macallan Society for a richer experience with The
          Macallan.
        </div>
        <div class="fj-btn">JOIN US</div>
      </div>
    </div>
    <div class="f-line"></div>
    <div class="f-grid-contain">
      <div class="fgcon1">
        <a href="###" class="foot-logo">
          <img src="../01.자료수집/LOGO/Logo_dark.svg" alt="하단로고" />
          <img
            src="../01.자료수집/LOGO/Logo_mobile.svg"
            alt="하단로고"
          />
        </a>
        <ul class="foot-menu foot-menu1">
          <li>
            <a href="###">COLLECTIONS</a>
          </li>
          <li>
            <a href="###">CLASSIC RANGE</a>
          </li>
          <li>
            <a href="###">TRAVEL EXCLUSIVE</a>
          </li>
          <li>
            <a href="###">LIMITED RELEASES</a>
          </li>
          <li>
            <a href="###">LIFESTYLE & ACCESSORIES</a>
          </li>
          <li>
            <a href="###">ARCHIVE</a>
          </li>
        </ul>
        <ul class="foot-menu foot-menu2">
          <li>
            <a href="###">ABOUT</a>
          </li>
          <li>
            <a href="###">ABOUT THE MACALLAN</a>
          </li>
          <li>
            <a href="###">CAREERS</a>
          </li>
          <li>
            <a href="###">CONTACT US</a>
          </li>
          <li>
            <a href="###">NEWSROOM</a>
          </li>
          <li>
            <a href="###">SUSTAINABILITY</a>
          </li>
        </ul>
        <ul class="foot-menu foot-menu3">
          <li>
            <a href="###">SUPPORT</a>
          </li>
          <li>
            <a href="###">DELIVERY INFORMATION</a>
          </li>
          <li>
            <a href="###">FREQUENTLY ASKED QUESTIONS</a>
          </li>
          <li>
            <a href="###">MANAGE COOKIE PREFERENCES</a>
          </li>
          <li>
            <a href="###">MY ACCOUNT</a>
          </li>
          <li>
            <a href="###">RETURNS INFORMATION</a>
          </li>
        </ul>
      </div>
      <!-- 3-1.SNS -->
      <div class="fgcon2">
        <ol class="sns-box">
          <li>
            <a class="fa-brands fa-square-facebook" href="#"></a>
          </li>
          <li>
            <a class="fa-brands fa-square-twitter" href="#"></a>
          </li>
          <li>
            <a class="fa-brands fa-square-instagram" href="#"></a>
          </li>
          <li>
            <a class="fa-brands fa-square-youtube" href="#"></a>
          </li>
        </ol>
      </div>
      <div class="fgcon3">
        <ul>
          <li>
            <a href="###">DRINK RESPONSIBLY</a>
          </li>
          <li>
            <a href="###">EDRINGTON</a>
          </li>
          <li>
            <a href="###">PRIVACY POLICY</a>
          </li>
          <li>
            <a href="###">TERMS OF USE</a>
          </li>
          <li>
            <a href="###">COOKIES POLICY</a>
          </li>
          <li>
            <a href="###">MANAGE COOKIE PREFERENCES</a>
          </li>
          <li>
            <a href="###">TERMS AND CONDITIONS OF SALE</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="f-bottom">
      <span>PLEASE SAVOUR THE MACALLAN RESPONSIBLY</span>
      <span>© 2024 THE MACALLAN DISTILLERS LTD, THE MACALLAN</span>
    </div>
  </footer>

    `,

}; /////////// comData //////////
export default comData;