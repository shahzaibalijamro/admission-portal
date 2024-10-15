"use client"
import React from 'react'
import Toggle from '../components/Toggle'
import { useForm } from 'react-hook-form';

const page = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const pushData = (data) => {
    console.log(data);
  }
  return (
    <div>
      <Toggle />
      <h1 className='text-center mt-8 font-bold text-3xl animate__animated animate__fadeIn'>Admission Verification</h1>
      <div className='my-container animate__animated animate__fadeIn'>
        <form className='w-full mt-10 flex flex-col' onSubmit={handleSubmit(pushData)}>
          <div className='w-full flex'>
            <label className="form-control w-full">
              <div className="label">
              <span className="label-text">CNIC (Which you provided during form submission)</span>
              </div>
              <input type="text" {...register("cnic", { required: true })} placeholder="CNIC" className="input input-bordered w-full" />
              <div className="label">
                {errors.cnic && <span className="text-red-500">This field is required</span>}
              </div>
            </label>
          </div>
          <button type="submit" className="btn btn-primary mb-10">Verify</button>
        </form>
      </div>
    </div>
  )
}

export default page