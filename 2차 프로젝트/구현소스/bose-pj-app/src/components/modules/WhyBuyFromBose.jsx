import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser,} from "@fortawesome/free-regular-svg-icons";
import { faHandHoldingDollar,faCalendarDays,faTruckFast  } from "@fortawesome/free-solid-svg-icons";

// css
import "./css/why_bose.scss";

function WhyBuyFromBose(props) {
  const whyData = [
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
  return (
    <div className="why-bose-section">
    <div className="why-bose-box">
      <h1>Why buy from Bose </h1>
      <section className="why-bose-flex">
        {whyData.map((v, i) => 
          <div className="why-bose" key={i}>
            <div className="why-icon">
                <span>{v.icon}</span>
            </div>
            <div className="why-txt">
                <p>{v.txt1}</p>
                <p>{v.txt2}</p>
            </div>
          </div>
        )}
      </section>
    </div>
    </div>
  );
}

export default WhyBuyFromBose;
