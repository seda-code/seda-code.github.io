import React from 'react';
import ContactCard from './ContactCard';

class ContactSection extends React.Component {
    render() {
        return (
            <section id="contact" className="contact section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2 data-aos="fade-in">Contact</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-12">

                            <div className="row">

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
                                    urlTitle="Oxygen"
                                    titleText=" Calle de la Princesa,31, Madrid"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;