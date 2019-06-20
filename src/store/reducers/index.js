import {combineReducers} from 'redux';
import appReducer from "./app_reducer";

/* Root reducer which combines all the other reducers */

const RootReducer = combineReducers({
	app: appReducer,
});
export default RootReducer;