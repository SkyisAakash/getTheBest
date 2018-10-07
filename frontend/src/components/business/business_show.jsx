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
            .then(() => {
                this.props.history.push('/categories')
                this.props.showMsg();
            })
    }

    serviceBlock(service) {
        return (
            <div onClick={(e) => this.goToService(e, service)} id="businessService" className="serviceIndexItem">
                <img className="serviceImage" src={service.image} />
                <h3 className="serviceTitle">{service.title}</h3>
            </div>
        )
    }

    render() {
        if (!this.props.business) return null;
        return (
        <div className="businessShow">
            <div className="leftBusinessShow">
            <img src={this.props.business.image} className="businessImage"/>
            <h1>{this.props.business.title}</h1>
            <button className="businessOwnerOptions" onClick={(e) => this.openUpdateModal(e)}>Update</button>
            <button className="businessOwnerOptions" onClick={(e) => this.removeAndGoBack(e)}>Delete</button>
            <button className="businessOwnerOptions" onClick={() => this.props.history.push(`/businesses/${this.props.business._id}/services/register`)}>Create Service </button>
            </div>
            <div className="rightBusinessShow">
                <h2>Some of the services we Provide</h2>
                {this.props.services.map(service=> {
                    return this.serviceBlock(service)
                })}
            </div>
        </div>
        )
    }
}

export default withRouter(BusinessShow);
