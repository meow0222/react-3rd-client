import flagImg from '/flag.png'
import './Home.css';
import bgImg from '/bg-car.gif'


const Home = () => {
    return (
    <div id='bgp' className='m-0 p-0 box-border flex items-center justify-center z-10 h-screen bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bgImg})` }}> 
        <h1>Bounty GP</h1>
        <img className='h-10' src={flagImg} alt="" />
    </div>
    )
    
}

export default Home;