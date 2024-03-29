import Papa from "papaparse";
import * as data from "../../lib/data.csv";


/* API call to parse the CSV data and set in local storage */

export const fetchData = async() => {
	let outputData = [];
	try {
		return await new Promise((resolve)=>{
			let response = {};
			Papa.parse(data, {
				download:true,
				complete: function(results) {
					let columnNamesArray = results.data[0];
					for(let i=1;i<results.data.length;i++){
						let currentRow = {};
						for(let j = 0; j < results.data[i].length; j++){
							currentRow[columnNamesArray[j]] = results.data[i][j];
						}
						outputData.push(currentRow);
					}
					localStorage.setItem("output_data",JSON.stringify(outputData));
					response.success = true;
					response.data = outputData;
					resolve(response);
				},error: function(e){
					return {
						success:false,
						message:"Something went wrong",
					};
				}
			});
		});
	} catch (e) {
		return {
			success:false,
			message:"Something went wrong",
		}
	}
};

/* API call to translate the given data from source language to destination language */

export const translateContent = ({outputData,fromLanguage,toLanguage}) => {
	try{
		let items = document.body.getElementsByTagName("*");
		for (let i = 0, len = items.length; i < len; i++) {
			if(items[i]){
				let cNodes = items[i].childNodes;
				cNodes.forEach(function(node){
					if(node.nodeType === Node.TEXT_NODE) {
						let outputValue = node.nodeValue.trim(),flag = 0;
						let result1 = getTranslatedText(outputData,outputValue,fromLanguage,toLanguage);
						if(result1){
							node.nodeValue = result1;
							flag =  1;
						}
						if(flag === 0){
							let valueArray = outputValue.split(".");
							for(let j = 0; j < valueArray.length; j++){
								if(valueArray[j]){
									let value = valueArray[j].trim();
									let result2 = getTranslatedText(outputData,value,fromLanguage,toLanguage);
									if(result2){
										valueArray[j] = result2;
									}
								}
							}
							outputValue = valueArray.join(". ");
							if(outputValue !== ""){
								node.nodeValue = outputValue;
							}
						}
					}
				});
			}
		}
		return true;
	}
	catch (e) {
		return false;
	}
};


/* Utility to return the matching text in the destination language from data store*/

export function getTranslatedText(outputData,originalText,fromLanguage,toLanguage){
	let outputRow = outputData.find((element)=>{
		return element[fromLanguage].trim().toLowerCase() === originalText.trim().toLowerCase();
	});
	return outputRow ? outputRow[toLanguage] : undefined;
}
