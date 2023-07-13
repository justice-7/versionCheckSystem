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
            <form id='appTestForm'>
              <p>Client ver</p>
              <select name="client ver">
                <option value="android">android</option>
              </select><br></br>
              <input type='submit' value='전송'></input>
            </form>
            <p>Server Result</p>
            <textarea name="serverResult"></textarea><br></br>
            <button className="close" onClick={togglePopup}>확인</button>
          </div>
        </div>
      ) : null}
    </span>
  );
}

export default PopUp;