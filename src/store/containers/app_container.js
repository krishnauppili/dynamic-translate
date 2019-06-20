import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {translateContentAction,fetchDataAction} from "../actions/app_actions";

/* Establishing the connection to the component with properties and actions */

export default function AppContainer(component) {
	return connect(mapStateToProps, mapDispatchToProps)(component);
}

/* Actions needed for the container */

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ translateContentAction , fetchDataAction }, dispatch);
}

/* Properties needed for the container */

function mapStateToProps(state) {
	return {
		currentLanguage: state.app.currentLanguage,
	};
}
