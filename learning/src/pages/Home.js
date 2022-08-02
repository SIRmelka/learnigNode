import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <div className='body'><h1>Home</h1></div>
            
        </div>
    );
};

export default Home;