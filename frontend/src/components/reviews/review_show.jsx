import React from 'react';
import { connect } from 'react-redux';

class Review extends React.Component {

    constructor(props) {
        super(props)
        this.stars = [];
    }
    render() {
        for (let i = 0; i < this.props.review.rating; i++) {
            this.stars.push(i + 1)
        }
            return(
            <div className="reviewShow">
                <div className="stars">
                    {this.stars.map(star => {
                            return <img src="https://i.postimg.cc/DZCpCFm0/shadow_Star.jpg" className="shadowStar" />
                    })}
                </div>
                <p className="reviewDetails">{this.props.review.reviewDetails}</p>
                <p className="reviewer">- by {this.props.review.reviewer}</p>
            </div>
        )
    }
}

const msp = () => {}
const mdp = () => {}
export default connect(msp, mdp)(Review);