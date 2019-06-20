import {all} from 'redux-saga/effects';
import AppSaga from "./app_sagas";

export default function* RootSaga() {
	yield  all([
		AppSaga(),
	]);
}
