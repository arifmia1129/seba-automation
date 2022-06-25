import React from 'react';
import aboutImg from "../../assets/images/about.jpg";

const About = () => {
    return (
        <div class="hero lg:mt-32 lg:mb:10">
            <div class="hero-content flex-col lg:flex-row">
                <img src={aboutImg} class="max-w-md rounded-lg shadow-2xl" alt='' />
                <div className='px-10'>
                    <h1 class="text-5xl font-bold">Who We Are?</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;