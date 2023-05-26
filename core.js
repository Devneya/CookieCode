import {test} from './public/js/api.js';

const formSubmit = document.getElementById('submit-form')

const buttonPopup = document.getElementsByClassName('show-form')
const response = document.getElementById('response')

formSubmit.addEventListener("submit", function(event){
    event.preventDefault();

    let apiKey = document.getElementById("api-key").value;
    let prompt = document.getElementById("prompt").value;

    (async () => {
        const meta = await test(apiKey, prompt);
        console.log(meta); // {"metadata": "for: test.png"}
        let res = JSON.parse(JSON.stringify(meta))
        response.value = res.arr[res.arr.length - 1].choices[0].message.content
    })();

})

buttonPopup[0].addEventListener("click", function(event){
    
    formSubmit.classList.toggle("active")
});


