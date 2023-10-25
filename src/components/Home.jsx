import flagImg from '/flag.png';
import './Home.css';
import mainImg from '/main-img.png';
import bgImg from '/bg-car.gif';
import arrowImg from '/arrow.png';

import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='relative h-screen bg-no-repeat bg-cover' style={{ backgroundImage:`url(${bgImg})` }}>
            <section id='bgp' className='m-0 pt-16 box-border flex items-center justify-center z-10'  > 
                <img className='flag-img pb-8 mx-4' src={flagImg} alt="Image of chacker flag" />
                <div className='flex flex-col items-center'>
                    <h2>Bounty GP</h2>
                    <div className='flex items-center'>
                        <img className='r-arrow' src={arrowImg} alt="right arrow image"/>
                        <Link to='/chart'>
                            <button className='h2-btn'>Go to Chart</button>
                        </Link>

                    </div>
                </div>
                <img className='flag-img pb-8 mx-4' src={flagImg} alt="Image of chacker flag" />
                <img className='main-img' src={mainImg} alt="Image of red formula car" />
            </section>
        </div>
    )
    
}

export default Home;