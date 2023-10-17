export function ScoreResult(){
    
    const getScore = () => {
        fetch("http://localhost:9000/score", {
            method: 'get',
            headers : {
                "task" : 'getScore'
            },
        })
    }

    const colums = ["Name", "Score"];

}