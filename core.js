import {makeChain} from './public/js/api.js';

const buttonSubmit = document.getElementById('submit-form')
const response = document.getElementById('response')

buttonSubmit.addEventListener("submit", function(event){
    event.preventDefault();

    let apiKey = document.getElementById("api-key").value;
    let prompt = document.getElementById("prompt").value;
    response.value = JSON.stringify(makeChain(apiKey, 3, "date", prompt))
})