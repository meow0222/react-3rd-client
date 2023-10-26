import img from '/track-img.png';
import driver from '/driver.png';
import './Dashboard.css';


const Dashboard = () => {

  return (
    <section>
      <h1 className='p-6 text-3xl'> Current Bounty Status </h1>
      <div id='track' className='h-screen bg-contain bg-opacity-0 bg-no-repeat ' style={{ backgroundImage: `url(${img})` }}>
      </div>
      <img className='absolute bottom-0 right-0 z-10' src={driver} alt="audience image" />
    </section>
  );
};

export default Dashboard;