import React, { useEffect, useState } from 'react';
import useTours from '../../hooks/useTours';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendar } from '@fortawesome/free-solid-svg-icons'

const TourDetails = () => {
   const [tours] = useTours()
   const [details, setDetails] = useState({})
   const {tourId} = useParams()
   
   useEffect(() => {
      if (tours.length > 0) {
         const matchedData = tours.find(detail => detail.id === parseInt(tourId))
         setDetails(matchedData);
      }
   }, [tours])

   const {image, name, date, place, description} = details;

   return (
      <div className="tour-details">
         <div className="about-bg">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
                     <div className="img-box">
                        <img src={image} className="img-fluid rounded" alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="info">
                        <h2>{name}</h2>
                        <p className="description">{description}</p>
                        <p className="date-place">
                           <FontAwesomeIcon className="fa-icon" icon={faMapMarkerAlt} /> {place}
                        </p>
                        <p className="date-place">
                           <FontAwesomeIcon className="fa-icon" icon={faCalendar} /> {date}
                        </p>
                        <button className="btn-yatra">Join Tour</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TourDetails;