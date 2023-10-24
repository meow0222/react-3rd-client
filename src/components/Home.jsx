import flagImg from '/flag.png'
import './Home.css';
import bgImg from '/main-img.png'


const Home = () => {
    return (
        <>
            <section id='bgp' className='m-0 p-0 box-border flex items-center justify-center z-10 h-screen'> 
                <img className='flag-img h-10 mx-6' src={flagImg} alt="Image of chacker flag" />
                <h1>Bounty GP</h1>
                <img className='main-img' src={bgImg} alt="Image of red formula car" />
            </section>
            <section>
                
            </section>
        </>
    )
    
}

export default Home;