import React from 'react';
import './ServerTest.css';
import Button from '@mui/material/Button';
import axios from 'axios';
export default function ServerTest() {
    function getStuff() {
        axios.get("https://localhost:3000/racedata", {'task' : 'getStuff'})
        .then((response) => {
            console.log(response);
        })
    }
    return(
        <div className='testContainer'>
            <Button variant="outlined">Update TS</Button>
            <Button onClick={getStuff} variant="contained">Get TS</Button>
        </div>
    )
}