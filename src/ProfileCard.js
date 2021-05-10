import React from 'react';
import styles from './assets/css/style.css'
import  vendorStyles from './assets/vendor/icofont/icofont.min.css'


class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const hasTwitter = this.props.twitter;
    let twitterLink;
    if (hasTwitter) {
      // console.log("It has Twitter");

      twitterLink = <a href={this.props.twitter}><i class="icofont-twitter"></i></a>;
    }
    
    return (
      <div class="col-xl-6 col-lg-4 col-md-6">
        <div class="card text-center">
          <div class="member" data-aos="fade-up" data-aos-delay="100">
            <h4>{this.props.name}</h4>
            <span>{this.props.role}</span>
            <br />
            <p className={styles.cardText} >
              {this.props.description}
            </p>
            <div class="social">

              {twitterLink}
              <a href={this.props.linkedIn}><i class="icofont-linkedin"></i></a>
              <a href={this.props.gitHub}><i class="icofont-github"></i></a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;