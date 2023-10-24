import React from 'react';
import '../styles/CreateStudent.css'

function CreateStudent({name, points, car, carname, onChange, onCreate,serverData}){
    return (
        <>
            <div id="blank"></div>
            <select>
                {serverData.map((data) => (
                    <option key={data.name} value={data.name}>{data.name}</option>
                ))}
            </select>
            <input></input>
            <input></input>
        </>
    )
}

export default CreateStudent;