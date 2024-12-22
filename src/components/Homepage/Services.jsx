import React from 'react';
// import { services } from '../../app/lib/Service';
import ServiceCard from '../cards/ServiceCard';
import { getServices } from '../services/getServices';

const Services = async () => {
     const {services} = await getServices()
      
    return (
        <div>           
           <h2 className='text-center font-red-500 text-2xl font-bold text-[#FF3811]'>Our services</h2>
           <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
             {
               services?.length > 0 && services.map((service) =>(
                    <ServiceCard service={service} key={service._id}/>
                ))
             }
           </div>
        </div>
    );
};

export default Services;