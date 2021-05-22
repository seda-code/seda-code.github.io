import React from 'react';
import './assets/css/style.css';
import styles from './assets/css/style.css'
import boxIcons from './assets/vendor/boxicons/css/boxicons.css'
import bootstrapGrid from './assets/vendor/bootstrap/css/bootstrap-grid.css'

import ServicesSection from './ServicesSection';
import TeamSection from './TeamSection';
import ContactSecion from './ContactSection';
import AboutSection from './AboutSection';

class Main extends React.Component {
    render() {
        return (
            <main id="main">

                <section id="clients" className="clients section-bg">
                    <div className="container">
                        <div className="row no-gutters clients-wrap clearfix wow fadeInUp"></div>
                    </div>
                </section>

                <AboutSection />

                <ServicesSection />

                <TeamSection />

                <ContactSecion />

            </main>);
    }
}

export default Main;