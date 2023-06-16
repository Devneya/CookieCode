import { generateCode } from 'https://cdn.jsdelivr.net/gh/get-zen-dev/Devneya@master/lib/api.js';

class DevneyaForm {
    constructor() {
        this.isOpen = false;
        this.form = document.createElement("form");
        this.form.id = "devneya-form";
        this.form.insertAdjacentHTML(
            "afterbegin",
            `
            <div id="devneya-close" unselectable="on">+</div>
            <label class="devneya-form-label" for="devneya-form-api-key">
                API Key:
            </label>
            <input type="text" id="devneya-form-api-key" name="devneya-form-api-key" placeholder="Your API Key" required />
            <label class="devneya-form-label" for="devneya-form-prompt">
                Prompt:
            </label>
            <textarea id="devneya-form-prompt" name="devneya-form-prompt" placeholder="Your prompt" cols="30" rows="10"
                required></textarea>
    
            <button id="devneya-form-button" type="submit">
                Submit
            </button>
            <textarea id="devneya-form-response" name="devneya-form-response" cols="30" rows="10"></textarea>
            `
        );
        document.body.insertBefore(this.form, document.getElementById("js-devneya-script"));
    }
    open() {
        if (!this.form.isOpen) {        
            this.form.classList.add("active");
            this.form.isOpen = true
        } else {
            this.close()
        }
    }
    close() {
        this.form.classList.remove("active");
        this.form.isOpen = false
    }
}

const devneyaForm = new DevneyaForm();

const response = document.getElementById("devneya-form-response");

devneyaForm.form.addEventListener("submit", function (event) {
    let apiKey = document.getElementById("devneya-form-api-key").value;
    let prompt = document.getElementById("devneya-form-prompt").value;  
    event.preventDefault();
    response.value = "";
    (async () => {
        let data = await generateCode(apiKey, 3, prompt)
        let res = JSON.parse(JSON.stringify(data))
        response.value = res
    })();
})

document.getElementById("js-devneya-popup-button").addEventListener("click", function(){devneyaForm.open()})
document.getElementById("devneya-close").addEventListener("click", function(){devneyaForm.close()})