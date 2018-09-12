import React from 'react';
import {withRouter} from 'react-router-dom';

class ServiceShow extends React.Component {

    componentDidMount() {
        this.props.fetchService()
    }

    update(e) {
        e.preventDefault();
        this.props.history.push(`/services/${this.props.service._id}/update`);
    }

    render() {
        console.log(this.props);
        if (!this.props.service)return null ;
        return (<div>
            {this.props.service.title}
            {this.props.service.category}
            <button onClick={(e) => this.update(e)}>Update</button>
            </div>)
    }
}


export default withRouter(ServiceShow);