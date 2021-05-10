import React from 'react';
import './assets/css/style.css';
import styles from './assets/css/style.css'
import ProfileCard from './ProfileCard';
import ServiceCard from './ServiceCard';
import ContactCard from './ContactCard';

import rpaImage from './assets/img/rpa-11.jpg'; // relative path to image 

import analyticsImage from './assets/img/services-analytics.jpg';

import servicesImage from './assets/img/services-ag.jpeg';

class Main extends React.Component {
    render() {
        return (

            <main id="main">

                <section id="clients" class="clients section-bg">
                    <div class="container">
                        <div class="row no-gutters clients-wrap clearfix wow fadeInUp"></div>
                    </div>
                </section>

                <section id="about" class="about section-bg">
                    <div class="container">

                        <div class="row">
                            <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
                            <div class="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                                <div class="content d-flex flex-column justify-content-center">
                                    <h3 data-aos="fade-in" data-aos-delay="100">We offer tailored software services</h3>
                                    <p data-aos="fade-in"><br />
                  We offer software services tailored to clients needs and optimize their business leveraging automation and analytics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                imageSrc={servicesImage}/>
                        </div>

                    </div>
                </section>


                <section id="team" class="team section-bg">
                    <div class="container">

                                <div class="section-title">
                                    <h2 data-aos="fade-in">Team</h2>
                                    <p data-aos="fade-in">We are an experienced team of software engineers who has been involved in several projects as varied as healthcare, fintech, insurtech, and automation among others.</p>
                                </div>

                                <ProfileCard name="Sebastián Inones"
                                    role="Co-Founder"
                                    description="Software Developer Engineer specialized in .NET Core and Azure.
                                        Also, doing RPA mostly with Selenium."
                                    twitter="https://twitter.com/InonesSebastian"
                                    linkedIn="https://www.linkedin.com/in/sebastianinones/"
                                    gitHub="https://github.com/sebainones"
                                />

                                <ProfileCard name="Daniel Valcarce"
                                    role="Co-Founder"
                                    description="An experienced software developer who has focused in recent years on the field of Artificial Intelligence."
                                    twitter="https://twitter.com/davamix"
                                    linkedIn="https://www.linkedin.com/in/danielvalcarce/"
                                    gitHub="https://github.com/davamix" />

                                <ProfileCard name="Ariel Grillo"
                                    role="Full stack Developer"
                                    description="Full stack developer with experience in .Net technologies."
                                    linkedIn="https://www.linkedin.com/in/arielgrillo/"
                                    gitHub="https://github.com/arielgrillo"
                                />

                            </div>
                </section>

                        <section id="contact" class="contact section-bg">
                            <div class="container">

                                <div class="section-title">
                                    <h2 data-aos="fade-in">Contact</h2>
                                </div>

                                <div class="row">

                                    <div class="col-lg-12">

                                        <div class="row">

                                            <ContactCard iconClass="bx bx-envelope"
                                                title="Email Us"
                                                url="sedacode.info@gmail.com"
                                                urlTilte="sedacode.info@gmail.com" />

                                            <ContactCard
                                                iconClass="bx bxl-linkedin-square"
                                                title="Contact us"
                                                url="https://www.linkedin.com/company/seda-code"
                                                urlTilte="Seda Code"
                                            />

                                            <div class="col-md-3">
                                                <div class="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                                                    <i class="bx bxl-twitter"></i>
                                                    <h3>Follow us</h3>
                                                    <p><a href="https://twitter.com/seda_code">@seda_code</a></p>
                                                </div>
                                            </div>



                                            <div class="col-md-3">
                                                <div class="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                                                    <i class="bx bx-current-location"></i>
                                                    <h3>Visit us</h3>
                                                    <p><a href="https://g.page/oxygen-coworking?share">Oxygen</a> Calle de la Princesa,31, Madrid</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>



            </main>);
    }
}

export default Main;