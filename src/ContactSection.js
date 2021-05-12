import React from 'react';
import ContactCard from './ContactCard';



class ContactSection extends React.Component {
    render() {
        return (
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
                                    urlTitle="sedacode.info@gmail.com" />

                                <ContactCard
                                    iconClass="bx bxl-linkedin-square"
                                    title="Contact us"
                                    url="https://www.linkedin.com/company/seda-code"
                                    urlTitle="Seda Code"
                                />
                                <ContactCard
                                    iconClass="bx bxl-twitter"
                                    title="Follow us"
                                    url="https://twitter.com/seda_code"
                                    urlTitle="@seda_code"
                                />

                                <ContactCard
                                    iconClass="bx bx-current-location"
                                    title="Visit us"
                                    url="https://g.page/oxygen-coworking?share"
                                    urlTitle="Oxygen</a> Calle de la Princesa,31, Madrid</p>"
                                />

                                {/* TODO: */}
                                {/* Escapar html Tags  */}

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
        );
    }
}

export default ContactSection;