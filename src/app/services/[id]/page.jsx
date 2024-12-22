import { getServicesDetails } from '@/components/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'Details',
    description: 'service Details Page'
}

const page = async ({params}) => {
    const details = await getServicesDetails(params.id);
    const {title, description, img, price, facility ,_id} = details.service;
    
    return (
        <div className='w-11/12 m-auto my-10 '>
          <div className='h-72'>
            <div className='relative h-12'>
               <Image 
                className='absolute h-72 w-full left-0 top-0 object-cover'
                src={img}
                alt='service'
                width={1920}
                height={1080}
                style={{width: '90vw'}}
               />
               <div className='absolute h-full left-0 bottom-0 flex items-center justify-center'>
                    <h2 className='text-white text-center text-3xl mx-5 font-bold flex justify-center items-center'>
                        service Details
                    </h2>
               </div>
               
            </div>
           </div>

        <div className='my-6 '>
         <div className='grid grid-cols-3 gap-8'>

            <div className='col-span-2 grid grid-cols-2 gap-6'>
                {facility.map((item, index) => (
                <div
                     className='bg-rose-100 p-4 border-t-4 border-t-rose-500 rounded-xl' 
                    key={index}
                    >
                        <h2 className='text-xl font-bold'>{item?.name}</h2>
                        <p>{item?.details}</p>
                    </div>
                ))}
            </div>        

            <div className='p-6 bg-gray-100'>
                <Image className='w-full object-cover h-40' alt='image' height={1080} width={1920} src={'/assets/images/checkout/checkout.png'}/>
                <div className='flex my-4'>
                    <h2 className='text-xl font-bold'>Price:</h2>
                    <p className='text-2xl ml-2 text-rose-500'> ${price} </p>
                </div>
                <Link href={`/checkout/${_id}`}>
                    <button className='bg-rose-500 px-3 py-2 font-bold text-white rounded-lg mt-2 w-full'>checkout</button>
                </Link>
            </div>
           </div>
         </div>
        </div>
    );
};

export default page;