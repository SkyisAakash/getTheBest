import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            business: {}
        }
    }

    componentDidMount() {
        this.props.getBusiness()
            .then((res) => this.setState({
                business: res.business
            })
        )
    }

    render() {
        console.log(this.state)
        return <h1>{this.state.business.title}</h1>
    }
}

export default withRouter(BusinessShow);
