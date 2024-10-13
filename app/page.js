"use client"
import { useForm } from 'react-hook-form'
import React, { useEffect, useRef, useState } from 'react'
import Toggle from './components/Toggle'

const page = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const pushData = (data) => {
    console.log(data);
  }
  return (
    <div>
      <Toggle />
      <h1 className='text-center mt-8 font-bold text-3xl'>Admission Form</h1>
      <div className='my-container'>
        <form className='w-full gap-5 mt-10 flex flex-col' onSubmit={handleSubmit(pushData)}>
          <div className='w-full flex gap-5'>
            <label className="form-control w-full max-w-[50%]">
              <div className="label">
                <span className="label-text">Full Name</span>
              </div>
              <input type="text" {...register("fullName", { required: true })} placeholder="Full Name" className="input input-bordered w-full" />
              <div className="label">
                {errors.fullName && <span className="text-red-500">This field is required</span>}
              </div>
            </label>
            <label className="form-control w-full max-w-[50%]">
              <div className="label">
                <span className="label-text">Father Name</span>
              </div>
              <input type="text" {...register("fatherName", { required: true })} placeholder="Father Name" className="input input-bordered w-full" />
              <div className="label">
                {errors.fatherName && <span className="text-red-500">This field is required</span>}
              </div>
            </label>
          </div>
          <div className='w-full flex gap-5'>
            <label className="form-control w-full max-w-[50%]">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered w-full" />
              <div className="label">
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
            </label>
            <label className="form-control w-full max-w-[50%]">
              <div className="label">
                <span className="label-text">Phone Number</span>
              </div>
              <input type="number" {...register("phoneNumber", { required: true })} placeholder="Phone Number" className="input input-bordered w-full" />
              <div className="label">
                {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
              </div>
            </label>
          </div>
          <div className='w-full flex gap-5'>
            <label className="form-control w-full max-w-[50%]">
              <div className="label">
                <span className="label-text">National ID (CNIC)</span>
              </div>
              <input type="text" {...register("cnic", { required: true })} placeholder="National ID (CNIC)" className="input input-bordered w-full" />
              <div className="label">
                {errors.cnic && <span className="text-red-500">This field is required</span>}
              </div>
            </label>
            <label className="form-control w-full max-w-[50%]">
              <div className="label">
                <span className="label-text">Date of Birth</span>
              </div>
              <input type="date" {...register("dob", { required: true })} placeholder="Date of Birth" className="input input-bordered w-full" />
              <div className="label">
                {errors.dob && <span className="text-red-500">This field is required</span>}
              </div>
            </label>
          </div>
          <div className='w-full flex gap-5'>
            <label className="form-control w-full max-w-[50%]">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>
              <select {...register("gender", {required: true})} className="select select-bordered">
                <option value={'male'} defaultValue>Male</option>
                <option value={'female'}>Female</option>
                <option value={'attackHelicopter'}>Attack Helicopter</option>
              </select>
              <div className="label">
                {errors.gender && <span className="label-text-alt">This field is required</span>}
              </div>
            </label>
            <label className="form-control w-full max-w-[50%]">
              <div className="label">
                <span className="label-text">Do you have a Laptop?</span>
              </div>
              <select {...register("isLaptop", {required: true})} className="select select-bordered">
                <option value={'yes'} defaultValue>Yes</option>
                <option value={'no'}>No</option>
                <option value={'planToBuy'}>Plan to buy</option>
              </select>
              <div className="label">
                {errors.isLaptop && <span className="label-text-alt">This field is required</span>}
              </div>
            </label>
          </div>
          <div className='w-full flex flex-col gap-4'>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Address</span>
              </div>
              <input type="text" {...register("address", { required: true })} placeholder="Address" className="input input-bordered w-full" />
              <div className="label">
                {errors.address && <span className="text-red-500">This field is required</span>}
              </div>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Last Qualification</span>
              </div>
              <select {...register("qualification", {required: true})} className="select select-bordered">
                <option value={'matric'} defaultValue>Matric</option>
                <option value={'intermediate'}>Intermediate</option>
                <option value={'bachelors'}>Bachelors</option>
                <option value={'masters'}>Masters</option>
              </select>
              <div className="label">
                {errors.qualification && <span className="label-text-alt">This field is required</span>}
              </div>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Profile Image</span>
              </div>
              <input type="file" className="file-input file-input-bordered w-full" {...register("pfp", {required: true})}/>
              <div className="label">
                {errors.pfp && <span className="text-red-500">This field is required</span>}
              </div>
            </label>
          </div>
          <button type="submit" class="btn btn-primary mb-10">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default page