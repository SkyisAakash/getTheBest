import React from 'react';
import { withRouter } from 'react-router-dom';
import cloudinaryOptions from '../../private/cloudinary';

class BusinessForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title:props.business.title || "",
            address:props.business.addre  || "",
            tagline: props.business.tagline || "",
            owner:this.props.owner.id,
            image: props.image || "https://i.postimg.cc/8P75B2bC/default_Business_Image.png"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
        this.processSubmit = this.processSubmit.bind(this);
    }

    componentDidMount() {
        this.props.removeErrors()
    }

    processSubmit() {
        if (this.props.formType === 'Register') return this.props.processForm(this.state);
        else return this.props.processForm(this.state, this.props.business._id);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.processSubmit()
            .then((payload) => {
                if(this.props.errors.length === 0) {
                    if (this.props.formType === 'Register' )this.props.closeModal();
                    else this.props.closeModal(payload.business);
                    this.props.history.push(`/businesses/${payload.business._id}`);
                }
            })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
        <div>
            <form className="loginform">
                <h2 className="sessionformtitle">{this.props.formType} your business</h2>
                <input type="text"
                       value={this.state.title}
                       onChange={this.update('title')}
                       placeholder="Enter title for your business"
                       className="inputField" />
                <p className="loginerrors">{this.props.errors.title}</p>
                    <input type="text"
                        value={this.state.address}
                        onChange={this.update('address')}
                        placeholder="Enter address for your business"
                        className="inputField" />
                    <p className="loginerrors">{this.props.errors.address}</p>
                    <input type="text"
                        value={this.state.tagline}
                        onChange={this.update('tagline')}
                        placeholder="Enter tagline for your business"
                        className="inputField" />
                    {/* <p className="businesstime">Enter opening time of your business</p>
                    <input type="time"
                        value={this.state.businessHoursStart}
                        onChange={this.update('businessHoursStart')}
                        placeholder="Enter opening time of your business"
                        className="inputField" />
                    <p className="businesstime">Enter closing time of your business</p>
                    <input type="time"
                        value={this.state.businessHoursEnd}
                        onChange={this.update('businessHoursEnd')}
                        placeholder="Enter closing time of your business"
                        className="inputField" /> */}
                    <button className="loginButton" onClick={(e) =>this.handleSubmit(e)}>{this.props.formType}</button>
                    <button className="loginButton" onClick={() => this.props.closeModal()}>cancel</button>
            </form>
        </div>
        )
    }
}

export default withRouter(BusinessForm);
