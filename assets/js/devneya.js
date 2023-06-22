import { generateCode } from 'https://cdn.jsdelivr.net/gh/get-zen-dev/Devneya@main/lib/api.js';

class DevneyaForm {
    constructor() {
        this.isOpen = false;
        this.form = document.createElement("form");
        this.form.className = "devneya-form";
        this.form.insertAdjacentHTML(
            "afterbegin",
            `
            <div class="devneya-form__close-button" unselectable="on">+</div>
            <label class="devneya-form__label" for="devneya-form-api-key">
                API Key:
            </label>
            <input type="text" class="devneya-form__api-key" name="devneya-form__api-key" placeholder="API Key" required />
            <label class="devneya-form__label" for="devneya-form__prompt">
                Prompt:
            </label>
            <textarea class="devneya-form__prompt" name="devneya-form__prompt" placeholder="Prompt" required></textarea>
    
            <button class="devneya-form__submit-button devneya-form__button" type="submit">
                Submit
            </button>
            <textarea class="devneya-form__response" name="devneya-form__response"></textarea>
            <button class="devneya-form__copy-button devneya-form__button" type="button">
                Copy
            </button>
            `
        );
        document.body.insertBefore(this.form, document.querySelector(".js-devneya-script"));
        // for (let filename of ["https://cdn.jsdelivr.net/gh/get-zen-dev/Devneya@main/lib/execWorker.js", "https://cdn.jsdelivr.net/gh/get-zen-dev/Devneya@main/lib/shared.js"]) {
        //     document.body.appendChild(this.createScript(filename))
        // }
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
    
    createScript(filename) {
        let el = document.createElement("script");
        el.src = filename
        el.type="module"
        return el
    }
}

const devneyaForm = new DevneyaForm();

const response = document.querySelector(".devneya-form__response");
const apiKey = document.querySelector(".devneya-form__api-key");
const prompt = document.querySelector(".devneya-form__prompt");  

devneyaForm.form.addEventListener("submit", function (event) {
    
    event.preventDefault();
    response.value = "";
    (async () => {
        let data = await generateCode(apiKey.value, 3, prompt.value)
        let res = JSON.parse(JSON.stringify(data))
        response.value = res
    })();
})

document.querySelector(".js-devneya-popup-button").addEventListener("click", function(){devneyaForm.open()})
document.querySelector(".devneya-form__close-button").addEventListener("click", function(){devneyaForm.close()})
document.querySelector(".devneya-form__copy-button").addEventListener("click", function(){
    window.navigator.clipboard.writeText(response.value)
})
