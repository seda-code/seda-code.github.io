import React from 'react';
import './assets/css/style.css';
import Main from './Main';


class App extends React.Component {
    render() {
        return (

            <div>
                <header id="header" class="fixed-top">
                    <div class="container d-flex align-items-center">
                        <h1 class="logo mr-auto">
                            <a href="index.html">Seda C<span>
                                <img src="./../assets/img/logo_200x200.png" width="25px" />
                            </span>de</a>
                        </h1>
                        <nav class="nav-menu d-none d-lg-block">
                            <ul>
                                <li class="active"><a href="index.html">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Services</a></li>

                                <li><a href="#team">Team</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                                <li class="get-started text-center"><a href="#about">Get Started</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

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