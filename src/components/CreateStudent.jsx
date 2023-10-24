import React from 'react';
import { useState } from 'react';
import '../styles/CreateStudent.css'

function CreateStudent({serverData}){
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('option1');

    const handleSelectChange = (event) => {
        setSelectValue(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const updateScore = () => {
        console.log({selectValue,inputValue});
        fetch("http://localhost:3000/score", {
            method: 'POST',
            headers: {
                "task": 'updateScore'
            },
            body: JSON.stringify({
                "name": {selectValue},
                "points": {inputValue}
            }),
        })
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