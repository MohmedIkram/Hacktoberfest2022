var btnTranslate = document.querySelector("#btn-txt");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/shakespeare.json";
function getTranslationURL(text){
    return serverURL+"?"+"text=" +text
}
function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server");
}

function clickHandler(){
    var inputText=txtInput.value;//taking input
    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then((response)=>response.json())
    // .then(json=>console.log(json))
     .then((json)=>(outputDiv.innerText=json.contents.translated))
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler)