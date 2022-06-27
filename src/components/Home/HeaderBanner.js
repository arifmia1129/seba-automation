import React from 'react';
import bannerImg from "../../assets/images/header-banner.jpg";
import { HashLink as Link } from 'react-router-hash-link';

const HeaderBanner = () => {
    return (
        <div id="home" className="hero lg:my-10" data-aos="fade-left" data-aos-duration="3000">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="lg:max-w-sm w-full rounded-lg shadow-2xl" alt='' />
                <div className='lg:pr-32' >
                    <h1 className="text-4xl font-bold" >We are working to bring digital services to the doorsteps of the people.</h1>
                    <p className="py-6">Through various digital centers in Bangladesh and in collaboration with entrepreneurs, I am trying to bring digital services to the citizens up to the village level.</p>
                    <Link className="btn btn-primary" smooth to="#about">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;