import React from 'react';

import styles from './assets/css/style.css'

import  vendorStyles from './assets/vendor/icofont/icofont.min.css'
import './assets/css/style.css';
import boxIcons from './assets/vendor/boxicons/css/boxicons.css'
import bootstrapGrid from './assets/vendor/bootstrap/css/bootstrap-grid.css'
// import aos from './assets/vendor/aos/aos.css'  

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const hasTwitter = this.props.twitter;
    let twitterLink;
    if (hasTwitter) {
      // console.log("It has Twitter");

      twitterLink = <a href={this.props.twitter}><i className="icofont-twitter"></i></a>;
    }
    
    return (
      <div className="col-xl-6 col-lg-4 col-md-6">
        <div className="card text-center">
          <div className="member" data-aos="fade-up" data-aos-delay="100">
            <h4>{this.props.name}</h4>
            <span>{this.props.role}</span>
            <br />
            <p className={styles.cardText} >
              {this.props.description}
            </p>
            <div className="social">

              {twitterLink}
              <a href={this.props.linkedIn}><i className="icofont-linkedin"></i></a>
              <a href={this.props.gitHub}><i className="icofont-github"></i></a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;