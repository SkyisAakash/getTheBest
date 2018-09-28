import React from 'react';
import { withRouter } from 'react-router-dom';
class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:props.categories
        }
    }

    componentDidMount() {
        this.props.getCategories()
            .then(() => {
                this.setState({
                    categories: this.props.categories
                })
            })
    }

    goToCategory(e) {
        e.preventDefault();
        this.props.getCategoryFilter(e.currentTarget.dataset.category)
        .then(() => this.props.history.push(`/services`))
    }

    categoryBox(category) {
        return (
            <div className="categoryIndexItem" data-category={category.title} onClick={(e) => this.goToCategory(e)}>
            <img src={category.image} className="categoryImage"/>
            <li className="categoryTitle" key={category._id}>{category.title}</li>
            </div>
           
        )
    }
    
    render() {
        return (
            <div className="categories">
            <h1>Work in Progress</h1>
            <ul className="categoryIndex">
                {this.state.categories.map((category) => {
                    return this.categoryBox(category)
                })}
            </ul>
            </div>
        )
    }
}

export default withRouter(CategoryIndex);