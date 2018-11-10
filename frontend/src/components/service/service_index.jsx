import React from 'react';
import { withRouter } from 'react-router-dom';
import FilterContainer from '../filter/filter_container';

class ServiceIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: props.searchField || "none",
            searchParameter: props.searchParameter || "none"
        }
        this.serviceBlock = this.serviceBlock.bind(this)
    }

    componentDidMount() {
        this.props.getServices({field: this.state.searchField, parameter: this.state.searchParameter})
    }

    serviceBlock(service) {
        return (
            <div onClick={(e) => this.goToService(e, service)} className="serviceIndexItem">
                <img className="serviceImage" src={service.image} />
                <h3 className="serviceTitle">{service.title}</h3>
            </div>
        )
    }

    goToService(e, service) {
        e.preventDefault();
        if(!this.props.isBusiness)this.props.history.push(`services/${service._id}`);
        else this.props.history.push(`businesses/${service._id}`);
    }

    render() {
        if(!this.props.services)return null;
        if(!this.props.userServices) {
            return (
                <div className="ServicesPage">
                    <FilterContainer />
                    <div className="ServiceIndex">
                        {this.props.services.map(service => {
                            return this.serviceBlock(service)
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="ServicesPage">
                    <div className="ServiceIndex">
                        {this.props.userServices.map(service => {
                            return this.serviceBlock(service)
                        })}
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(ServiceIndex);