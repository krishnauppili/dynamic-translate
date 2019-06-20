import {combineReducers} from 'redux';
import appReducer from "./app_reducer";
const RootReducer = combineReducers({
	app: appReducer,
});
export default RootReducer;