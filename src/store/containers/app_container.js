import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {translateContentAction,fetchDataAction} from "../actions/app_actions";

export default function AppContainer(component) {
	return connect(mapStateToProps, mapDispatchToProps)(component);
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({translateContentAction,fetchDataAction}, dispatch);
}

function mapStateToProps(state) {
	return {
		currentLanguage: state.app.currentLanguage,
	};
}
