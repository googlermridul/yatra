import React from 'react';
import { useForm } from "react-hook-form";

const AddPackage = () => {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const onSubmit = data => {
      console.log(data)

      fetch(`http://localhost:5000/addPackage`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => console.log(data))
   };

   return (
      <div className="container my-100">
         <form onSubmit={handleSubmit(onSubmit)}>
            
            <input className="form-control mt-3" defaultValue="" {...register("image", { required: true })} placeholder="image" />
            {errors.image && <span>image is required</span>}
            
            <input className="form-control mt-3" defaultValue="" {...register("name", { required: true })} placeholder="name" />
            {errors.name && <span>name is required</span>}

            <input className="form-control mt-3" defaultValue="" {...register("date", { required: true })} placeholder="date" />
            {errors.date && <span>date is required</span>}

            <input className="form-control mt-3" defaultValue="" {...register("price", { required: true })} placeholder="price" />
            {errors.price && <span>price is required</span>}

            <input className="form-control mt-3" defaultValue="" {...register("description", { required: true })} placeholder="description" />
            {errors.description && <span>description is required</span>}
            
            <br /><input className="btn-yatra mt-3" type="submit" />
         </form>
      </div>
   );
};

export default AddPackage;