import { take, fork, call, put, all } from 'redux-saga/effects'
import * as API from "../api/app_api";

/* App Constants */
import {CHANGE_LANGUAGE, REQUEST_FETCH_DATA, REQUEST_TRANSLATE_CONTENT} from "../definitions/app_constants";

function* translateContentFlow ({ outputData , fromLanguage , toLanguage }) {
	let response;
	try{
		response = yield call(API.translateContent,{ outputData , fromLanguage , toLanguage });
		if(response){
			yield put({ type : CHANGE_LANGUAGE , payload:{ language : toLanguage }});
		}
	}
	catch (e) {
		return {
			success:false,
			message:"Something went wrong"
		}
	}
}

function* fetchDataFlow ({ fromLanguage , toLanguage }) {
	let response;
	try {
		response =  yield call(API.fetchData,{ fromLanguage , toLanguage });
		if(response.success){
			yield fork(translateContentFlow, {
				outputData:response.data,
				fromLanguage:fromLanguage,
				toLanguage:toLanguage
			});
			return response;
		}
	}
	catch (e) {
		return {
			success:false,
			message:"Something went wrong"
		}
	}
}



/*Watcher sagas*/

function* translateContentWatcher () {
	while(true){
		const object  = yield take(REQUEST_TRANSLATE_CONTENT);
		yield fork(translateContentFlow, object.payload);
	}
}

function* dataFetchWatcher () {
	while(true){
		const object  = yield take(REQUEST_FETCH_DATA);
		yield fork(fetchDataFlow, object.payload);
	}
}

/* Combine watchers*/

export default function* AuthSaga() {
	yield  all([
		translateContentWatcher(),
		dataFetchWatcher(),
	]);
}
