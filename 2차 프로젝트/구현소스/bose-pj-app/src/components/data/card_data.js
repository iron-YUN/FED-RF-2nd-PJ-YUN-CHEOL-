// export const card = [
//     {
//         "name": "Apple Pay",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='black' stroke='#C4C4C4'/><text x='6' y='17' font-family='Arial' font-size='10' fill='white'>Apple Pay</text></svg>"
//     },
//     {
//         "name": "Visa",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#142787' stroke='#C4C4C4'/><text x='6' y='17' font-family='Arial' font-size='10' fill='white'>VISA</text></svg>"
//     },
//     {
//         "name": "Mastercard",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#EB001B' stroke='#C4C4C4'/><circle cx='14' cy='13' r='6' fill='#F79E1B'/><circle cx='22' cy='13' r='6' fill='#EB001B'/><text x='10' y='21' font-family='Arial' font-size='5' fill='white'>Mastercard</text></svg>"
//     },
//     {
//         "name": "Maestro",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#00A3E0' stroke='#C4C4C4'/><circle cx='14' cy='13' r='6' fill='#EA001B'/><circle cx='22' cy='13' r='6' fill='#00A3E0'/><text x='10' y='21' font-family='Arial' font-size='5' fill='white'>Maestro</text></svg>"
//     },
//     {
//         "name": "American Express",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#2E77BB' stroke='#C4C4C4'/><text x='4' y='17' font-family='Arial' font-size='7' fill='white'>American Express</text></svg>"
//     },
//     {
//         "name": "Discover",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#FF6000' stroke='#C4C4C4'/><text x='5' y='17' font-family='Arial' font-size='10' fill='white'>Discover</text></svg>"
//     },
//     {
//         "name": "Diners Club",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#0079BE' stroke='#C4C4C4'/><text x='6' y='17' font-family='Arial' font-size='8' fill='white'>Diners Club</text></svg>"
//     },
//     {
//         "name": "PayPal",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#003087' stroke='#C4C4C4'/><text x='6' y='17' font-family='Arial' font-size='10' fill='white'>PayPal</text></svg>"
//     },
//     {
//         "name": "Klarna",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#FFB3C7' stroke='#C4C4C4'/><text x='6' y='17' font-family='Arial' font-size='10' fill='black'>Klarna</text></svg>"
//     },
//     {
//         "name": "Afterpay",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#00C0B5' stroke='#C4C4C4'/><text x='6' y='17' font-family='Arial' font-size='10' fill='white'>Afterpay</text></svg>"
//     },
//     {
//         "name": "Stripe",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#635BFF' stroke='#C4C4C4'/><text x='8' y='17' font-family='Arial' font-size='10' fill='white'>Stripe</text></svg>"
//     },
//     {
//         "name": "Google Pay",
//         "svg": "<svg width='36' height='26' viewBox='0 0 36 26' xmlns='http://www.w3.org/2000/svg'><rect x='1.5' y='1.5' width='33' height='23' rx='3.5' fill='#4285F4' stroke='#C4C4C4'/><text x='6' y='17' font-family='Arial' font-size='10' fill='white'>Google Pay</text></svg>"
//     }
// ];


export const ApplePayIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="26"
      viewBox="0 0 36 26"
      fill="none"
      onClick={onClick}
    >
      <rect x="1.5" y="1.5" width="33" height="23" rx="3.5" fill="black" stroke="#C4C4C4" />
      <text className="card-text" x="18" y="17" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">
        Apple Pay
      </text>
    </svg>
  );
  export const VisaIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="26"
      viewBox="0 0 36 26"
      fill="none"
      onClick={onClick}
    >
      <rect x="1.5" y="1.5" width="33" height="23" rx="3.5" fill="#142787" stroke="#C4C4C4" />
      <text className="card-text" x="18" y="17" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">
        VISA
      </text>
    </svg>
  );
  export const MastercardIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="26"
      viewBox="0 0 36 26"
      fill="none"
      onClick={onClick}
    >
      <rect x="1.5" y="1.5" width="33" height="23" rx="3.5" fill="#EB001B" stroke="#C4C4C4" />
      <circle cx="14" cy="13" r="6" fill="#F79E1B" />
      <circle cx="22" cy="13" r="6" fill="#EB001B" />
      <text className="card-text" x="18" y="17" fontFamily="Arial" fontSize="5" fill="white" textAnchor="middle">
        Mastercard
      </text>
    </svg>
  );
  export const MaestroIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="26"
      viewBox="0 0 36 26"
      fill="none"
      onClick={onClick}
    >
      <rect x="1.5" y="1.5" width="33" height="23" rx="3.5" fill="#00A3E0" stroke="#C4C4C4" />
      <circle cx="14" cy="13" r="6" fill="#EA001B" />
      <circle cx="22" cy="13" r="6" fill="#00A3E0" />
      <text className="card-text" x="18" y="17" fontFamily="Arial" fontSize="5" fill="white" textAnchor="middle">
        Maestro
      </text>
    </svg>
  );

  export const DiscoverIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="26"
      viewBox="0 0 36 26"
      fill="none"
      onClick={onClick}
    >
      <rect x="1.5" y="1.5" width="33" height="23" rx="3.5" fill="#FF6000" stroke="#C4C4C4" />
      <text className="card-text" x="18" y="17" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">
        Discover
      </text>
    </svg>
  );
  export const DinersClubIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="26"
      viewBox="0 0 36 26"
      fill="none"
      onClick={onClick}
    >
      <rect x="1.5" y="1.5" width="33" height="23" rx="3.5" fill="#0079BE" stroke="#C4C4C4" />
      <text className="card-text" x="18" y="17" fontFamily="Arial" fontSize="8" fill="white" textAnchor="middle">
        Diners Club
      </text>
    </svg>
  );
  export const PayPalIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="26"
      viewBox="0 0 36 26"
      fill="none"
      onClick={onClick}
    >
      <rect x="1.5" y="1.5" width="33" height="23" rx="3.5" fill="#003087" stroke="#C4C4C4" />
      <text className="card-text" x="18" y="17" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">
        PayPal
      </text>
    </svg>
  );
  export const KlarnaIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="26"
      viewBox="0 0 36 26"
      fill="none"
      onClick={onClick}
    >
      <rect x="1.5" y="1.5" width="33" height="23" rx="3.5" fill="#FFB3C7" stroke="#C4C4C4" />
      <text className="card-text" x="18" y="17" fontFamily="Arial" fontSize="10" fill="black" textAnchor="middle">
        Klarna
      </text>
    </svg>
  );



  export const card = [
    <ApplePayIcon/>,
    <VisaIcon/>,
    <MastercardIcon/>,
    <MaestroIcon/>,
    <DiscoverIcon/>,
    <DinersClubIcon/>,
    <PayPalIcon/>,
    <KlarnaIcon/>,
] ;