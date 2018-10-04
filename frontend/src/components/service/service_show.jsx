import React from 'react';
import {withRouter} from 'react-router-dom';
import ReviewFormContainer from '../reviews/new_review_container';
import Review from '../reviews/review_show';
class ServiceShow extends React.Component {

    constructor(props) {
        super(props)
        if(this.props.service)this.business = this.props.service.business;
        this.state={showReview:false}
        this.goToServices = this.goToServices.bind(this);
        this.showDeleteSection = false;
    }

    componentDidMount() {
        this.changeClassName();
        this.props.fetchService()
            .then(() => this.business = this.props.service.business)
            .then(() => this.props.getReviews())
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

    goToServices(e) {
        e.preventDefault();
        this.props.getCatFilter(this.props.service.category)
        .then(() => this.props.history.push('/services'))
    }

    reviewShow() {
        if (this.state.showReview === true) return <ReviewFormContainer business={this.business} writeReview={(e) => this.writeReview(e)} />;
    }

    toggleDeleteSection(e) {
        e.preventDefault();
        this.showDeleteSection = (this.showDeleteSection===true) ? false : true;
        this.changeClassName();
    }

    changeClassName() {
        let deleteSec = document.getElementById("delSec");
        if(!deleteSec)return;
        if(this.showDeleteSection===true) {
            deleteSec.classList.remove("hidden");
            deleteSec.classList.add("deleteSection");
        } else {
            deleteSec.classList.remove("deleteSection");
            deleteSec.classList.add("hidden");
        }
    }



    render() {
        if (!this.props.service)return null ;
        return (<div>
            <div className="serviceShowHeader">
                <img onClick={(e) => this.update(e)} src={this.props.service.image} className="serviceImageShow"/>
                <div className="titleAndOptions">
                    <h1 className="serviceShowTitle">{this.props.service.title}</h1>
                    <img src="https://i.postimg.cc/4xw2H7mh/edit_button.png" className="editButton"/>
                    <img onClick={(e)=>this.toggleDeleteSection(e)} src="https://i.postimg.cc/d1v8RvDZ/trashbutton.jpg" className="trashButton"/>
                </div>
            </div>
            <div id="delSec" className="hidden">
                <div className="rotatedDiv"></div>
                <p className="deleteConfirmation">Are you sure you want to delete this service?</p>
                <button className="confirmDelete" onClick={(e) => this.delete(e)}>Yes</button>
                <button className="confirmDelete" onClick={(e) => this.toggleDeleteSection(e)}>Cancel</button>
            </div>
            <button className="reviewButton" onClick={(e) => this.writeReview(e)}>Write a Review</button>
            {this.reviewShow()}
            <p style={{marginLeft: '4%'}}>Reviews:</p>
            {this.props.reviews.map(review => {
                return <Review review={review} />
            })}
            <p className="moreCategories" onClick={(e)=>this.goToServices(e)}>Checkout more services in {this.props.service.category} category.</p>
            </div>)
    }
}


export default withRouter(ServiceShow);