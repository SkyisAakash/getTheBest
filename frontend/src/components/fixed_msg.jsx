import React from 'react';
import { removeFixedMsg } from '../actions/msg_actions';
import { connect } from 'react-redux';

const msp = state => {
    return {
        message: state.ui.fixMsg
    }
}

const mdp = dispatch => {
    return {
        removeSelf: () => dispatch(removeFixedMsg())
    }
}

class fixedMsg extends React.Component{
    
    render() {
        setTimeout(() => {
            let msgBox = document.getElementsByClassName("fixedMessage")[0]
            if(!msgBox)return;
            msgBox.classList.remove("fixedMessage")
            msgBox.classList.add("hideMsg")
        }, 1000)
        setTimeout(() => {
            this.props.removeSelf()
        }, 3000)
        if(!this.props.message)return null;
        return (
                <div className="fixedMessage">
                    {this.props.message}
                </div>
        )
    }
}

export default connect(msp, mdp)(fixedMsg)