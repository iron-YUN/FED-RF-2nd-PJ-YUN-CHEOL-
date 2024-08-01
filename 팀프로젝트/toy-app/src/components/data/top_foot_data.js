
// 더이상 데이터에 손대지 마시오!!!

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


 const topItems = [
    {
        link: "/sub1",
        text: "Toy Story 1",
        src: "/images/toy1_icon.png",
    },
    {
        link: "/sub2",
        text: "Toy Story 2",
        src: "/images/toy2_icon.png",
    },
    {
        link: "/sub3",
        text: "Toy Story 3",
        src: "/images/toy3_icon.png",
    },
    {
        link: "/sub4",
        text: "Toy Story 4",
        src:"/images/toy4_icon.png",
    }
];


const footerItems = {
  sns: [
    {
      href: "https://www.instagram.com/pixar/",
      text: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
      href: "https://www.facebook.com/Pixar/",
      text: <FontAwesomeIcon icon={faFacebook} />,
    },
    {
      href: "https://twitter.com/pixar",
      text: <FontAwesomeIcon icon={faTwitter} />,
    },
    {
      href: "https://www.youtube.com/pixar",
      text: <FontAwesomeIcon icon={faYoutube} />,
    },
  ],
  policy: [
    {
      href: "https://privacy.thewaltdisneycompany.com/en/",
      text: "PRIVACY POLICY",
    },
    { href: "https://disneytermsofuse.com/",
      text: "TERMS OF USE",
     },
    {
      href: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/",
      text: "YOUR US STATE PRIVACY RIGHTS",
    },
    {
      href: "https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/",
      text: "CHILDREN’S ONLINE PRIVACY POLICY",
    },
    {
      href: "https://preferences-mgr.truste.com/?affiliateId=115&type=disneycolor",
      text: "INTEREST-BASED ADS",
    },
  ],
};

const mainItems = [
  {
    src:"/images/poster/01_ts.jpg",
    text:"ts1-img",
  },
  {
    src:"/images/poster/02_ts.jpg",
    text:"ts2-img",
  },
  {
    src:"/images/poster/03_ts.jpg",
    text:"ts3-img",
  },
  {
    src:"/images/poster/04_ts.jpg",
    text:"ts4-img",
  },
];

export { topItems,footerItems,mainItems};