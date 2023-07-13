import React, { useState } from 'react';
import "./styles.css";

function Del({item}){
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    if (showPopup===false){
      setShowPopup(true)
    }
    else{
      setShowPopup(false)
    }
  };

  console.log({item})
  const json = JSON.stringify(item)

  return (
    <span>
      <button id='test' onClick={togglePopup}>test</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
              <textarea name="testMsg" cols="30" rows="10">{json}</textarea><br></br>
            <button className="close" onClick={togglePopup}>확인</button>
          </div>
        </div>
      ) : null}
    </span>
  );
}

export default Del;