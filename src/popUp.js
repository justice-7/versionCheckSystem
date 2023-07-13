import React, { useState } from 'react';
import "./styles.css";

function PopUp(name){
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    if (showPopup===false){
      setShowPopup(true)
    }
    else{
      setShowPopup(false)
    }
  };

  return (
    <span>
      <button className="open" onClick={togglePopup}>{name.text}</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <h2>Success!</h2>
            <button className="close" onClick={togglePopup}>
              Close me
            </button>
          </div>
        </div>
      ) : null}
    </span>
  );
}

export default PopUp;