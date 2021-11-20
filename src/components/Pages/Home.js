import React from 'react';
import About from './About';
import TourSection from './TourSection';
import HomeBanner from './HomeBanner';
import Service from './Service';

const Home = () => {
   return (
      <>
         <HomeBanner></HomeBanner>
         <Service></Service>
         <TourSection></TourSection>
         <About></About>
      </>
   );
};

export default Home;