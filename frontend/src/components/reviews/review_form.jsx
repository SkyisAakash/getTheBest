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
            reviewDetails: props.review.reviewDetails || ''
        }
        this.tempRating=0;
        this.rate = this.rate.bind(this);
        this.starGrid = this.starGrid.bind(this);
        this.update = this.update.bind(this);
        this.saveRating = this.saveRating.bind(this);
        this.removeStars = this.removeStars.bind(this);
        this.ratingSaved = false;
    }

    rate(e) {
        e.preventDefault();
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
        if(this.ratingSaved===true) return;
        let i = 1;
        while (i <= 5) {
            document.getElementById(`${i}`).src = "https://s26.postimg.cc/j96j7rpqh/white_Star.png"
            i++;
        }
    }

    saveRating(e) {
        e.preventDefault();
        this.ratingSaved=true;
        console.log(this.tempRating)
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
        if(this.props.errors.length===0)this.props.processForm(this.state);
    }

    render() {
        return (<div className="reviewBox">
                Thanks for your review
                <form>
                    {this.starGrid()}
                    {this.props.errors.rating}
                    <textarea 
                           value={this.state.reviewDetails}
                           placeholder="Enter your review here"
                           onChange={this.update('reviewDetails')}/>
                    <button onClick={(e)=>this.submitReview(e)}>Submit</button>
                </form>
            </div>)
    }
}

export default withRouter(ReviewForm);