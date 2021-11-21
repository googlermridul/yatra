import React from 'react';
import About from './About';
import TourSection from './TourSection';
import HomeBanner from './HomeBanner';
import Service from './Service';
import useTours from '../../hooks/useTours';

const Home = () => {
   const [tours] = useTours()
   
   return (
      <>
         {
            tours.length !== 0 ? 
            <>
               <HomeBanner></HomeBanner>
               <Service></Service>
               <TourSection></TourSection>
               <About></About>
            </> :
            <div className="pre-loader">
               <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status"></div>
               </div>
            </div>
         }
      </>
   );
};

export default Home;