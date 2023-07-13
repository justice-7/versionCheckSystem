import React, { useState } from 'react';
import "./styles.css";

function Del(name){
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
      <button id='test' onClick={togglePopup}>{name.text}</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
              <textarea name="testMsg"></textarea><br></br>
              <input type='submit' value='확인'></input>
            <button className="close" onClick={togglePopup}>확인</button>
          </div>
        </div>
      ) : null}
    </span>
  );
}

export default Del;