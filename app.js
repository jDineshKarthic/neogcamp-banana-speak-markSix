var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// console.log(outputDiv);

var serverUrl =	"	https://api.funtranslations.com/translate/minion.json";
function constructUrl(input){
    return serverUrl+"?"+"text="+input;
}
function clickEventHandler(){

    var input = txtInput.value;
    fetch(constructUrl(input))
    .then(response => response.json())
    .then(json => {
                var translatedtext = json.contents.translated;
                outputDiv.innerText = translatedtext;
    })

};

btnTranslate.addEventListener("click", clickEventHandler);