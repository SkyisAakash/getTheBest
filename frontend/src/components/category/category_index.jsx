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

    render() {
        return (
            <h1>Work in progress...</h1>
            // <ul>
            //     {this.state.categories.length}
            //     {this.state.categories.map((category) => {
            //         return <li>{category.title}</li>
            //     })}
            // </ul>
        )
    }
}

export default withRouter(CategoryIndex);