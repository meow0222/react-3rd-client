import Table from "./Table";
import { InputScore } from "./InputScore";
export function ScoreResult(){
    const columns = ["Name", "Score"];
    const data = Array(1)
    .fill()
    .map(() => ({
      name: 'soobeom',
      score: 32,
    }));

    return (
        <>
            <Table columns={columns} data={data} />
            <InputScore />
        </>
    )
            
}