import React, { useEffect, useState } from 'react';
import useTours from '../../hooks/useTours';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendar } from '@fortawesome/free-solid-svg-icons'
import BookPackage from './BookPackage';

const TourDetails = () => {
   const [tours] = useTours()
   const [details, setDetails] = useState({})
   const {tourId} = useParams()
   
   useEffect(() => {
      if (tours.length > 0) {
         const matchedData = tours.find(detail => detail._id === tourId)
         setDetails(matchedData);
      }
   }, [tours])

   const {image, name, date, description} = details;

   return (
      <div className="tour-details">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 mb-5 mb-lg-0 pe-lg-5">
                  <div className="img-box mb-3">
                     <img src={image} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="info">
                     <h2>{name}</h2>
                     <p className="description">{description}</p>
                     <p className="date-place">
                        <FontAwesomeIcon className="fa-icon" icon={faMapMarkerAlt} /> {name}
                     </p>
                     <p className="date-place mb-0">
                        <FontAwesomeIcon className="fa-icon" icon={faCalendar} /> {date}
                     </p>
                  </div>
               </div>
               <div className="col-lg-4">
                  <BookPackage tour={details}></BookPackage>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TourDetails;