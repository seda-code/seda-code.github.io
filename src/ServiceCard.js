import React from 'react';
import './assets/css/style.css'

class ServiceCard extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                <div class="card">
                    <div class="card-img">
                        <img src={this.props.imageSrc} alt="..." />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><a href="">{this.props.title}</a></h5>
                        <p class="card-text">{this.props.description}</p>

                    </div>
                </div>
            </div>

        );
    }
}

export default ServiceCard;