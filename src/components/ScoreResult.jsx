import {useRef, useState, useEffect} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import  Table from './StudentList';
import StudentList from './StudentList';
import CreateStudent from './CreateStudent';
import InputScore from './InputScore';
import { ClassNames } from '@emotion/react';

export function ScoreResult(){
    const [serverData, setServerData] = useState([]); // 빈 배열로 초기화

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })

  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
 

useEffect(() => {
    // 서버에서 데이터를 가져오는 비동기 요청을 수행
    fetch("http://localhost:3000/score", {
        method: 'get',
        headers : {
            "task" : 'getScore'
        },
    })
      .then(response => response.json())
      .then(data => {
        // 서버에서 받아온 데이터를 로컬 상태에 설정
        setServerData(data);
      })
      .catch(error => {
        console.error('데이터를 가져오는 중 에러 발생:', error);
      });
  }, []);


 
  return (
  <div className='mt-16'>
    <StudentList serverData={serverData}/>
    <CreateStudent serverData={serverData}/>
    <InputScore />
  </div>
  );
}