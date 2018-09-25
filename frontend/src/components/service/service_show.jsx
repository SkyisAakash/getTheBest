import React from 'react';
import {withRouter} from 'react-router-dom';
import ReviewFormContainer from '../reviews/new_review_container';
import Review from '../reviews/review_show';
class ServiceShow extends React.Component {

    constructor(props) {
        super(props)
        if(this.props.service)this.business = this.props.service.business;
        this.state={showReview:false}
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

    writeReview(e) {
        e.preventDefault();
        if(this.state.showReview===true){
            this.setState({showReview:false})
        } else {
            this.setState({showReview:true})
        }
    }

    reviewShow() {
        if (this.state.showReview === true) return <ReviewFormContainer business={this.business} writeReview={(e) => this.writeReview(e)} />;
    }

    render() {
        if (!this.props.service)return null ;
        return (<div>
            {this.props.service.title}
            {this.props.service.category}
            <button onClick={(e) => this.update(e)}>Update</button>
            <button onClick={(e) => this.delete(e)}>Delete</button>
            {this.props.reviews.length}
            {this.props.reviews.map(review => {
                return <Review review={review} />
            })}
            <button onClick={(e) => this.writeReview(e)}>Write a Review</button>
            {this.reviewShow()}
            </div>)
    }
}


export default withRouter(ServiceShow);