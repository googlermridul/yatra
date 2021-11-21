import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const BookPackage = ({tour}) => {
   const { user } = useAuth()

   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const onSubmit = data => {
      data.status = "Pending"
      data.image = tour.image;
      data.packageName = tour.name;

      fetch(`http://localhost:5000/addBooking`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
         if (result.insertedId) {
            alert('Package booked successfully')
            reset()
         }
      })
   };

   return (
      <div className="login book-package">
         <div className="login-box shadow">
            <h3>Book package</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-0 text-start">
               <div className="row">
                  <div className="form-group col-12">
                     <input className="form-control shadow-sm" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Username" />
                     {errors.name && <span className="error">name is required</span>}
                  </div>
                  <div className="form-group col-12">
                     <input className="form-control shadow-sm" defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
                     {errors.email && <span className="error">email is required</span>}
                  </div>
                  <div className="form-group col-12">
                     <input className="form-control shadow-sm" defaultValue="" {...register("phone", { required: true })} placeholder="Phone" />
                     {errors.phone && <span className="error">phone is required</span>}
                  </div>
                  <div className="form-group col-12">
                     <input className="form-control shadow-sm" defaultValue="" {...register("address", { required: true })} placeholder="address" />
                     {errors.address && <span className="error">address is required</span>}
                  </div>
                  <div className="form-group col-12">
                     <input className="form-control shadow-sm" defaultValue="" {...register("date", { required: true })} placeholder="Date" type="date" />
                     {errors.date && <span className="error">date is required</span>}
                  </div>
               </div>
               <button type="submit" className="btn-yatra shadow-sm">Book Now</button>
            </form>
         </div>
      </div>
   );
};

export default BookPackage;