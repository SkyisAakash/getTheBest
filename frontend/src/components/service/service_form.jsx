import React from 'react';
import {withRouter} from 'react-router-dom';

class ServiceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.service.title || "",
            description: props.service.description || "",
            price: props.service.price || "",
            address: props.service.address || "",
            category: props.service.category || "",
            business: props.business
        }
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    componentDidMount() {
        this.props.createService(this.state)
    }

    processForm() {
        this.props.processForm(this.state)
    }

    render() {
        return(
            <div>
                <form className="loginform">
                <h2 className="sessionformtitle">Register New Service</h2>
                <input type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="Enter a title for this service"
                    className="inputField"
                    />
                <input type="text"
                    value={this.state.description}
                    onChange={this.update('description')}
                    placeholder="Enter description for this service"
                    className="inputField"
                />
                <input type="text"
                    value={this.state.price}
                    onChange={this.update('price')}
                    placeholder="Enter a price for this service"
                    className="inputField"
                />
                <input type="text"
                    value={this.state.address}
                    onChange={this.update('address')}
                    placeholder="Enter a address for this service"
                    className="inputField"
                />
                <input type="text"
                    value={this.state.category}
                    onChange={this.update('category')}
                    placeholder="Enter a category for this service"
                    className="inputField"
                />
                <button onClick={this.processForm()} className="loginbutton"></button>
                </form>
            </div>
        )
    }
}

export default withRouter(ServiceForm);