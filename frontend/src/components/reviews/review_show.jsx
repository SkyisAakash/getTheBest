import React from 'react';
import { connect } from 'react-redux';

class Review extends React.Component {
    render() {
            return(
                <div>
                <p>review</p>
                {this.props.review.rating}
                {this.props.review.reviewDetails}
            </div>
        )
    }
}

const msp = () => {}
const mdp = () => {}
export default connect(msp, mdp)(Review);