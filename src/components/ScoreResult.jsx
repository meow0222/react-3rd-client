import Table from "./Table";
import { InputScore } from "./InputScore";
import React, { useState } from "react";


export function ScoreResult(){
    const [arr,setArr] = useState([])
    const getScore = () => {
        console.log('btn clicked');
        fetch("http://localhost:3000/score", {
            method: 'get',
            headers : {
                "task" : 'getScore'
            },
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            for (let i=0; i< result.length; i++){
                console.log('go');
                let item = {"name": result[i].name,
                        "points": result[i].points}
                console.log(item);
                setArr([...arr, item]);
                console.log(arr);
            }
        })
    }

    const columns = ["Name", "Points"];
    
    console.log('now : ',arr);
    return (
        <>
            <Table />
            <InputScore />
            <br></br>
            <button onClick={getScore}>Click</button>
        </>
    )
            
}