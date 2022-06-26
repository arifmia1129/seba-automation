import React from 'react';
import aboutImg from "../../assets/images/about.jpg";

const About = () => {
    return (
        <div id="about" className="hero lg:my:10" data-aos="fade-left" data-aos-duration="3000">
            <div className="hero-content flex-col lg:flex-row">
                <img src={aboutImg} className="image-full lg:max-w-md rounded-lg shadow-2xl" alt='' />
                <div className='lg:px-20'>
                    <h1 className="text-4xl font-bold">Who We Are?</h1>
                    <p className="py-6">Seba Automation is a software company that works with citizen digital services. Such as Citizen Certificate, NID Verify, and Birth Registration Related Services. We want to extend all our services to the citizens up to the village level. I look forward to arranging their service.</p>
                </div>
            </div>
        </div>
    );
};

export default About;