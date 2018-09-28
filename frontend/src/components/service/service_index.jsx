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
            <h3 onClick={(e) => this.goToService(e, service)}>{service.title}</h3>
        )
    }

    goToService(e, service) {
        e.preventDefault();
        this.props.history.push(`services/${service._id}`);
    }

    render() {
        if(!this.props.services)return null;
        return (
            <div className="ServicesPage">
                <FilterContainer />
                {this.props.services.map(service => {
                    return this.serviceBlock(service)
                })}
            </div>
        )
    }
}

export default withRouter(ServiceIndex);