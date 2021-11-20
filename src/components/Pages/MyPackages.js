import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
// import useMyPackages from '../../hooks/useMyPackages';

const MyPackages = () => {
   const {user} = useAuth()
   const [packages, setPackages] = useState([])

   useEffect(() => {
      fetch(`http://localhost:5000/bookings/${user.email}`)
      .then(res => res.json())
      .then(data => setPackages(data))
   }, [user])

   const handleDelete = id => {
      const proceed = window.confirm('Are you sure you want to delete')
      if (proceed) {
         fetch(`http://localhost:5000/deleteBooking/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount) {
               const remaining = packages.filter(pd => pd._id !== id)
               setPackages(remaining)
            }
         })
      }
   }

   return (
      <div className="tour-section">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="header-text">
                     <h2>MY PACKAGES</h2>
                     <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing Suscipit votas aperiam <br /> Sorem ipsum dolor consectur adipisicing elit.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {
                  packages.map(pk => (                  
                     <div key={pk._id} className="col-lg-4 col-md-6">
                     <div className="tour-box">
                        <div className="img-box">
                           {/* <img src={image} className="img-fluid" alt="" /> */}
                        </div>
                        <div className="info">
                           <h3>{pk.packageName}</h3>
                           <small>{pk.status}</small>
                           <p>{pk.email}</p>
                           <div className="bottom">
                              <h3 className="price"><span className="date">{pk.date}</span></h3>
                              <button onClick={() => handleDelete(pk._id)} className="btn-yatra green">Cancel</button>
                           </div>
                        </div>
                     </div>
                  </div>))
               }
            </div>
         </div>
      </div>
   );
};

export default MyPackages;