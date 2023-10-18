import React from 'react';
import './ServerTest.css';
import Button from '@mui/material/Button';
import axios from 'axios';
export default function ServerTest() {
    function getStuff() {
        axios.get("http://localhost:3000/racedata", {
            headers: {'task' : 'getStuff'},
            responseType: "json"
        })
        .then((response) => {
            const racer = response.data[2];
            alert('Name: ' + racer.name + '\nPoints: ' + racer.points + '\nCar: ' + racer.car);
        })
    }
    return(
        <div className='testContainer'>
            <Button variant="outlined">Update TS</Button>
            <Button onClick={getStuff} variant="contained">Get TS</Button>
        </div>
    )
}