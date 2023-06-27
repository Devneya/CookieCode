import {getCode} from '/assets/js/devneya.js';

const formSubmit = document.getElementsByClassName('cookie-code-form')[0]

const response = document.querySelector(".cookie-code-form__response");
const apiKey = document.querySelector(".cookie-code-form__api-key");
const prompt = document.querySelector(".cookie-code-form__prompt");  

formSubmit.addEventListener("submit", function(event){
    response.value = "";
    event.preventDefault();

    (async () => {
        let data = await getCode(apiKey.value, prompt.value)
        let res = JSON.parse(JSON.stringify(data))
        response.value = res
    })();

})


document.querySelector(".cookie-code-form__copy-button").addEventListener("click", function(){
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(response.value);
    } else {
        console.error(`Unable to copy the response to clipboard\n navigator.clipboard is ${navigator.clipboard}`)}
})
