import React from 'react';
import Banner from './Banner.jsx'
import About from './About.jsx'
import Services from './Services.jsx';

const Homepage = () => {
    return (
        <div>
           <Banner/>
           <About/>
           <Services/>
        </div>
    );
};

export default Homepage;