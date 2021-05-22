import React from 'react';

class Slogan extends React.Component {
    render() {
        return (
            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1><span>Software services tailored to your business needs.</span></h1>
                            <div className="btns">
                                <a href="#about" className="btn-menu animated fadeInUp scrollto">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Slogan;