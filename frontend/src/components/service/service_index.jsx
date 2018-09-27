import React from 'react';
import { withRouter } from 'react-router-dom';

class ServiceIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: props.searchField || "none",
            searchParameter: props.searchParameter || "none"
        }
    }

    componentDidMount() {
        this.props.getServices({field: this.state.searchField, parameter: this.state.searchParameter})
    }

    render() {
        console.log(this.props.services.length)
        if(!this.props.services)return null;
        return (
            <div>
            {this.props.services.map(service => {
                return <p>{service.title}</p>
            })}
            </div>
        )
    }
}

export default withRouter(ServiceIndex);