import React from 'react';
import banner from '../../images/home-banner.jpg'

const About = () => {
   return (
      <div className="about">
         <div className="about-bg">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
                     <div className="img-box">
                        <img src={banner} className="img-fluid rounded" alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="text-box">
                        <h2>At Yatra, <br /> we manage global charitable projects.</h2>
                        <p>Millions of families in America go hungry every year.</p>
                        <button className="btn-yatra">About Yatra</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;