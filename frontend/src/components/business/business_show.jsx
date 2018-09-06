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

    openUpdateModal() {
        this.props.saveBusinessId()
        this.props.openModal('UpdateBusiness')
    }

    render() {
        return (
        <div>
            <h1>{this.state.business.title}</h1>
            <button onClick={() => this.openUpdateModal()}>Update</button>
        </div>
        )
    }
}

export default withRouter(BusinessShow);
