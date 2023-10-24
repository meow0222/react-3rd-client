import axios from "axios";
import AccountMenu from "./AccountMenu";

export default function InputScore({serverData}) {
    // function selectChange() {
    //     let select = document.getElementById('studentName');

    // }
    
    const updateScore = () => {
        fetch("http://localhost:3000/score", {
            method: 'POST',
            headers: {
                "task": 'updateScore'
            },
            body: JSON.stringify({
                
            }),
        })
    }

    return (
        <div id="update">
            <select className="p-1" id='studentName'>
            {serverData.map((data) => (
                    <option key={data.name} value={data.name}>{data.name}</option>
                ))}
            </select>
            <input name="score" placeholder="Score"></input>
            <button id="updateBtn" onClick={updateScore}>UPDATE</button>
        </div>
    )
}