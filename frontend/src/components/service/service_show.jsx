import React from 'react';
import {withRouter} from 'react-router-dom';

class ServiceShow extends React.Component {

    componentDidMount() {
        this.props.fetchService()
    }

    render() {
        console.log(this.props);
        if (!this.props.service)return null ;
        return (<div>
            {this.props.service.title}
            </div>)
    }
}


export default withRouter(ServiceShow);