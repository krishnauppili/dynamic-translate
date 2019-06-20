import {all} from 'redux-saga/effects';
import AppSaga from "./app_sagas";

/* Root saga to combine all the other sagas */

export default function* RootSaga() {
	yield  all([
		AppSaga(),
	]);
}
