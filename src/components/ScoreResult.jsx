import { useState, useEffect } from 'react';
import StudentList from './StudentList';
import CreateStudent from './CreateStudent';
import AccountMenu from './AccountMenu';
import { Routes } from 'react-router-dom';

export function ScoreResult() {
    const [serverData, setServerData] = useState([]); // 빈 배열로 초기화

    useEffect(() => {
        // 서버에서 데이터를 가져오는 비동기 요청을 수행
        fetch("http://localhost:3000/score", {
            method: 'get',
            headers: {
                "task": 'getScore'
            },
        })
            .then(response => response.json())
            .then(data => {
                // 서버에서 받아온 데이터를 로컬 상태에 설정
                setServerData(data);
            })
            .catch(error => {
                console.error('Server Error:', error);
            });
    }, []);



  return (
  <div className='mt-16'>
    <StudentList serverData={serverData}/>
    <CreateStudent serverData = {serverData}
                   setServerData = {setServerData} />
  </div>
  
  );
  
}