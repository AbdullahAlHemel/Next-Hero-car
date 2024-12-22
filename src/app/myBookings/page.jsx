'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';

const page = () => {
    const session = useSession();
    const [bookings, setBookings] = useState([]);
    const loadData = async () => {
        const resp = await fetch(`http://localhost:3000/myBookings/api/${session?.data?.user?.email}`)
        const data = await resp.json()
        setBookings(data?.myBookings)
    };
    
    const handleDelete = async (id) => {
       const deleted = await fetch(`http://localhost:3000/myBookings/api/booking/${id}`,{
        method: 'DELETE',     
       })
      const resp = await deleted.json()
      if(resp?.response?.deletedCount > 0){
         loadData();
       }
      }

    useEffect(()=>{
        loadData()
    },[session])
    return (
      <div className='container mx-auto'>
        <div className="h-72">
        <div className="relative h-12 ">
          <Image 
              className="absolute rounded-xl h-72 w-full left-0 top-0 object-cover"
              src={'/assets/images/about_us/parts.jpg'}
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

      <div className="overflow-x-auto mx-24">
        <table className="table table-zebra font-bold text-xl">
            {/* head */}
            <thead className='text-lg'>
            <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Data</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody >
            { bookings?.map(({serviceTitle, _id, date, price}, index) => (
            <tr key={_id}>
                <th>{index + 1}</th>
                <td>{serviceTitle}</td>
                <td>{price}</td>
                <td>{date}</td>
                <td>
                  <div className='flex items-center space-x-3'>
                    <Link href={`/myBookings/update/${_id}`} className='btn btn-primary'>Edit</Link>
                    <button onClick={()=>handleDelete(_id)} className='btn btn-error text-white bg-red-600'>Delete</button>
                  </div>
                </td>
            </tr>
             )) }
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default page;