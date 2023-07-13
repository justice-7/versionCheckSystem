import {useState, useEffect} from 'react';
import axios from 'axios';
import List from './list';
import PopAdd from './popAdd';
import PopAppTest from './popAppTest';


function ServiceName(){

    const [ser, setSer] = useState("");
    const [num, setNum] = useState(1);
  
    
    let fetchURL=`http://3.36.74.212:8080/api/latest/versions`
    
    const serviceClick=(e)=>{
        e.preventDefault();
        fetchURL=`http://3.36.74.212:8080/api/latest/versions/services/${ser}`

    
        fetch(fetchURL, {
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

        setNum(num+1)
      

    }

    const totalClick=(e)=>{
        e.preventDefault();
        fetchURL='http://3.36.74.212:8080/api/latest/versions';
        setNum(num+1)
    }

    const [posts, setPosts] = useState([]);
    //웹에서 서버로 요청 --> 나 리스트 전달해줘 
    const getPosts = () =>{
    console.log(num+"getpost실행됨")
    axios
        .get(fetchURL)  //axios를 통해 HTTP요청을 보내는 코드
        .then((response)=>{ //then()에서는 HTTP요청을 통해 받아온 데이터를 처리할 수 있다
        setPosts(response.data); // 이전에 useState으로 생성했던 setPosts함수를 통해 data를 posts에 저장합니다.
        })
    }
    useEffect(getPosts, [num]);



  return (
    <div className='service'>
        <input type="text" placeholder="서비스명" id="ser" onChange={(e)=>setSer(e.target.value)} defaultValue={""} ></input>
        <button onClick={serviceClick}>확인</button>
        <button onClick={totalClick}>전체보기</button>
        <div className='menu'>
          <PopAdd text={"ADD"}/>
          <PopAppTest text={"App Test"}/>
        </div>
        <List items={posts}/>
    </div>

    
  );
}
export default ServiceName;