# Devneya

## Library Documentation

### Introduction
The library provides functionality for generating code using the `generateCode` function. This documentation will guide you through the process of using the library effectively.

### Installation
To use the library, you need to include the necessary files in your project:

1. Download the library files.
2. Copy the library to your project's directory.

### Usage
To utilize the library's `generateCode` function, follow these steps:

1. Import the `generateCode` function into your JavaScript file:
```javascript
import {generateCode} from 'https://cdn.jsdelivr.net/gh/get-zen-dev/Devneya@master/lib/api.js';
```

2. Set up the necessary HTML elements in your document. For example, if you have a form with an input field for an API key, another input field for a prompt, and a submit button, your HTML could look like this:
```html
<form id="submit-form">
    <input type="text" id="api-key" placeholder="Enter API key" />
    <input type="text" id="prompt" placeholder="Enter prompt" />
    <button type="submit">Submit</button>
</form>
```

3. Add an event listener to the form's submit event. Inside the event listener, call the `generateCode` function and handle the response. Here's an example:
```javascript
const formSubmit = document.getElementById('submit-form');
const response = document.getElementById('response');

formSubmit.addEventListener("submit", function(event){
    response.value = "";
    event.preventDefault();

    let apiKey = document.getElementById("api-key").value;
    let prompt = document.getElementById("prompt").value;

    (async () => {
        let data = await generateCode(apiKey, 3, prompt);
        let res = JSON.parse(JSON.stringify(data));
        response.value = res;
    })();
});
```
In the above example, the `generateCode` function is called with the API key, number of regenerating attempts, and prompt provided as arguments. The resulting data is then assigned to the `response` element's value.

4. (Optional) If you have a button that toggles the visibility of the form, you can add an event listener to handle the toggle functionality. For example:
```javascript
const buttonPopup = document.getElementsByClassName('show-form');

buttonPopup[0].addEventListener("click", function(event){
    formSubmit.classList.toggle("active");
});
```
In this case, the first element with the class name `show-form` is selected, and when clicked, the `active` class is toggled on the `formSubmit` element.

### Conclusion
By following the steps outlined in this documentation, you can effectively use the library's `generateCode` function to generate code. Remember to import the library, set up the necessary HTML elements, and handle the form submission and toggle functionality if required.