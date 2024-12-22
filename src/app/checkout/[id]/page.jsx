'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Properly handles `params`
import { getServicesDetails } from '@/components/services/getServices';
import { toast } from 'react-toastify';
import Image from 'next/image';

const Checkout = () => {
  const { data } = useSession();
  const params = useParams(); // Hook to fetch params
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      console.log("Fetching service for ID:", params.id); // Log the service ID

      try {
        const details = await getServicesDetails(params.id);
        setService(details.service);
      } catch (error) {
        console.error('Error loading service details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const { title, description, img, price, _id } = service || {};

  const handleBooking = async (event) => {
    event.preventDefault();
    const newBooking = {
       email: data?.user?.email,
       name: data?.user?.name,
       date: event.target.date.value,
       details: event.target.details.value,
       serviceTitle : title,
       serviceID: _id,
       price: price
      }
      const resp = await fetch('http://localhost:3000/checkout/api/new-booking',{
        method: 'POST',
        body: JSON.stringify(newBooking),
        headers : {
          "content-type" : "application/json"
        }
      })
      const response = await resp?.json()
      toast.success(response?.message)
      event.target.reset()
      
  };

  return (
    <div className='w-11/12 m-auto my-2 '>
      <div className="h-72">
        <div className="relative h-12 ">
          <Image 
              className="absolute rounded-xl h-72 w-full left-0 top-0 object-cover"
              src={img}
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
      <form onSubmit={handleBooking}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Name</span>
                    </label>
                    <input defaultValue={data?.user?.name} type="text" name='name' placeholder='Name' className='input input-bordered text-black' />
                </div>      
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Price</span>
                    </label>
                    <input defaultValue={price} readOnly type="number" name='price' className='input input-bordered text-black' />
                </div>
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
                    <input defaultValue={new Date().toISOString().split('T')[0]} 
                     type="date" name='date' className='input input-bordered text-black' />
                </div>
            </div>
                <div className='form-control w-full '>
                    <label className='label'>
                        <span className='label-text'>Details</span>
                    </label>
                    <textarea type="text" name='details' className=' input-bordered rounded-lg text-black' rows="7" cols="5" ></textarea>
                </div>
               <input type="submit" className='text-white font-bold btn btn-primary w-full mt-12' />
          </form>
      </div>
    </div>
  );
};

export default Checkout;