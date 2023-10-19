import img from '../assets/track-img.png';
import './Dashboard.css';
import carBlack from '/cars/car-black.png';
import carRed from '/cars/car-red.png';
import policeCar from '/cars/police.png';
import tank from '/cars/tank.png';
import truck1 from '/cars/truck-1.png';
import truck from '/cars/truck.png';
import axios from 'axios';
import Button from '@mui/material/Button';


const localImageUrls = [carBlack, carRed, policeCar, tank, truck1, truck];

const Dashboard = () => {
  const constant = 1;
  function loadCars() {
    axios.get("http://localhost:3000/racedata", {
        headers: {'task' : 'getStuff'},
        responseType: "json"
    })
    .then((response) => {
        const track = document.getElementById('track');
        const riders = response.data;
        track.innerHTML = '';
        for(let i = 0; i < riders.length; i++){
          let img = document.createElement('img');
          img.setAttribute('src', `${localImageUrls[riders[i].car]}`);
          img.setAttribute('style', `margin-left: ${riders[i].points * constant}%;`)
          img.setAttribute('alt', `${riders[i].car}`);
          track.appendChild(img);
          console.log(`appending ${riders[i].name}'s ${riders[i].carname} with ${riders[i].points * constant}% margin`)
        }
    })
  }
  return (
    <div onClick={loadCars} id='track' className='grid-area h-screen bg-contain bg-opacity-0 bg-no-repeat pt-6' style={{ backgroundImage: `url(${img})` }}>
      {/* {localImageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image of ${index}`}
          className='pl-12'
        />
      ))} */}
      {/* <img src={tank} style={{marginLeft: `${22 * constant}%`}} className='pl-12'/> */}
    </div>
  );
};

export default Dashboard;