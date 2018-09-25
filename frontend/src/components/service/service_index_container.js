import { connect } from 'react-redux';
import { ServiceIndex } from './service_index';

const mapStateToProps = state => {
    return {
        services: state.entities.services
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getServices:(request) => dispatch(getServices(request))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceIndex);