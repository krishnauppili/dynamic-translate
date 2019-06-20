/*
export function translateContent(outputData,fromLanguage,toLanguage){
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
                        for(let j=0 ; j < valueArray.length ; j++){
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
}

export function getTranslatedText(outputData,originalText,fromLanguage,toLanguage){
    let outputRow = outputData.find((element)=>{
        return element[fromLanguage].trim().toLowerCase() === originalText.trim().toLowerCase();
    });
    return outputRow ? outputRow[toLanguage] : undefined;
}*/
