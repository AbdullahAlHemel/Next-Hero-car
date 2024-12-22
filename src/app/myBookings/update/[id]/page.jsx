'use client'
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

const page = () => {
    const params = useParams()
    const {data} = useSession();
    const [booking, setBooking] = useState([]);
    
    const loadBooking = async () => {
       const bookingDetail = await fetch(`http://localhost:3000/myBookings/api/booking/${params.id}`)
       const data = await bookingDetail.json() ;       
       setBooking(data.data)
    }

    const handleUpdateBooking = async (event) => {
         event.preventDefault();
         const updatedBooking = {
            date: event.target.date.value,
            details: event.target.details.value,
         }
         const resp = await fetch(`http://localhost:3000/myBookings/api/booking/${params.id}`,{
         method : 'PATCH',
         body: JSON.stringify(updatedBooking),
         headers:{
            "content-type" : "application/json"
         },
       } 
    )
        if(resp.status === 200){
            toast.success('Updated Successfully')
        }
    }

    useEffect(()=>{
        loadBooking()
     },[params])

    return (
        <div className='w-11/12 m-auto my-2 '>
      <div className="h-72">
        <div className="relative h-12 ">
          <Image 
              className="absolute rounded-xl h-72 w-full left-0 top-0 object-cover"
              src={'/assets/images/homeCarousel/3.jpg'}
              alt="service"
              width={1920}
              height={1080}
              style={{ width: '90vw' }}
          />
          <div className="absolute h-full left-0 bottom-0 flex items-center justify-center">
            <h2 className="text-white text-center text-3xl mx-5 font-bold flex justify-center items-center">
              Service Details
            </h2>
          </div>
        </div>
      </div>
      <div className="my-4 rounded bg-slate-300 py-16 p-20">
      <form onSubmit={handleUpdateBooking}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Name</span>
                    </label>
                    <input defaultValue={data?.user?.name} type="text" name='name' placeholder='Name' className='input input-bordered text-black' />
                </div>      
                {/* <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Price</span>
                    </label>
                    <input  readOnly type="number" name='price' className='input input-bordered text-black' />
                </div> */}
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Email</span>
                    </label>
                    <input defaultValue={data?.user?.email} type="email" name='email' className='input input-bordered text-black' />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Date</span>
                    </label>
                    <input  
                     type="date" defaultValue={booking?.date} name='date' className='input input-bordered text-black' />
                </div>
            </div>
                <div className='form-control w-full '>
                    <label className='label'>
                        <span className='label-text'>Details</span>
                    </label>
                    <textarea defaultValue={booking.details} type="text" name='details' className=' input-bordered rounded-lg text-black p-4' rows="7" cols="5" ></textarea>
                </div>
               <input type="submit" className='text-white font-bold btn btn-primary w-full mt-12' />
          </form>
      </div>
    </div> 
    );
};

export default page;