import React from 'react';

const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <div class="card bg-base-100 shadow-xl border">
            <img src={img} alt="" className='h-52' />
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;