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
            <ul>
                {this.props.categories.map(category => {
                    return <li><input type="checkbox" data-category={category.title} onClick={(e) => this.toggleCategory(e)}/><p>{category.title}</p></li>
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
            <div>
                <p>this is filter</p>
                {this.categoryFilter()}
            </div>
        )
    }
}

export default withRouter(Filter);