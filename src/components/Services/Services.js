import React from 'react';
import certificate from "../../assets/images/certificate.jpg";
import tax from "../../assets/images/holding.jpg";
import vgf from "../../assets/images/vgf.jpg";
import sms from "../../assets/images/sms.jpg";
import Service from './Service';

const Services = () => {
    const services = [
        { id: 1, name: "Citizen Certificate", img: certificate, description: "We provided citizen certificate with use our system (www.sonod.com.bd)." },
        { id: 2, name: "Holding Tax", img: tax, description: "Any Union Porisod or Pourosova or City Corporation manager their holding tax with using our system." },
        { id: 3, name: "VGF/Other Special Service", img: vgf, description: "Any Union Porisod or Pourosova or City Corporation will provided VGF/Other special gift card and manage whole system with using our system." },
        { id: 4, name: "SMS Service", img: sms, description: "Any Union Porisod or Pourosova or City Corporation or Digital Center Entrepreneur will send blank sms to citizen with using our system." }
    ]
    return (
        <div className='my-10'>
            <h3 className='text-3xl text-center font-bold'>Services</h3>
            <p className='text-center mb-5'>We provide a variety of services through our system. We are constantly adding more and more services to our system. Some of our services:</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;