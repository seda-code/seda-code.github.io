import React from 'react';
import './assets/css/style.css'
import logoImage from './assets/img/logo_200x200.png';

class Header extends React.Component {

    render() {
        return (
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo mr-auto">
                        <a href="index.html">Seda C<span>
                            <img src={logoImage} width="25px" />

                        </span>de</a>
                    </h1>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>

                            <li><a href="#team">Team</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li className="get-started text-center"><a href="#about">Get Started</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            

        );
    }
}

export default Header;
