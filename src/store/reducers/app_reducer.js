import {CreateReducer} from '../../lib/create_reducer';
import {CHANGE_LANGUAGE} from "../definitions/app_constants";

/* Initial state */
const initState = {
	currentLanguage:"English",
};

/* Reducers to mutate the app's state */

const appReducer = CreateReducer(initState, {
	[CHANGE_LANGUAGE](state, action) {
		if (action.payload) {
			return {
				...state,
				currentLanguage: action.payload.language,
			};
		}
	},
});

export default appReducer;