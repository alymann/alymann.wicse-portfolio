import Navbar from './Navbar.jsx'
import pic from '../assets/aly.png'
import './Home.css'


const Home = () => {
    return (
        <div className='header'>
            <div className='left'>
                <img src={pic} className='pfp'></img>
            </div>

            <div className='right'>
                <h1>Alyssa Mann</h1>
                <p>Software Engineer. Developer. Designer.</p>
            </div>
        </div>
    );
};

export default Home