import React from 'react';
import { useForm } from "react-hook-form";

const AddPackage = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const onSubmit = data => {

      fetch(`http://localhost:5000/addPackage`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
         console.log(result);
         if (result.insertedId) {
            alert('Package added successfully')
            // data.target.reset()
            reset()
         }
      })
   };

   return (
      <div className="login add-package">
         <div className="login-bg">
            <div className="container">
               <div className="row">
                  <div className="col">
                     <div className="login-box shadow">
                        <h3>Add new tour package</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="mb-0 text-start">
                           <div className="row">
                              <div className="form-group col-md-6">
                                 <input className="form-control shadow-sm" defaultValue="" {...register("name", { required: true })} placeholder="name" />
                                 {errors.name && <span className="error">name is required</span>}
                              </div>
                              <div className="form-group col-md-6">
                                 <input className="form-control shadow-sm" defaultValue="" {...register("image", { required: true })} placeholder="image url" />
                                 {errors.image && <span className="error">image is required</span>}
                              </div>
                              <div className="form-group col-md-6">
                                 <input className="form-control shadow-sm" defaultValue="" {...register("date", { required: true })} placeholder="date" />
                                 {errors.date && <span className="error">date is required</span>}
                              </div>
                              <div className="form-group col-md-6">
                                 <input className="form-control shadow-sm" defaultValue="" {...register("price", { required: true })} placeholder="price" />
                                 {errors.price && <span className="error">price is required</span>}
                              </div>
                              <div className="col-12">
                                 <textarea cols="30" rows="10" className="form-control shadow-sm text-area" defaultValue="" {...register("description", { required: true })} placeholder="description" />
                                 {errors.description && <span className="error">description is required</span>}
                              </div>
                           </div>
                           <button type="submit" className="btn-yatra shadow-sm">Submit</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AddPackage;