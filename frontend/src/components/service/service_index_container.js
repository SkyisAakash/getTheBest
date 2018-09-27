import { connect } from 'react-redux';
import ServiceIndex from './service_index';
import { getServices } from '../../actions/service_actions';

const mapStateToProps = state => {
    return {
        services: Object.values(state.entities.services)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getServices:(request) => dispatch(getServices(request))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceIndex);