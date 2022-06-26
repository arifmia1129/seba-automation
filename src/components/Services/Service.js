import React from 'react';

const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl border">
            <img src={img} alt="" className='h-52' />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;