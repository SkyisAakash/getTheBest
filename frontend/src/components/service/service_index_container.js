import { connect } from 'react-redux';
import ServiceIndex from './service_index';
import { getServices } from '../../actions/service_actions';
import { ServiceFilter } from './serviceFilters';

const mapStateToProps = state => {
    return {
        services: ServiceFilter(Object.values(state.entities.services), state.filters)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getServices:(request) => dispatch(getServices(request))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceIndex);