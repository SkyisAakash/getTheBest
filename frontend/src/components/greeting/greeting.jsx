import React from 'react';
import { withRouter } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.showDropdown = false;
    }

    toggleDropdown(e) {
        e.preventDefault();
        e.stopPropagation();
        let menu = document.getElementById("userMenu");
        if(!menu)return;
        if(this.showDropdown===false) {
            this.showDropdown = true;
            menu.classList.remove("hidden");
            menu.classList.add("userMenu");
        } else {
            this.showDropdown = false;
            menu.classList.remove("userMenu");
            menu.classList.add("hidden");
        }

    }

    render() {
        window.addEventListener("click", (e)=>{
            if(this.showDropdown===true)this.toggleDropdown(e);
        })
        if (this.props.currentUser.firstname)  {
            return (
                <div className="greeting" onClick={() => { if (this.showDropdown === true) this.showDropdown = false }}>
                    <div className="auth">
                        <h2 onClick={() => this.props.history.push('/categories')} className="logo">getTheBest</h2>
                        <div className="buttons">
                            <h2 className="demouser">Hi, {this.props.currentUser.firstname}</h2>
                        <button className="login" onClick={() => this.props.openModal('RegisterBusiness')}>Register your business</button>
                        <div className="UserIcon">
                            <img className="profilePic" src={this.props.currentUser.image} onClick={(e)=>this.toggleDropdown(e)}/>
                            <div id="userMenu" className="hidden">
                                    <div className="triangle"></div>
                                    <button className="userOptions" onClick={() => this.props.history.push('/myaccount')}>Manage your Account</button>
                                    <button className="userOptions" onClick={() => this.props.logout()}>Log out</button>            
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )
    } else {
            return (
                <div className="auth">
                    <h2 className="logo">getTheBest</h2>
                    <div className="buttons">
                        <button className="login" onClick={() => this.props.openModal('login')}>Login</button>
                        <button className="login" onClick={() => this.props.openModal('signup')}>Signup</button>
                    </div>
                </div>
            )
        }
    }
}
export default withRouter(Greeting);