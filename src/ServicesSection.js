import React from 'react';
import ServiceCard from './ServiceCard';

import rpaImage from './assets/img/rpa-11.jpg'; // relative path to image 
import analyticsImage from './assets/img/services-analytics.jpg';
import servicesImage from './assets/img/services-ag.jpeg';

class ServicesSection extends React.Component {
    render() {
        return (

            <section id="services" class="services section-bg">

                <div class="container">

                    <div class="section-title">
                        <h2 data-aos="fade-in">Services</h2>
                        <p data-aos="fade-in">A software services company which continuously improves client's business leveraged and driven by technology. We offer software services tailored to clients needs and optimize their business leveraging automation and analytics.</p>
                    </div>

                    <div class="row">

                        <ServiceCard title="RPA (Robotic Process Automation) Services."
                            description="We have a very extensive experience in automation & integration services for companies."
                            imageSrc={rpaImage} />

                        <ServiceCard title="Machine Learning & Analytics Services"
                            description="We provide services creating predective and analytics models."
                            imageSrc={analyticsImage} />


                        <ServiceCard title="Backend and frontend development"
                            description="Our strong is based on a strategic relationships in order to grow you business."
                            imageSrc={servicesImage} />
                    </div>

                </div>
            </section>


        );
    }
}

export default ServicesSection;