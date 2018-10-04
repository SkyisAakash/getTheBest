import React from 'react';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            business: props.business,
            reviewer: props.reviewer,
            service: props.match.params.serviceId,
            rating: props.review.rating || '', 
            details: props.review.reviewDetails || ''
        }
        this.tempRating=0;
        this.rate = this.rate.bind(this);
        this.starGrid = this.starGrid.bind(this);
        this.update = this.update.bind(this);
        this.saveRating = this.saveRating.bind(this);
        this.removeStars = this.removeStars.bind(this);
        this.ratingSaved = false;
        this.submitReview = this.submitReview.bind(this);
    }

    rate(e) {
        e.preventDefault();
        e.stopPropagation();
        let index = e.currentTarget.id;
        this.tempRating = parseInt(index)
        if (this.ratingSaved === true) return;
        this.changeStars(index);
    }

    changeStars(index) {
        let i = 1;
        while (i <= 5) {
            if (i <= index) document.getElementById(`${i}`).src = "https://s26.postimg.cc/dl08gy5zd/yellow_Star.jpg";
            else document.getElementById(`${i}`).src = "https://s26.postimg.cc/j96j7rpqh/white_Star.png"
            i++;
        }
    }

    removeStars(e) {
        e.preventDefault();
        e.stopPropagation();
        if(this.ratingSaved===true) return;
        let i = 1;
        while (i <= 5) {
            document.getElementById(`${i}`).src = "https://s26.postimg.cc/j96j7rpqh/white_Star.png"
            i++;
        }
    }

    saveRating(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ratingSaved=true;
        this.setState({
            rating: this.tempRating
        })
        this.changeStars(this.tempRating);
    }

    componentDidMount() {
        this.props.removeErrors();
    }

    starGrid() {
        return(
        <div>
            {[1,2,3,4,5].map(index => {
                    return <img src="https://s26.postimg.cc/j96j7rpqh/white_Star.png" 
                                className="ratingStar" 
                                key={index} 
                                id={index} 
                                onClick={(e)=>this.saveRating(e)} 
                                onMouseOver={(e) => this.rate(e)} 
                                onMouseLeave={(e) =>this.removeStars(e)}/>
                })                
            }
        </div>
        )
    }

    update(field) {
        return e => this.setState({
            [field]:e.currentTarget.value
        })
    }

    submitReview(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.processForm(this.state)
        .then(() => {
            if(this.props.errors.length===0) {
                this.props.writeReview(e)
                }
            })
    }

    render() {
        return (<div className="reviewBox">
                <p className="reviewFormTitle">Thanks for your review</p>
                <form className="reviewForm">
                    {this.starGrid()}
                    <p className="reviewErrors">{this.props.errors.rating}</p>
                    <textarea 
                           className="reviewText"
                           value={this.state.reviewDetails}
                           placeholder="Enter your review here"
                           onChange={this.update('details')}/>
                    <button className="submitReviewButton" onClick={(e)=>this.submitReview(e)}>Submit</button>
                    <button className="submitReviewButton" onClick={(e)=>this.props.writeReview(e)}>Cancel</button>
                </form>
            </div>)
    }
}

export default withRouter(ReviewForm);