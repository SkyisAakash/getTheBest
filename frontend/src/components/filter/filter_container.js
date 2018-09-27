import { connect } from 'react-redux';
import filter from './filter';
import { getCategories } from '../../actions/category_actions';
import { getCategoryFilter, removeCategoryFilter } from '../../actions/filter_actions';

const msp = state => {
    return {
        categories: Object.values(state.entities.categories),
        catFilters: state.filters.categories
    }
}

const mdp = dispatch => {
    return {
        fetchCats: () => dispatch(getCategories()),
        getCatFilter: (category) => dispatch(getCategoryFilter(category)),
        remCatFilter: (category) => dispatch(removeCategoryFilter(category))
    }
}

export default connect(msp, mdp)(filter);