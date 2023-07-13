import React, { useState } from 'react';
import "./styles.css";

function Modi({item}){
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
    e.preventDefault();

    const updateForm=new FormData(document.querySelector("#updateForm"));

    console.log(updateForm)
    var object = {}
    updateForm.forEach(function(value,key){
                object[key]=value
    })
    var json = JSON.stringify(object)
    console.log(json)

    
    fetch(`http://3.36.74.212:8080/api/latest/versions/${item.idx}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
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
      <button id='update' onClick={togglePopup}>수정</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <form id='updateForm' onSubmit={handleSubmit}>
              <input type="text" name="service_name" defaultValue={item.service_name}/><br></br>
              <select name="os" id="os">
                <option value="" selected disabled hidden>{item.os}</option>
                <option value="android">android</option>
                <option value="ios">ios</option>
              </select><br></br>
              <input type="text" name="version" defaultValue={item.version}/><br></br>
              <select name="update_type">
                <option value="" selected disabled hidden>{item.update_type.toString()}</option>
                <option value="true" >true</option>
                <option value="false">false</option>
              </select><br></br>
              <textarea name="message" defaultValue={item.message}></textarea><br></br>
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