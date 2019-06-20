import { take, fork, delay, call, put, cancelled,all } from 'redux-saga/effects'
import * as API from "../api/app_api";

/* App Constants */
import {CHANGE_LANGUAGE, REQUEST_FETCH_DATA, REQUEST_TRANSLATE_CONTENT} from "../definitions/app_constants";

function* translateContentFlow ({outputData,fromLanguage,toLanguage}) {
	let response;
	console.log("Entered translate content flow",outputData,fromLanguage,toLanguage);
	try{
		response = yield call(API.translateContent,{outputData,fromLanguage,toLanguage});
		if(response){
			yield put({type:CHANGE_LANGUAGE,payload:{language:toLanguage}});
		}
	}
	catch (e) {
		console.log("Error in translate content flow",e);
	}
}

function* fetchDataFlow ({fromLanguage,toLanguage}) {
	let response;
	try {
		response =  yield call(API.fetchData,{fromLanguage,toLanguage});
		console.log("Response in fetch data flow",response);
		if(response.success){
			yield fork(translateContentFlow, {
				outputData:response.data,
				fromLanguage:fromLanguage,
				toLanguage:toLanguage
			});
		}
	}
	catch (error) {
		console.log("Error in fetch data",error);
	}
	return response;
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
		const response = yield fork(fetchDataFlow, object.payload);
	}
}

export default function* AuthSaga() {
	yield  all([
		translateContentWatcher(),
		dataFetchWatcher(),
	]);
}
