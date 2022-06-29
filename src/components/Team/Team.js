import React from 'react';
import other from "../../assets/images/other.jpg";
import arif from "../../assets/images/arif.jpeg";
import titu from "../../assets/images/titu.jpeg";
import saikat from "../../assets/images/saikat.jpeg";
import Person from './Person';

const Team = () => {
    const team = [
        { id: 2, name: "Rabiul Islam", designation: "Web Developer", img: other },
        { id: 3, name: "Md. Himel Ali", designation: "Web Developer", img: other },
        { id: 4, name: "Md. Arif Mia", designation: "React Developer", img: arif },
        { id: 5, name: "Md. Sayhan Saikat", designation: "Admin", img: saikat },
        { id: 6, name: "Syed Enayet Karim (Titu)", designation: "District Admin", img: titu },

    ]
    return (
        <div id="team" data-aos="fade-left" data-aos-duration="3000" className='my-10'>
            <h3 className='text-3xl text-center font-bold'>Team</h3>
            <p className='text-center mb-5'>We have a special team. We are working friendly.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mx-auto'>
                {
                    team.map(person => <Person
                        key={person.id}
                        person={person}
                    />)
                }
            </div>
        </div>
    );
};

export default Team;