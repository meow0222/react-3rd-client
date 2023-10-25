import React from 'react';
import { useState } from 'react';
import '../styles/CreateStudent.css'

function CreateStudent({ serverData,setServerData }) {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('Gabriel');

    const handleSelectChange = (event) => {
        setSelectValue(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const updateScore = () => {
        console.log({ selectValue, inputValue });
        fetch("http://localhost:3000/score", {
            method: 'POST',
            headers: {
                "task": 'updateScore'
            },
            body: JSON.stringify({
                "name": { selectValue },
                "points": { inputValue }
            }),
        })
            .then(response => response.json())
            .then(data => {
                // 서버에서 받아온 데이터를 로컬 상태에 설정
                setServerData(data);
            })
            .catch(error => {
                console.error('Server Error:', error);
            });
        
    };

    return (
        <>
            <div id="update">
                <select className="p-1" id='studentName' value={selectValue} onChange={handleSelectChange}>
                    {serverData.map((data) => (
                        <option key={data.name} value={data.name}>{data.name}</option>
                    ))}
                </select>
                <input name="score" placeholder="Score" value={inputValue} onChange={handleInputChange}></input>
                <button id="updateBtn" onClick={updateScore}>UPDATE</button>
            </div>
        </>
    )
}

export default CreateStudent;