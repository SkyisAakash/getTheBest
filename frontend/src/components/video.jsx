import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';
class Video extends React.Component {
    componentDidMount() {
        document.getElementById('vid').play();
    }

    render() {
        return (
            <div className="videobox">
                <video id="vid" className="video" autoPlay loop muted>
                    <source src="https://drive.google.com/uc?export=download&id=1Rfz5_9iiumaRwmxFCxXV6yIv9fo0ufGL" type="video/mp4" />
                </video>
                <div className="videoText">
                    {/* <p className="videotextheader"></p> */}
                    <p className="videotextdata">Join us in the initiative of supporting small local businesses</p>
                    <button className="videosignup" onClick={() => this.props.openModal()} >SignUp</button>
                </div>
                <div className="siteinfobox">
                    <p className="siteinfo">In this era of digitization, local businesses are taking a bad hit from supermarkets and eCommerce.</p>
                    <p className="siteinfo">Small local businesses have kept our communities lucrative and sustainable for decades.</p>
                    <p className="siteinfo">In order to make sure they survive in compition, we have made GetTheBest to provide them online platform to showcase their services.</p>
                    <p className="siteinfo">So worries no more folks, getTheBest is here to help!</p>
                </div>
            </div>
        )
    }
}
const msp = () => ({});
const mdp = dispatch => {
    return {
        openModal: () => dispatch(openModal('signup'))
    }
}
export default connect(msp, mdp)(Video);
