import {useState, useEffect} from 'react';
import axios from 'axios';
import List from './list';
import PopAdd from './popAdd';
import PopAppTest from './popAppTest';


function ServiceName(){

    const [ser, setSer] = useState("");
    const [url,setUrl]=useState("http://3.36.74.212:8080/api/latest/versions")
  
    
    const serviceClick= async(e)=>{
        e.preventDefault();
        setUrl(`http://3.36.74.212:8080/api/latest/versions/services/${ser}`)

        console.log(url+" 서비스명 클릭")
         fetch(url, {
        method: "GET",
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
      
    }

    const totalClick=(e)=>{
        e.preventDefault();
        setUrl(`http://3.36.74.212:8080/api/latest/versions`);
        
        console.log(url+" 전체확인 클릭")
    }

    const [posts, setPosts] = useState([]);
    //웹에서 서버로 요청 --> 나 리스트 전달해줘 
    const getPosts = () =>{
        
    console.log(url+" getpost 실행")
    axios
        .get(url)  //axios를 통해 HTTP요청을 보내는 코드
        .then((response)=>{ //then()에서는 HTTP요청을 통해 받아온 데이터를 처리할 수 있다
        setPosts(response.data); // 이전에 useState으로 생성했던 setPosts함수를 통해 data를 posts에 저장합니다.
        })
    }
    useEffect(getPosts, [url]);



  return (
    <div className='service'>
        <input id="ser" type="text" placeholder="서비스명" onChange={(e)=>setSer(e.target.value)} defaultValue={""} ></input>
        <button id='check' onClick={serviceClick}>확인</button>
        <button id='total' onClick={totalClick}>전체보기</button>
        <div className='menu'>
          <PopAdd text={"ADD"}/>
          <PopAppTest text={"App Test"}/>
        </div>
        <List items={posts}/>
    </div>

    
  );
}
export default ServiceName;