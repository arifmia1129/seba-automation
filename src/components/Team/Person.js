import React from 'react';

const Person = ({ person }) => {
    const { name, designation, img } = person;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='h-64 w-full' /></figure>
            <div class="card-body px-5 py-10">
                <h2 class="card-title">{name}</h2>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default Person;