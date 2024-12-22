import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full text-white h-[90vh]">
        {
            banners.map((banner, index)=>(
                <div
                style={{
                    backgroundImage:`linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)),url(/assets/images/banner/${index+1}.jpg)`
                }}
                 key={index} id={`slide${index+1}`} className="carousel-item relative bg-no-repeat rounded-xl bg-top w-full ">
           <div className='h-full w-full flex items-center container pl-36'>
              <div>
                <h1 className='text-3xl font-bold'>{banner.title}</h1>
                <p>{banner.description}</p>
                <div className='flex gap-5 mt-2'>
                    <button className='btn btn-primary'>Discover More</button>
                    <button className='btn btn-primary btn-outline'>Latest Project</button>
                </div>
              </div>
           </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={banner.next} className="btn btn-circle">p❯</a>
            <a href={banner.prev} className="btn btn-circle">n❮</a>
            </div>
        </div>
            ))
        }
      </div>
    );
};

const banners = [
    {
        title:'Affordable Price For Car Servicing',
        description : 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:'#slide4',
        prev:'#slide2'
    },
    {
        title:'Affordable Price For Car Servicing',
        description : 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:'#slide3',
        prev:'#slide1'
    },
    {
        title:'Affordable Price For Car Servicing',
        description : 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:'#slide4',
        prev:'#slide2'
    },
    {
        title:'Affordable Price For Car Servicing',
        description : 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:'#slide1',
        prev:'#slide3'
    }
]

export default Banner;