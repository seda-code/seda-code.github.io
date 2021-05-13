import React from 'react';

class Slogan extends React.Component {
    render() {
        return (
            <section id="hero" class="d-flex align-items-center">
                <div class="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay="100">
                    <div class="row">
                        <div class="col-lg-8">
                            <h1><span>Software services tailored to your business needs.</span></h1>
                            <div class="btns">
                                <a href="#about" class="btn-menu animated fadeInUp scrollto">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Slogan;