import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
   const [packages, setPackages] = useState([])
   const [isDeleted, setIsDeleted] = useState(null)

   useEffect(() => {
      fetch('http://localhost:5000/packages')
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

   console.log(packages);

   return (
      <div className="container my-100">
         <h3 className="text-center mb-5">Products List</h3>
         <table className="table table-striped">
            <thead>
               <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
               </tr>
            </thead>
            <tbody>
               {
                  packages.map(pd => (
                     <tr key={pd._id}>
                        <td>{pd.name}</td>
                        <td>{pd.date}</td>
                        <td>{pd.price}</td>
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
   );
};

export default Packages;