import React from 'react';
class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategoris();
    }

    render() {
        return (
            <p> this is categories </p>
        )
    }
}

export default CategoryIndex;