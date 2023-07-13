import React, { useState } from 'react';
import "./styles.css";

function Modi(name){
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
      <button id='update' onClick={togglePopup}>{name.text}</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <form id='addForm'>
              <select name="os">
                <option value="android">android</option>
                <option value="ios">ios</option>
              </select><br></br>
              <input type="text" name="ver"/><br></br>
              <select name="updatetype">
                <option value="true">true</option>
                <option value="false">false</option>
              </select><br></br>
              <textarea name="message"></textarea><br></br>
              <input type='submit' value='확인'></input>
            </form>
            <button className="close" onClick={togglePopup}>취소</button>
          </div>
        </div>
      ) : null}
    </span>
  );
}

export default Modi;