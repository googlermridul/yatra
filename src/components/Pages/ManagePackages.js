import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManagePackages = () => {
   const [packages, setPackages] = useState([])
   const [isDeleted, setIsDeleted] = useState(null)

   useEffect(() => {
      fetch('http://localhost:5000/bookings')
      .then(res => res.json())
      .then(data => setPackages(data))
   }, [isDeleted])

   const handleDelete = id => {
      const proceed = window.confirm('Are you sure you want to delete')
      if (proceed) {
         fetch(`http://localhost:5000/deletePackage/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            data.deletedCount ? setIsDeleted(true) : setIsDeleted(false)
         })
      }
   }

   return (
      <div className="tour-section">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="header-text">
                     <h2>MANAGE ALL PACKAGES</h2>
                     <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing Suscipit votas aperiam <br /> Sorem ipsum dolor consectur adipisicing elit.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col">
                  
                  <table className="table table-striped">
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
                           packages.map(pd => (
                              <tr key={pd._id}>
                                 <td>{pd.packageName}</td>
                                 <td>{pd.name}</td>
                                 <td>{pd.date}</td>
                                 <td>{pd.status}</td>
                                 <td>
                                    <button className="btn btn-sm btn-primary">
                                       <Link className="link" to={`/product/update/${pd._id}`}>Update</Link>
                                    </button>
                                    <button onClick={() => handleDelete(pd._id)} className="btn btn-sm btn-danger mx-1">Delete</button>
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
   );
};

export default ManagePackages;