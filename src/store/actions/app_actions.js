import {REQUEST_FETCH_DATA, REQUEST_TRANSLATE_CONTENT} from "../definitions/app_constants";


export function translateContentAction(outputData,fromLanguage,toLanguage) {
	return {
		type:REQUEST_TRANSLATE_CONTENT,
		payload:{
			outputData,
			fromLanguage,
			toLanguage,
		}
	}
}

export function fetchDataAction(fromLanguage,toLanguage) {
	return {
		type:REQUEST_FETCH_DATA,
		payload:{
			fromLanguage,
			toLanguage,
		}
	}
}