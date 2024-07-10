// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 폰트어썸 whybuybose 
import { faCircleUser,} from "@fortawesome/free-regular-svg-icons";
import { faHandHoldingDollar,faCalendarDays,faTruckFast  } from "@fortawesome/free-solid-svg-icons";

export const HamburgerMenuIcon = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    onClick={onClick}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const CloseMenuIcon = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    onClick={onClick}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
// 기본값을 정해서 들어오고
// 내보내서 불러온 곳에서 값을 다시 정할수있다.
export const WishlistHeartIcon = ({ strokeWidth = "3",width="24"
  ,height="24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"></path>
  </svg>
);

export const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.2-6H6"></path>
  </svg>
);

export const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export const LoginIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.24 22.4a9 9 0 0 0-16.48 0"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
export const LogoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);


export const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a4 4 0 0 0-4 4v3H9v4h2v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 2a9 9 0 0 1-2.88 1.1A4.48 4.48 0 0 0 16.84 1a4.48 4.48 0 0 0-4.44 5.64A12.71 12.71 0 0 1 3 2.73a4.48 4.48 0 0 0 1.39 5.92 4.48 4.48 0 0 1-2-.56v.06a4.48 4.48 0 0 0 3.57 4.4 4.48 4.48 0 0 1-2 .08 4.48 4.48 0 0 0 4.19 3.11A9 9 0 0 1 2 19.54 12.71 12.71 0 0 0 7.29 21c8.11 0 12.53-6.73 12.53-12.53v-.57A8.93 8.93 0 0 0 23 3z" />
  </svg>
);

export const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.61.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.61-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
    <polygon points="9.75 15.02 15.59 12 9.75 8.98 9.75 15.02" />
  </svg>
);



export const iconMenu = [
  <HamburgerMenuIcon />,
  <LoginIcon />,
  <LogoutIcon/>,
  <WishlistHeartIcon />,
  <CartIcon />,
  <SearchIcon />,
];

export const whyData = [
  {
    icon: <FontAwesomeIcon icon={faCalendarDays} />,
    txt1: "90-day return policy",
    txt2: "Try it for 90 days to make sure it’s right for you.",
  },
  {
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    txt1: "Price match promise",
    txt2: "Shop confidently. We’ll match a lower price.",
  },
  {
    icon: <FontAwesomeIcon icon={faTruckFast} />,
    txt1: "Complimentary shipping & returns",
    txt2: "On in-stock orders of $49 or more.",
  },
  {
    icon: <FontAwesomeIcon icon={faCircleUser} />,
    txt1: "My Bose perks",
    txt2: "My Bose members get access to exclusive experiences, offers, and more.",
  },
];

export const snsIconMenu = [
  {comp :<InstagramIcon />,
    txt : "InstagramIcon",
  link : "https://www.instagram.com/bose/" },
  {comp :<TwitterIcon />,
    txt : "TwitterIcon",
  link :"https://x.com/bose"},
  {comp :<FacebookIcon />,
    txt : "FacebookIcon",
  link :"https://www.facebook.com/Bose/"},
  {comp :<YoutubeIcon />,
    txt : "YoutubeIcon",
  link :"https://www.youtube.com/user/bose"},
  ];