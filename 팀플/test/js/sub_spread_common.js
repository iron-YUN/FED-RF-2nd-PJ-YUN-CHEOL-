import mFn from "./my_function.js";
export default function spreadCommon() {
  const topArea = mFn.qs("#top-area");
  // const footerArea = mFn.qs("#footer-area");
  const footerBox = mFn.qs(".footer-bx");

  const footerItems = [
    {
      type: "sns",
      links: [
        { href: "https://www.instagram.com/pixar/", icon: "fa-brands fa-instagram", alt: "Instagram" },
        { href: "https://www.facebook.com/Pixar/", icon: "fa-brands fa-facebook", alt: "Facebook" },
        { href: "https://twitter.com/pixar", icon: "fa-brands fa-twitter", alt: "Twitter" },
        { href: "https://www.youtube.com/pixar", icon: "fa-brands fa-youtube", alt: "YouTube" }
      ]
    },
    {
      type: "policy",
      links: [
        { href: "https://privacy.thewaltdisneycompany.com/en/", text: "PRIVACY POLICY" },
        { href: "https://disneytermsofuse.com/", text: "TERMS OF USE" },
        { href: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/", text: "YOUR US STATE PRIVACY RIGHTS" },
        { href: "https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/", text: "CHILDREN’S ONLINE PRIVACY POLICY" },
        { href: "https://preferences-mgr.truste.com/?affiliateId=115&type=disneycolor", text: "INTEREST-BASED ADS" }
      ]
    },
    {
      type: "corp",
      text: "© 1986-2024 DISNEY / PIXAR"
    }
  ];
    // 상단영역 뿌리기
    let hcode1 = "";
    hcode1 += `
    <div class="page-bx col-9">
    <div id="GNB" class=""></div>
    <div class="logobx-area mlogo">
      <a href="./main.html">
        <img src="./IMG/PIXAR_LOGO black.png" alt="메인로고" />
      </a>
    </div>
    </div>
    `;
    topArea.innerHTML += hcode1;

    // 하단영역 돌려뿌리기
    footerItems.forEach(item => {
      let hcode2 = "";
      switch (item.type) {
        case "sns":
          hcode2 += `<div class="sns-part">
                      <aside class="sns-box">
                        <ul>`;
          item.links.forEach(link => {
            hcode2 += `<li>
                        <a href="${link.href}" target="_blank" class="fa-brands ${link.icon}">
                          <span class="ir"></span>
                        </a>
                      </li>`;
          });
          hcode2 += `</ul>
                    </aside>
                  </div>`;
          break;
        case "policy":
          hcode2 += `<div class="fcont-part">
                      <aside class="info-link">
                        <ul>`;
          item.links.forEach(link => {
            hcode2 += `<li>
                        <a href="${link.href}" target="_blank">${link.text}</a>
                      </li>`;
          });
          hcode2 += `</ul>
                    </aside>
                  </div>`;
          break;
        case "corp":
          hcode2 += `<div class="corp-part">
                      <address class="corp-info">${item.text}</address>
                    </div>`;
          break;
        default:
          break;
        }
      footerBox.innerHTML += hcode2;
    });

}////////////////////////////////////////////////
