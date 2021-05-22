import React from 'react';

class AboutSection extends React.Component {
    render() {
        return (

            <section id="about" className="about section-bg">
                <div className="container">

                    <div className="row">
                        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
                        <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                            <div className="content d-flex flex-column justify-content-center">
                                <h3 data-aos="fade-in" data-aos-delay="100">We offer tailored software services</h3>
                                <p data-aos="fade-in"><br />
          We offer software services tailored to clients needs and optimize their business leveraging automation and analytics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default AboutSection;