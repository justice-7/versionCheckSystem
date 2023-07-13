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

  // const signupForm = document.querySelector('form');

  // signupForm?.addEventListener('submit', event => {
  //   event.preventDefault(); // *

  //   console.log('제출이 완료되었습니다.');
  // });

  // fetch('http://3.36.74.212:8080/api/latest/versions',{
  //   method:'POST',
  //   body: new FormData(addFrom)
  // });
  // for (const keyValue of new FormData(addForm)) console.log(keyValue);

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   this.props.handleAccount({
  //     email: e.target.os.value,
  //     pwd: e.target.ver.value,
  //     nickname: e.target.updatetype.value,
  //     name: e.target.message.value
  //   });
  // }

 

  const handleSubmit=(e)=>{
    e.preventDefault();

    const addForm=new FormData(document.querySelector("#addForm"));

    var object = {}
    addForm.forEach(function(value,key){
                object[key]=value
    })
    var json = JSON.stringify(object)
    console.log(json)

    
    fetch("http://3.36.74.212:8080/api/latest/versions", {
      method: "POST",
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
      <button className="open" onClick={togglePopup}>{name.text}</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <form id="addForm" onSubmit={handleSubmit}> 
              <input type="text" name="service_name" placeholder='서비스명'/><br></br>
              <select name="os" >
                <option value="" selected disabled hidden>OS 선택</option>
                <option value="android">android</option>
                <option value="ios">ios</option>
              </select><br></br>
              <input type="text" name="version"/><br></br>
              <select name="update_type">
                <option value="true">true</option>
                <option value="false">false</option>
              </select><br></br>
              <textarea name="message"></textarea><br></br>
              <input type='submit' value='확인'></input>
              
              <input type="text" name="package_name"/><br></br> 
            </form>
            <button className="close" onClick={togglePopup}>취소</button>
          </div>
        </div>
      ) : null}


    </span>
  );
}

export default PopUp;