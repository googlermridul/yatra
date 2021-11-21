import React from 'react';
import useTours from '../../hooks/useTours';
import Tour from './Tour';

const TourSection = () => {
   const [tours] = useTours()
   
   return (
      <div className="tour-section">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="header-text">
                     <h2>FEATURED TOURS</h2>
                     <p className="mb-0">Safe traveling, your security, and your enjoyment are our focus during your travels.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {
                  tours.length ?
                  tours.map(tour => <Tour 
                     tour={tour} 
                     key={tour._id} ></Tour> ) :
                  <div class="d-flex justify-content-center">
                     <div class="spinner-border" role="status"></div>
                  </div>
               }
            </div>
         </div>
      </div>
   );
};

export default TourSection;