import mFn from "./my_function.js";

export default function spreadCommon() {
  const topArea = mFn.qs("#top-area");
  const footerArea = mFn.qs("#footer-area");
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
      type: "copyright",
      text: "© 1986-2024 DISNEY / PIXAR"
    }
  ];

  // function spreadTop(){
    // }
    // spreadTop();
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







    
  let hcode2 = "";
  footerArea.innterHTML += hcode2;
}



// <div class="footer-bx col-12">
//   <div class="sns-part">
//     <aside class="sns-box">
//       <ul>
//         <li>
//           <a
//             href="https://www.instagram.com/pixar/"
//             target="_blank"
//             class="fa-brands fa-instagram"
//           >
//             <span class="ir"></span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.facebook.com/Pixar/"
//             target="_blank"
//             class="fa-brands fa-facebook"
//           >
//             <span class="ir"> </span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://twitter.com/pixar"
//             target="_blank"
//             class="fa-brands fa-x-twitter"
//           >
//             <span class="ir"></span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.youtube.com/pixar"
//             target="_blank"
//             class="fa-brands fa-youtube"
//           >
//             <span class="ir"></span>
//           </a>
//         </li>
//       </ul>
//     </aside>
//   </div>
//   <div class="fcont-part">
//     <aside class="info-link">
//       <ul>
//         <li>
//           <a
//             href="https://privacy.thewaltdisneycompany.com/en/"
//             target="_blank"
//             >PRIVACY POLICY</a
//           >
//         </li>
//         <li>
//           <a href="https://disneytermsofuse.com/" target="_blank"
//             >TERMS OF USE</a
//           >
//         </li>
//         <li>
//           <a
//             href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/"
//             target="_blank"
//             >YOUR US STATE PRIVACY RIGHTS</a
//           >
//         </li>
//         <li>
//           <a
//             href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
//             target="_blank"
//             >CHILDREN’S ONLINE PRIVACY POLICY</a
//           >
//         </li>
//         <li>
//           <a
//             href="https://preferences-mgr.truste.com/?affiliateId=115&type=disneycolor"
//             target="_blank"
//             >INTEREST-BASED ADS</a
//           >
//         </li>
//       </ul>
//     </aside>
//   </div>
//   <div class="corp-part">
//     <address class="corp-info">© 1986-2024 DISNEY / PIXAR</address>
//   </div>
// </div>
