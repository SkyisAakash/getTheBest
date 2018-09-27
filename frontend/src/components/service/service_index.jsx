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
    }

    componentDidMount() {
        this.props.getServices({field: this.state.searchField, parameter: this.state.searchParameter})
    }

    render() {
        console.log(this.props.services.length)
        if(!this.props.services)return null;
        return (
            <div>
                <FilterContainer />
                {this.props.services.map(service => {
                    return <p>{service.title}</p>
                })}
            </div>
        )
    }
}

export default withRouter(ServiceIndex);