import React from 'react';
import './assets/css/style.css'
import  vendorStyles from './assets/vendor/icofont/icofont.min.css'

class Header extends React.Component {

    render() {
        return (
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">
                    <h1 class="logo mr-auto">
                        <a href="index.html">Seda C<span>
                            <img src='./assets/img/logo_200x200.png' width="25px" />

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

        );
    }
}

export default Header;
