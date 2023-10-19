import Table from "./Table";
import { InputScore } from "./InputScore";
export function ScoreResult(){
    var data;
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
            data = Array(result.length)
            .fill()
            .map((arr, i) => ({
                name : result[i].name,
                points : result[i].points
            }));
        })

    }

    const columns = ["Name", "Points"];
    getScore();
    console.log(data);
    return (
        <>
            <Table columns={columns} data={data} />
            <InputScore />
        </>
    )
            
}