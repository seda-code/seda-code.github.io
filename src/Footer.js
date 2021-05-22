import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                    <div className="footer-top">

                        <div className="container" data-aos="fade-up">

                            <div className="row  justify-content-center">
                                <div class="col-lg-6">
                                    <h3>Seda Code</h3>
                                </div>
                            </div>

                            <div className="row footer-newsletter justify-content-center">
                                <div className="col-lg-6">
                                    <form action="" method="post">
                                        <input type="email" name="email" placeholder="Enter your Email" />
                                        <input type="submit" value="Subscribe" />
                                    </form>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/company/seda-code" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>

                        </div>
                    </div>

                    <div className="container footer-bottom clearfix">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Seda Code</span></strong>. All Rights Reserved
                   </div>
                        <div className="credits">
                        </div>
                    </div>
                </footer>
            );
    }
};

export default Footer;