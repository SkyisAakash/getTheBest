import React from 'react';
import {withRouter} from 'react-router-dom';
import cloudinaryOptions from '../../private/cloudinary';

class ServiceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.service.title || "",
            description: props.service.description || "",
            price: props.service.price || "",
            address: props.service.address || "",
            category: props.service.category || "",
            business: props.business,
            image: props.image || "https://i.postimg.cc/J4MsC0K5/image-not-found.jpg"
        }
        this.dropDown = 'close'
        this.update = this.update.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.showCategory = this.showCategory.bind(this);
        this.upload = this.upload.bind(this)
        this.myWidget = {}
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }
    
    componentWillReceiveProps(newProps) {
        if (this.props.formType === 'Update') {
            this.setState({
                title: newProps.service.title || "",
                description: newProps.service.description || "",
                price: newProps.service.price || "",
                address: newProps.service.address || "",
                category: newProps.service.category || "",
                business: newProps.business,
                image: newProps.service.image || ""
            })
        }
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
        this.props.getService();
        // this.showCategory();
    }

    showCategory() {
        if (this.state.category !== "") {
            let span = document.getElementById("Category");
            if (span)span.innerText = this.state.category;
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        .then((res) => {
            if(this.props.errors.length === 0)this.props.history.push(`/services/${res.service._id}`)
        })
    }

    addImage(data) {
        this.setState({
            image: data
        }, () => this.myWidget.close());
    }

    upload(e) {
        e.preventDefault();
        e.stopPropagation();
        this.myWidget = window.cloudinary.openUploadWidget(cloudinaryOptions, (error, images) => {
            if(images.event==="success") {
                this.addImage(images.info.secure_url)
            }
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
        this.showCategory();
        return(
            <div className="serviceFormPage">
                <form className="serviceform">
                <h2 className="serviceformtitle">{this.props.formType} Service</h2>
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
                    <ul className="dropdown">
                    {this.props.categories.map(category => {
                            return <li onClick={(e) => {this.selectCategory(e, category)}}id="catField" value={category}>{category}</li>
                    })}
                    </ul>
                </div>
                <p className="loginerrors">{this.props.errors.category}</p>
                <img onClick={(e) => this.upload(e)} src={this.state.image} className="sampleImage"/>
                <button onClick={(e)=>this.upload(e)} id="uploadButton" className="loginButton">Upload Image</button>
                <button onClick={(e) => this.submitForm(e)} className="loginButton">{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ServiceForm);