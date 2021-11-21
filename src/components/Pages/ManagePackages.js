import React, { useEffect, useState } from 'react';

const ManagePackages = () => {
   const [packages, setPackages] = useState([])

   useEffect(() => {
      fetch('https://tranquil-atoll-29388.herokuapp.com/bookings')
      .then(res => res.json())
      .then(data => setPackages(data))
   }, [packages])

   const handleUpdate = id => {
      fetch(`https://tranquil-atoll-29388.herokuapp.com/bookings/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(packages)
      })
      .then(res => res.json())
      .then(data => {
          if (data.modifiedCount > 0) {
              alert('Approved successfully')
          }
      })
      console.log(id);
   }

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
      <div className="manage-package">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="manage-package-box shadow">
                     <h3>Manage all bookings</h3>
                     <table className="table mb-0">
                        <thead>
                           <tr>
                              <th scope="col">Package</th>
                              <th scope="col">Name</th>
                              <th scope="col">Date</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              packages.map(pk => (
                                 <tr key={pk._id}>
                                    <td>{pk.packageName}</td>
                                    <td>{pk.name}</td>
                                    <td>{pk.date}</td>
                                    <td>
                                       {
                                          pk.status === 'Pending' ?
                                             <button onClick={() => handleUpdate(pk._id)} className="btn-yatra green">Approve</button> :
                                             <button className="btn-yatra approved" disabled>Approved</button>
                                       }
                                    </td>
                                    <td>
                                       <button onClick={() => handleDelete(pk._id)} className="btn-yatra delete">Delete</button>
                                    </td>
                                 </tr>
                              ))
                           }
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ManagePackages;