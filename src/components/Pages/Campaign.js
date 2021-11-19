import React from 'react';
import { useHistory } from 'react-router';

const Campaign = ({campaign}) => {
   const {id, image, name, date, place} = campaign;
   
   const history = useHistory()
   const handleDetails = id => {
      const url = `/campaign/${id}`
      history.push(url)
   }

   return (
      <div className="col-lg-4 col-md-6 mx-auto">
         <div onClick={() => handleDetails(id)} className="campaign-box">
            <div className="img-box">
               <img src={image} className="img-fluid rounded" alt="" />
            </div>
            <div className="info">
               <h3>{name}</h3>
               <p className="mb-0 date-place">
                  <span>{date}</span> ||
                  <span> {place}</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Campaign;