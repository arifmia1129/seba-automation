import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm("service_lcg6ilv", "template_z1ow53d", e.target, "ZkJVDVzm-1v4iM6d8").then(res => {
            if (res.text === "OK") {
                toast.success("Your information received!");
                e.target.reset();
            }
        });
    }
    return (
        <div id="contact" data-aos="fade-right" data-aos-duration="3000" className='my-10'>
            <h3 className='text-3xl text-center font-bold'>Contact Us</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-5'>
                <div className="card bg-base-100 shadow-xl lg:p-5 border">
                    <div className='flex items-center my-3'>
                        <MdLocationOn className='text-primary text-2xl mx-5' />
                        <div>
                            <p className='text-2xl font-bold'>Location</p>
                            <p>Rajabari Bazar, Union Parishad Road, Sreepur, Gazipur-1742</p>
                        </div>
                    </div>
                    <div className='flex items-center my-3'>
                        <MdEmail className='text-primary text-2xl mx-5' />
                        <div>
                            <p className='text-2xl font-bold'>Email</p>
                            <p>sebaautomation@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center my-3'>
                        <BsFillTelephoneFill className='text-primary text-2xl mx-5' />
                        <div>
                            <p className='text-2xl font-bold'>Phone</p>
                            <p>+8801707482324</p>
                        </div>
                    </div>
                    <div className="mapouter mx-auto my-5">
                        <div className="gmap_canvas">
                            <iframe title='..' className='w-[250px] md:w-[500px] h-[300px]' id="gmap_canvas" src="https://maps.google.com/maps?q=seba%20automation&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center lg:card lg:shadow-xl lg:border'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your full name" className="input input-bordered w-72 md:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='user_email' placeholder="Enter your valid email" className="input input-bordered w-72 md:w-96" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea name="msg" className="textarea textarea-bordered h-24 w-72  md:w-96" placeholder="Enter your message" required></textarea>
                        </div>
                        <div className='flex justify-center items-center'>
                            <input className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase border-0 mt-5 mx-auto w-72 md:w-96" type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;