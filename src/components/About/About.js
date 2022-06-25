import React from 'react';
import aboutImg from "../../assets/images/about.jpg";

const About = () => {
    return (
        <div class="hero lg:my:10">
            <div class="hero-content flex-col lg:flex-row">
                <img src={aboutImg} class="image-full lg:max-w-md rounded-lg shadow-2xl" alt='' />
                <div className='lg:px-20'>
                    <h1 class="text-4xl font-bold">Who We Are?</h1>
                    <p class="py-6">Seba Automation is a software company that works with citizen digital services. Such as Citizen Certificate, NID Verify, and Birth Registration Related Services. We want to extend all our services to the citizens up to the village level. I look forward to arranging their service.</p>
                </div>
            </div>
        </div>
    );
};

export default About;