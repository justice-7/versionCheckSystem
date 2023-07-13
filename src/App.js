// import React, {useEffect, useState} from 'react';
// import axios from 'axios';

// function App() {
//    const [hello, setHello] = useState('')

//     useEffect(() => {
//         axios.get('http://3.36.74.212:8080/api/test')
//         .then(response => setHello(response.data))
//         .catch(error => console.log(error))
//     }, []);

//     return (
//         <div>
//             백엔드에서 가져온 데이터입니다 : {hello}
//         </div>
//     );
// }

// export default App;

/*
import logo from './logo.svg';
import './App.css';
import List from './list';
import axios from 'axios';
import {useState, useEffect} from 'react';
function App() {
  const list = [
      {idx:1,os: "ios",ver:"1.0"},
      {idx:2,os: "and",ver:"1.0"},
      {idx:3,os: "and",ver:"1.5"},
      {idx:4,os: "ios",ver:"1.5"},
      {idx:5,os: "ios",ver:"2.0"},
    ]
    return (
      <div>
        <div className='service'>
          <input type="text" placeholder="서비스명"></input>
          <button>확인</button>
        </div>
        <div className='menu'>
          <button id='add'>ADD</button>
          <button id ='appTest'>App Test</button>
        </div>
        <div>
          <List items={list}/>
        </div>
      </div>
    );
}
export default App;
*/


import './App.css';
import List from './list';
import axios from 'axios';
import {useState, useEffect} from 'react';
import "./styles.css";
import PopUp from './popUp';

function App() {
  // !백에서 받아오기
  const [posts, setPosts] = useState([]);
  //웹에서 서버로 요청 --> 나 리스트 전달해줘 
  const getPosts = () =>{
    axios
      .get('http://3.36.74.212:8080/api/latest/versions')  //axios를 통해 HTTP요청을 보내는 코드
      .then((response)=>{ //then()에서는 HTTP요청을 통해 받아온 데이터를 처리할 수 있다
        //console.log(response)
        setPosts(response.data); // 이전에 useState으로 생성했던 setPosts함수를 통해 data를 posts에 저장합니다.
      })
  }
  useEffect(getPosts, []);

  // !팝업창
  // const [showPopup, setShowPopup] = useState(false);

  // const togglePopup = () => {
  //   if (showPopup===false){
  //     setShowPopup(true)
  //   }
  //   else{
  //     setShowPopup(false)
  //   }
  // };

  return (
    <div>
        <div className='service'>
          <input type="text" placeholder="서비스명"></input>
          <button>확인</button>
        </div>
        <div className='menu'>
          <PopUp text={"ADD"}/>
          <PopUp text={"appTest"}/>

        </div>
        <div>
          <List items={posts}/>
        </div>
      
    </div>
  );
}


export default App;


