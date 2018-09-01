import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { getCategories } from '../../actions/category_actions';
const msp = (state) => {
    return {
        categories: Object.values(state.entities.categories)
    }
}

const mdp = dispatch => {
    return {
        getCategories: () => dispatch(getCategories())
    }
}

export default connect(msp, mdp)(CategoryIndex);