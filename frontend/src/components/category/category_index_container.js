import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { getCategories } from '../../actions/category_actions';
const msp = null;

const mdp = dispatch => {
    return {
        getCategories: () => dispatch(getCategories)
    }
}

export default connect(msp, mdp)(CategoryIndex);