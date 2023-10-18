import Table from "./Table";
export function ScoreResult(){
    
    const getScore = () => {
        fetch("http://localhost:9000/score", {
            method: 'get',
            headers : {
                "task" : 'getScore'
            },
        })
    }

    const columns = ["Name", "Score"];
    const data = ["soobeom", 42];

    return (
        <>
            <Table columns={columns} data={data} />
        </>
    )
            
}