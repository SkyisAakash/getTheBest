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
        this.rate = this.rate.bind(this);
        this.starGrid = this.starGrid.bind(this);
        this.update = this.update.bind(this);
    }

    rate(e) {
        e.preventDefault();
        let index = e.currentTarget.id;
        this.setState = {
            rating: parseInt(index)
        }
        let i = 1;
        while (i<=5){
            // debugger
            if(i<=index)document.getElementById(`${i}`).src="https://s26.postimg.cc/dl08gy5zd/yellow_Star.jpg";
            else document.getElementById(`${i}`).src = "https://s26.postimg.cc/j96j7rpqh/white_Star.png"
            i++;
        }
    }

    starGrid() {
        return(
        <div>
            {[1,2,3,4,5].map(index => {
                    return <img src="https://s26.postimg.cc/j96j7rpqh/white_Star.png" className="ratingStar" key={index} id={index} onMouseOver={(e) => this.rate(e)} />
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
        this.props.processForm(this.state)
    }

    render() {
        return (<div className="reviewBox">
                Thanks for your review
                <form>
                    {this.starGrid()}
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