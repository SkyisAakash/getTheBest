import React from 'react';
import { withRouter } from 'react-router-dom';

class Filter extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCats()
    }

    categoryFilter() {
        return(
            <ul className="categoryFilter">
                <h2 className="filterTitle">Select Category</h2>
                {this.props.categories.map(category => {
                    if(this.props.catFilters.includes(category.title)) {
                        return <label className="container" key={category._id}><input type="checkbox" data-category={category.title} onClick={(e) => this.toggleCategory(e)} checked/><span className="checkmark"></span><p className="categoryCheckbox">{category.title}</p></label>
                    } else {
                        return <label className="container" key={category._id}><input type="checkbox" data-category={category.title} onClick={(e) => this.toggleCategory(e)}/><span className="checkmark"></span><p className="categoryCheckbox">{category.title}</p></label>
                    }
                })}
            </ul>
        )
    }

    toggleCategory(e) {
        let category = e.currentTarget.dataset.category
        if (this.props.catFilters.includes(category))
        this.props.remCatFilter(category);
        else this.props.getCatFilter(category);
    }

    render() {
        return (
            <div className="filters">
                {this.categoryFilter()}
            </div>
        )
    }
}

export default withRouter(Filter);