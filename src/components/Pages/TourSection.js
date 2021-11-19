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
                     <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing Suscipit votas aperiam <br /> Sorem ipsum dolor consectur adipisicing elit.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {
                  tours.slice(0, 6).map(tour => <Tour 
                     tour={tour} 
                     key={tour.id} ></Tour> )
               }
            </div>
         </div>
      </div>
   );
};

export default TourSection;