import React from 'react';
import './assets/css/style.css';
import Main from './Main';
import Header from './Header'

import styles from './assets/css/style.css'
import  vendorStyles from './assets/vendor/icofont/icofont.min.css'


class App extends React.Component {
    render() {
        return (

            <div>
                <Header />

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

                <Main></Main>

                <footer id="footer">

                    <div class="footer-top">

                        <div class="container" data-aos="fade-up">

                            <div class="row  justify-content-center">
                                <div class="col-lg-6">
                                    <h3>Seda Code</h3>
                                </div>
                            </div>

                            <div class="row footer-newsletter justify-content-center">
                                <div class="col-lg-6">
                                    <form action="" method="post">
                                        <input type="email" name="email" placeholder="Enter your Email" />
                                        <input type="submit" value="Subscribe" />
                                    </form>
                                </div>
                            </div>

                            <div class="social-links">
                                <a href="https://www.linkedin.com/company/seda-code" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                            </div>

                        </div>
                    </div>

                    <div class="container footer-bottom clearfix">
                        <div class="copyright">
                            &copy; Copyright <strong><span>Seda Code</span></strong>. All Rights Reserved
                   </div>
                        <div class="credits">
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
};

export default App;