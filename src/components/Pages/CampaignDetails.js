import React, { useEffect, useState } from 'react';
import useCampaigns from '../../hooks/useCampaigns';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendar } from '@fortawesome/free-solid-svg-icons'

const CampaignDetails = () => {
   const [campaigns] = useCampaigns()
   const [details, setDetails] = useState({})
   const {campaignId} = useParams()
   
   useEffect(() => {
      if (campaigns.length > 0) {
         const matchedData = campaigns.find(detail => detail.id === parseInt(campaignId))
         setDetails(matchedData);
      }
   }, [campaigns])

   const {image, name, date, place, description} = details;

   return (
      <div className="campaign-details">
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
                        <button className="btn-yatra">Join Campaign</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CampaignDetails;