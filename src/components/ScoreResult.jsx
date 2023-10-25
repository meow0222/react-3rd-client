import { useState, useEffect } from 'react';
import StudentList from './StudentList';
import CreateStudent from './CreateStudent';
import AccountMenu from './AccountMenu';
import { Routes } from 'react-router-dom';
import UpdateScore from './UpdateScore';

export function ScoreResult() {
    const [serverData, setServerData] = useState([]); // Reset the array

    useEffect(() => {
        // Get Data from Server
        fetch("http://localhost:3000/score", {
            method: 'get',
            headers: {
                "task": 'getScore'
            },
        })
            .then(response => response.json())
            .then(data => {
                // Save the Data from the Server in to Local Variable
                setServerData(data);
            })
            .catch(error => {
                console.error('Server Error:', error);
            });
    }, []);



  return (
  <div className='mt-16'>
    <StudentList serverData={serverData}/>
    <UpdateScore serverData = {serverData}
                   setServerData = {setServerData} />
  </div>
  
  );
  
}