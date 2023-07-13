import React, {useState, useEffect} from 'react';
import axios from 'axios';
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
    e.preventDefault();
    
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


  /*
  const [notice, setNotice] = useState([]);
  //웹에서 서버로 요청 
  const getNotice = () =>{
    // axios
    //   .get(`http://3.36.74.212:8080/api/latest/versions/${item.idx}`)  //axios를 통해 HTTP요청을 보내는 코드
    //   .then((response)=>{ //then()에서는 HTTP요청을 통해 받아온 데이터를 처리할 수 있다
    //     console.log(response)//
    //     setNotice(response.data); // 이전에 useState으로 생성했던 setPosts함수를 통해 data를 posts에 저장합니다.
    //   })

    axios({
      method:"GET",
      url:`http://3.36.74.212:8080/api/latest/versions/${item.idx}`
      }).then(function(res){
          // API로 부터 받은 데이터 출력(클라이언트 IP출력)
          console.log(res.data);
      }).catch(error => {
          console.log(error);
    });
  }
  useEffect(getNotice, []);
  */

  return (
    <span>
      <button id='delete' onClick={togglePopup}>삭제</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <form id="deleteForm" onSubmit={handleSubmit}> 
              <input type="text" name="service_name"/><br></br>
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

export default Del;