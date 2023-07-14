import React, {useState} from 'react';
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

  const handleSubmit=(e)=>{
    
    fetch(`http://3.36.74.212:8080/api/latest/versions/${item.idx}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    })
      .then((response) => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error("에러 발생!");
      })
      .catch((error) => {
        alert(error);
      })
      .then((data) => {
        console.log(data);
      });
  };



  return (
    <span>
      <button id='delete' onClick={togglePopup}>삭제</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <form id="deleteForm" onSubmit={handleSubmit}> 
              <input type="text" name="service_name" defaultValue={item.service_name} disabled/><br></br>
              <select name="os"  >
                <option value={item.os} selected hidden>{item.os}</option>
              </select><br></br>
              <input type="text" name="version" defaultValue={item.version} disabled/><br></br>
              <select name="update_type">
                <option value={item.update_type.toString()} selected hidden>{item.update_type.toString()}</option>
              </select><br></br>
              <textarea name="message" defaultValue={item.message} disabled></textarea><br></br>
              <input type='submit' value='확인'></input>
            </form>
            
            <button className="close" onClick={togglePopup}>취소</button>
          </div>
        </div>
      ) : null}

    

    </span>
  );
}

export default Del;