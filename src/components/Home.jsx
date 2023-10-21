import flagImg from '/flag.png'
import './Home.css';
import bgImg from '/bg-car.gif'


const Home = () => {
    return (


            <div className='m-0 p-0 box-border flex items-center justify-center z-10 h-screen bg-cover bg-no-repea' style={{ backgroundImage: `url(${bgImg})` }}> 
                <img className='h-10' src={flagImg} alt="" />

                <h1>Bounty GP</h1>
            </div>
    )
    
}

export default Home;