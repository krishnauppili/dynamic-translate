import {CreateReducer} from '../../lib/create_reducer';
import {CHANGE_LANGUAGE} from "../definitions/app_constants";

const initState = {
	languagesAvailable: [],
	dataStore: [],
	currentLanguage:"English",
};

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