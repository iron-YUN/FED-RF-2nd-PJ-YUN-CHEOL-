import React, { useState } from 'react';
import $ from "jquery";

function S4synopsis(props) {
    const [show, setShow] = useState(false);

    const showSynopFn = () => {
        setShow(!show);  
        $(".synop-txt").toggle("on");
    }
    
    return (
        <div className="main-synopsis">
          <h2 className="main-title">Synopsis</h2>
          <button className="synop-btn" 
          onClick={showSynopFn}>{show? 'SHOW' : 'CLOSE'}</button>
          <div className="synop-box">
              <span className={`synop-txt ${show? 'on' : 'off'} `}>
                Woody has always been confident about his place in the world and that his priority is
                taking care of his kid, whether that’s Andy or Bonnie.
                <br />
                But when Bonnie adds a reluctant new toy called “Forky” to her room, a road trip
                adventure alongside old and new friends will show Woody how big the world can be for a
                toy.
              </span>
          </div>
        </div>
    );
}

export default S4synopsis;