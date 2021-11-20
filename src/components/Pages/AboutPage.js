import React from 'react';
import banner from '../../images/about-circle.png'

const AboutPage = () => {
   return (
      <>
         <div className="about-page">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
                     <div className="img-box">
                        <img src={banner} className="img-fluid rounded" alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="text-box">
                        <h2>At Yatra, <br /> We provide global tour packages.</h2>
                        <p>Yatra is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh. We are here to bring the luxury to your traveling. Yatra is a proud member of Association of Travel Agents of Bangladesh-ATAB and Tour Operators Association of Bangladesh.</p>
                        <p className="mb-0">Safe traveling, your security, and your enjoyment are our focus during your travels. Our experienced and expert traveling guides ensure that you do not need to move an inch from your comfort zone and make sure that you always have a beautiful satisfactory smile on your face. We believe that your smile is our success and Yatra will do anything to keep you smiling.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutPage;