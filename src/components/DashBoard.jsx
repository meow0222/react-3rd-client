import img from '../assets/track-img.png';
import './Dashboard.css';
import Button from '@mui/material/Button';
import axios from 'axios';


import carBlack from '/public/cars/car-black.png';
import carRed from '/public/cars/car-red.png';
import policeCar from '/public/cars/police.png';
import tank from '/public/cars/tank.png';
import truck1 from '/public/cars/truck-1.png';
import truck from '/public/cars/truck.png';


const localImageUrls = [carBlack, carRed, policeCar, tank, truck1, truck];


function loadCars() {
  var constant = 0;
  axios.get("http://localhost:3000/racedata", {
      headers: {'task' : 'getStuff'},
      responseType: "json"
  })
  .then((response) => {
    const track = document.getElementById('track');
    const riders = response.data;
    track.innerHTML = '';
    var x = 10;
    for(let i = 0; i < riders.length; i++){
      if(riders[i].points > x){
        x = riders[i].points;
        constant = 100 / x;
        console.log(x);
      }
    }
    console.log('constant: ' + constant);
    for(let i = 0; i < riders.length; i++){
      let img = document.createElement('img');
      img.setAttribute('src', `${localImageUrls[riders[i].car]}`);
      img.setAttribute('style', `margin-left: calc(${riders[i].points * constant}% - 70px);`)
      img.setAttribute('alt', `${riders[i].car}`);
      img.setAttribute('class', 'car');
      track.appendChild(img);
      console.log(`appending ${riders[i].name}'s ${riders[i].carname} with ${riders[i].points * constant}% margin`)
    }
  })
}


const Dashboard = () => {

  return (
    <div id='track' className='grid-area h-screen bg-contain bg-opacity-0 bg-no-repeat ' style={{ backgroundImage: `url(${img})` }}>
      <Button onClick={loadCars} variant="contained">Load Cars</Button>
    </div>
  );
};

export default Dashboard;