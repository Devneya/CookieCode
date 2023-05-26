import {test} from './public/js/api.js';

const formSubmit = document.getElementById('submit-form')

const buttonPopup = document.getElementsByClassName('show-form')

formSubmit.addEventListener("submit", function(event){
    event.preventDefault();

    let apiKey = document.getElementById("api-key").value;
    let prompt = document.getElementById("prompt").value;

    (async () => {
        const meta = await test(apiKey, prompt);
        console.log(meta); // {"metadata": "for: test.png"}
    })();

})

buttonPopup[0].addEventListener("click", function(event){
    
    formSubmit.classList.toggle("active")
});


