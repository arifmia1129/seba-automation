import React from 'react';
import bannerImg from "../../assets/images/header-banner.jpg";

const HeaderBanner = () => {
    return (
        <div class="hero lg:my-10" data-aos="fade-right" data-aos-duration="3000">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} class="lg:max-w-md rounded-lg shadow-2xl image-full" alt='' />
                <div className='lg:pr-32' >
                    <h1 class="text-4xl font-bold" >We are working to bring digital services to the doorsteps of the people.</h1>
                    <p class="py-6">Through various digital centers in Bangladesh and in collaboration with entrepreneurs, I am trying to bring digital services to the citizens up to the village level.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;