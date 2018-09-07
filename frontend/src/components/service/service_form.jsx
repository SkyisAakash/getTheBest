import React from 'react';
import {withRouter} from 'react-router-dom';

class ServiceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.service.title || "",
            description: props.service.description || "",
            price: props.service.price || "",
            address: props.service.address || "",
            category: props.service.category || "",
            business: props.business
        }
    }

    componentDidMount() {
        this.props.createService(this.state)
    }

    render() {
        return(
            <div>
                This is services form
            </div>
        )
    }
}

export default withRouter(ServiceForm);