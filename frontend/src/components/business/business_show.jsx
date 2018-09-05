import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBusiness();
    }

    render() {
        return <h1>{this.props.business.title}</h1>
    }
}

export default withRouter(BusinessShow);
