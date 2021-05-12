import React from 'react';


class Footer extends React.Component {
    render() {
        return (
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
            );
    }
};

export default Footer;