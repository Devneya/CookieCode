import {makeChain} from './public/js/api.js';

const buttonSubmit = document.getElementById('submit-form')

buttonSubmit.addEventListener("submit", function(event){
    event.preventDefault();

    let apiKey = document.getElementById("api-key").value;
    let prompt = document.getElementById("prompt").value;
    console.log(makeChain(apiKey, 3, "date", prompt))
})