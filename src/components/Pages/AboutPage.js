import React from 'react';
import banner from '../../images/home-banner.jpg'

const AboutPage = () => {
   return (
      <>
         <div className="about-page">
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
                           <p>We see our mission in generating resources through fundraising initiatives and partnerships. We aim to grant wishes that will give hope to people in need in communities across the world. The goal of our organization is to  reduce the inequity in access to education & health care of children.</p>
                           <button className="btn-yatra">Donate Now</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutPage;