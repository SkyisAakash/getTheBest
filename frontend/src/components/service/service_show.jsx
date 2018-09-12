import React from 'react';
import {withRouter} from 'react-router-dom';

class ServiceShow extends React.Component {

    constructor(props) {
        super(props)
        this.business = this.props.service.business
    }

    componentDidMount() {
        this.props.fetchService()
    }

    update(e) {
        e.preventDefault();
        this.props.history.push(`/services/${this.props.service._id}/update`);
    }

    delete(e) {
        e.preventDefault();
        this.props.delete()
            .then(() => this.props.history.push(`/businesses/${this.business}`))
    }

    render() {
        if (!this.props.service)return null ;
        return (<div>
            {this.props.service.title}
            {this.props.service.category}
            <button onClick={(e) => this.update(e)}>Update</button>
            <button onClick={(e) => this.delete(e)}>Delete</button>
            </div>)
    }
}


export default withRouter(ServiceShow);