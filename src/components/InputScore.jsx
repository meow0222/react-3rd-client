import axios from "axios";
import AccountMenu from "./AccountMenu";

export function InputScore() {
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
                name: "Test",
                score: 13,
            }),
        })
    }

    const getScore = () => {
        console.log('btn clicked');
        fetch("http://localhost:3000/score", {
            method: 'get',
            headers: {
                "task": 'getScore'
            },
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                console.log(result.length);
                const data = Array(result.length)
                    .fill()
                    .map((arr, i) => ({
                        name: result[i].name,
                        points: result[i].points
                    }));
                console.log(data);
            })

    }


    return (
        <section id="update">
            <select className="p-1" id='studentName'>
            {serverData.map((data) => (
                    <option key={data.name} value={data.name}>{data.name}</option>
                ))}
            </select>
            <input name="score" placeholder="Score"></input>
            {/* <button id="addBtn" onClick={getScore}>GET</button> */}
            <button id="updateBtn" onClick={updateScore}>UPDATE</button>
        </section>
    )
}