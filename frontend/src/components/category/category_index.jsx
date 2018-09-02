import React from 'react';
import { withRouter } from 'react-router-dom';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
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
            <h1>Coming soon...</h1>
        )
    }
}

export default withRouter(CategoryIndex);