import React from 'react';
import About from './About';
import CampaignSection from './CampaignSection';
import HomeBanner from './HomeBanner';
import Service from './Service';

const Home = () => {
   return (
      <>
         <HomeBanner></HomeBanner>
         <Service></Service>
         {/* <About></About> */}
         <CampaignSection></CampaignSection>
      </>
   );
};

export default Home;