import React from 'react';
import { useHistory } from 'react-router';

const Tour = ({tour}) => {
   const {_id, image, name, description, date, price} = tour;
   
   const history = useHistory()
   const handleDetails = id => {
      const url = `/tour/${id}`
      history.push(url)
   }

   return (
      <div className="col-lg-4 col-md-6 mx-auto">
         <div className="tour-box">
            <div className="img-box">
               <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="info">
               <h3>{name}</h3>
               <p>{description.slice(0, 60)}...</p>
               <div className="bottom">
                  <h3 className="price">${price} <span className="date">- {date}</span></h3>
                  <button onClick={() => handleDetails(_id)} className="btn-yatra green">Book Now</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Tour;