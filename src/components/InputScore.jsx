export function InputScore(){
    function selectChange() {
        let select = document.getElementById('studentName');

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
        })

    }

    const addScore = () => {
        fetch("http://localhost:3000/score", {
            method: '',
            headers : {
                "task" : 'getScore'
            },
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
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
        <button id="addBtn" onClick={getScore}>ADD</button>
        </>
    )
}