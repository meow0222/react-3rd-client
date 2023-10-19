import img from '../assets/track-img.png';
import './Dashboard.css';
import carBlack from '/cars/car-black.png';
import carRed from '/cars/car-red.png';
import policeCar from '/cars/police.png';
import tank from '/cars/tank.png';
import truck1 from '/cars/truck-1.png';
import truck from '/cars/truck.png';


const localImageUrls = [carBlack, carRed, policeCar, tank, truck1, truck];

const Dashboard = () => {
  return (
    <div className='grid-area h-screen bg-contain bg-opacity-0 bg-no-repeat pt-6' style={{ backgroundImage: `url(${img})` }}>
      {localImageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image of ${index}`}
          className='pl-12'
        />
      ))}
    </div>
  );
};

export default Dashboard;