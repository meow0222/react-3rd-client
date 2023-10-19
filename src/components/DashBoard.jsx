import img from '../assets/track-img.png';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div id='track' className='grid-area h-screen bg-contain bg-opacity-0 bg-no-repeat pt-16%' style={{ backgroundImage: `url(${img})` }}>
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