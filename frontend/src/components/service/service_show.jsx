import React from 'react';
import {withRouter} from 'react-router-dom';
import ReviewFormContainer from '../reviews/new_review_container';
class ServiceShow extends React.Component {

    constructor(props) {
        super(props)
        if(this.props.service)this.business = this.props.service.business;
    }

    componentDidMount() {
        this.props.fetchService()
            .then(() => this.business = this.props.service.business)
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
            <button onClick={(e) => this.writeReview(e)}>Write a Review</button>
            <ReviewFormContainer business={this.business}/>
            </div>)
    }
}


export default withRouter(ServiceShow);