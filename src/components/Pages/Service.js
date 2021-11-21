import React from 'react';
import rail from '../../images/train.png'
import hotel from '../../images/slumber.png'
import flight from '../../images/airplane.png'
import ticket from '../../images/ticket.png'
import cruise from '../../images/cruise.png'
import home from '../../images/home.png'

const Service = () => {
   return (
      <div className="service">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="header-text">
                     <h2>OUR SERVICES</h2>
                     <p className="mb-0">Safe traveling, your security, and your enjoyment are our focus during your travels.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-6">
                  <div className="service-box">
                     <div className="img-box">
                        <img src={rail} alt="" />
                     </div>
                     <h3>Rail Booking</h3>
                     <p className="mb-0">We provide rail booking services. Booking rail tickets through the online system.</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="service-box">
                     <div className="img-box">
                        <img src={hotel} alt="" />
                     </div>
                     <h3>Hotel Booking</h3>
                     <p className="mb-0">Big savings on hotels in 12000 destinations worldwide. Find the guaranteed best price on hotels.</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="service-box">
                     <div className="img-box">
                        <img src={flight} alt="" />
                     </div>
                     <h3>Flight Booking</h3>
                     <p className="mb-0">Flight booking, cheap air tickets of domestic & international airlines with Yatra.</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="service-box">
                     <div className="img-box">
                        <img src={ticket} alt="" />
                     </div>
                     <h3>Ticket Booking</h3>
                     <p className="mb-0">Get tickets from anywhere with Yatra. exclusively built to provide the passengers with pleasant</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="service-box">
                     <div className="img-box">
                        <img src={cruise} alt="" />
                     </div>
                     <h3>Cruise Booking</h3>
                     <p className="mb-0">Book a cruise with no booking fees and the best price guaranteed. We are one of the leading cruise sites.</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="service-box">
                     <div className="img-box">
                        <img src={home} alt="" />
                     </div>
                     <h3>Amazing Tour</h3>
                     <p className="mb-0">Find vacation rentals, cabins, beach houses, unique homes and experiences around the world.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Service;