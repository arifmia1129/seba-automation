import React from 'react';

const Person = ({ person }) => {
    const { name, designation, img } = person;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className='h-64 w-full' /></figure>
            <div className="card-body px-5 py-10">
                <h2 className="card-title">{name}</h2>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default Person;