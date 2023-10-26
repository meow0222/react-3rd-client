import img from '../assets/track-img.png';
import './Dashboard.css';


const Dashboard = () => {

  return (
    <>
      <h1 className='p-6 text-3xl'> Current Bounty Status </h1>
      <div id='track' className='h-screen bg-contain bg-opacity-0 bg-no-repeat ' style={{ backgroundImage: `url(${img})` }}>
      </div>
    </>
  );
};

export default Dashboard;