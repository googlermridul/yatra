import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyPackages = () => {
   const {user} = useAuth()
   const [packages, setPackages] = useState([])

   useEffect(() => {
      fetch(`https://tranquil-atoll-29388.herokuapp.com/bookings/${user.email}`)
      .then(res => res.json())
      .then(data => setPackages(data))
   }, [user])

   const handleDelete = id => {
      const proceed = window.confirm('Are you sure you want to delete')
      if (proceed) {
         fetch(`https://tranquil-atoll-29388.herokuapp.com/deleteBooking/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount) {
               const remaining = packages.filter(pk => pk._id !== id)
               setPackages(remaining)
            }
         })
      }
   }

   return (
      <div className="my-package-section">
         <div className="container">
            <div className="package-section-box">
               <h2>My Packages</h2>
               <div className="row">
                  {
                     packages.map(pk => (                  
                        <div key={pk._id} className="col-lg-6">
                        <div className="package-box">
                           <div className="img-box">
                              <img src={pk.image} className="img-fluid" alt="" />
                           </div>
                           <div className="info">
                              <h3 className="package">{pk.packageName}</h3>
                              <span className={ pk.status === "Pending" ? 'status pending' : 'status approved' }>{pk.status}</span>
                              <p>{pk.email}</p>
                              <div className="bottom">
                                 <span className="date">{pk.date}</span>
                                 <button onClick={() => handleDelete(pk._id)} className="btn-yatra green">Cancel</button>
                              </div>
                           </div>
                        </div>
                     </div>))
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyPackages;