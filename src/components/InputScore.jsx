export function InputScore(){
    function selectChange() {
        let select = document.getElementById('studentName');

    }

    const updateScore = () => {
        fetch("http://localhost:3000/score", {
            method: 'POST',
            headers : {
                "task" : 'updateScore'
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
            headers : {
                "task" : 'getScore'
            },
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            console.log(result.length);
            const data = Array(result.length)
            .fill()
            .map((arr, i) => ({
                name : result[i].name,
                points : result[i].points
            }));
            console.log(data);
        })

    }
    

    return(
        <>
        <select id='studentName'>
			<option key="name1" value="name1">name1</option>
			<option key="name2" value="name2">name2</option>
			<option key="name4" value="name3">name3</option>
		</select>
        <input name="name" placeholder="Name"></input>
        <input name="score" placeholder="Score"></input>
        <button id="addBtn" onClick={getScore}>GET</button>
        <button id="updateBtn" onClick={updateScore}>UPDATE</button>
        </>
    )
}