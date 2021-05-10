import React from 'react';
import './assets/css/style.css'
import  vendorStyles from './assets/vendor/icofont/icofont.min.css'

class ContactCard extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div class="col-md-3">
        <div class="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
          <i class={this.props.iconClass}></i>
          <h3>{this.props.title}</h3>
          <p><a href={this.props.url} >{this.props.urlTitle}</a></p>
        </div>
      </div>

    );
  }
}

export default ContactCard;
