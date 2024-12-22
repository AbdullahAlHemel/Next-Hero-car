import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard = ({service}) => {
    const {title, img, _id} = service || {};
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure>
                <Image height={120} width={450} src={img} alt={title}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <Link href={`/services/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;