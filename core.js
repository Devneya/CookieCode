import {makeChain} from './public/js/api.js';

const formSubmit = document.getElementById('submit-form')

const buttonPopup = document.getElementsByClassName('show-form')
const response = document.getElementById('response')

formSubmit.addEventListener("submit", function(event){
    response.value = "";
    event.preventDefault();

    let apiKey = document.getElementById("api-key").value;
    let prompt = document.getElementById("prompt").value;

    (async () => {
        let data = await makeChain(apiKey, 3, prompt)
        let res = JSON.parse(JSON.stringify(data))
        response.value = res
    })();

})

buttonPopup[0].addEventListener("click", function(event){
    
    formSubmit.classList.toggle("active")
});


