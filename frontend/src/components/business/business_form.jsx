import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title:"",
            address:"",
            businessHoursStart:"",
            businessHoursEnd:"",
            owner:this.props.owner.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        this.props.removeErrors()
    }

    handleSubmit() {
        this.props.processForm(this.state)
            .then((payload) => {
                console.log(payload.business)
                if(this.props.errors.length === 0) {
                    this.props.closeModal()
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
                    <p className="businesstime">Enter opening time of your business</p>
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
                        className="inputField" />
                    <button className="loginButton" onClick={() =>this.handleSubmit()}>{this.props.formType}</button>
                    <button className="loginButton" onClick={() => this.props.closeModal()}>cancel</button>
            </form>
        </div>
        )
    }
}

export default withRouter(BusinessForm);
