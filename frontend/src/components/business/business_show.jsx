import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessShow extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         business: {}
    //     }
    // }

    componentDidMount() {
        this.props.getBusiness()
        //     .then((res) => this.setState({
        //         business: res.business
        //     })
        // )
    }



    openUpdateModal(e) {
        e.preventDefault();
        this.props.saveBusinessId()
        this.props.openModal('UpdateBusiness')
    }

    removeAndGoBack(e) {
        e.preventDefault();
        this.props.deleteBusiness()
            .then(() => this.props.history.push('/categories'))
    }

    render() {
        if (!this.props.business) return null;
        return (
        <div>
            <h1>{this.props.business.title}</h1>
            <button onClick={(e) => this.openUpdateModal(e)}>Update</button>
            <button onClick={(e) => this.removeAndGoBack(e)}>Delete</button>
            <button onClick={() => this.props.history.push(`/businesses/${this.props.business._id}/services/register`)}>Create Service </button>
        </div>
        )
    }
}

export default withRouter(BusinessShow);
