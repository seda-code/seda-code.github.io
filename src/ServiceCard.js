import React from 'react';
import './assets/css/style.css'

class ServiceCard extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                <div className="card">
                    <div className="card-img">
                        <img src={this.props.imageSrc} alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">{this.props.title}</a></h5>
                        <p className="card-text">{this.props.description}</p>

                    </div>
                </div>
            </div>

        );
    }
}

export default ServiceCard;