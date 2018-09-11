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
        this.dropDown = 'close'
        this.update = this.update.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    showDropdown(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.dropDown === 'close') {
            e.currentTarget.classList.add('active');
            this.dropDown = 'open';
        }
        else {
            e.currentTarget.classList.remove('active');
            this.dropDown = 'close';
        }
    }

    componentDidMount() {
        this.props.removeErrors();
        this.props.getCategories();
    }

    submitForm(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        .then((res) => {
            if(this.props.errors.length === 0)this.props.history.push(`/services/${res.service._id}`)
        })
    }

    selectCategory(e, cat) {
        e.preventDefault();
        e.stopPropagation();
        let span = document.getElementById("Category");
        span.innerText=`${cat}`;
        this.setState({
            category: cat
        })
        document.getElementById("dd").classList.remove('active');
    }

    render() {
        return(
            <div className="serviceFormPage">
                <form className="serviceform">
                <h2 className="serviceformtitle">Register New Service</h2>
                <input type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="Enter a title for this service"
                    className="inputField"
                    />
                <p className="loginerrors">{this.props.errors.title}</p>
                <input type="text"
                    value={this.state.description}
                    onChange={this.update('description')}
                    placeholder="Enter description for this service"
                    className="inputField"
                />
                <p className="loginerrors">{this.props.errors.description}</p>
                <input type="text"
                    value={this.state.price}
                    onChange={this.update('price')}
                    placeholder="Enter a price for this service"
                    className="inputField"
                />
                <p className="loginerrors">{this.props.errors.price}</p>
                <input type="text"
                    value={this.state.address}
                    onChange={this.update('address')}
                    placeholder="Enter an address for this service"
                    className="inputField"
                />
                <p className="loginerrors">{this.props.errors.address}</p>
                <div id="dd" onClick={(e) => this.showDropdown(e)} className="categoriesField">
                    <span id="Category">Select Category</span>
                    <ul class="dropdown">
                    {this.props.categories.map(category => {
                            return <li onClick={(e) => {this.selectCategory(e, category)}}id="catField" value={category}>{category}</li>
                    })}
                    </ul>
                </div>
                <p className="loginerrors">{this.props.errors.category}</p>
                <button onClick={(e) => this.submitForm(e)} className="loginButton">Register</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ServiceForm);