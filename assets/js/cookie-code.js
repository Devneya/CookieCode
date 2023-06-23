import { generateCode } from 'https://cdn.jsdelivr.net/gh/get-zen-dev/Devneya@latest/lib/api.js';

class CookieCodeForm {
    constructor() {
        this.isOpen = false;
        this.form = document.createElement("form");
        this.form.className = "cookie-code-form";
        this.form.insertAdjacentHTML(
            "afterbegin",
            `
            <div class="cookie-code-form__close-button" unselectable="on">+</div>
            <label class="cookie-code-form__label" for="cookie-code-form-api-key">
                API Key:
            </label>
            <input type="text" class="cookie-code-form__api-key" name="cookie-code-form__api-key" placeholder="API Key" required />
            <label class="cookie-code-form__label" for="cookie-code-form__prompt">
                Prompt:
            </label>
            <textarea class="cookie-code-form__prompt" name="cookie-code-form__prompt" placeholder="Prompt" required></textarea>
    
            <button class="cookie-code-form__submit-button cookie-code-form__button" type="submit">
                Submit
            </button>
            <textarea class="cookie-code-form__response" name="cookie-code-form__response"></textarea>
            <button class="cookie-code-form__copy-button cookie-code-form__button" type="button">
                Copy
            </button>
            `
        );
        document.body.insertBefore(this.form, document.querySelector(".js-cookie-code-script"));
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

const cookieCodeForm = new CookieCodeForm();

const response = document.querySelector(".cookie-code-form__response");
const apiKey = document.querySelector(".cookie-code-form__api-key");
const prompt = document.querySelector(".cookie-code-form__prompt");  

cookieCodeForm.form.addEventListener("submit", function (event) {
    
    event.preventDefault();
    response.value = "";
    (async () => {
        let data = await generateCode(apiKey.value, 3, prompt.value)
        let res = JSON.parse(JSON.stringify(data))
        response.value = res
    })();
})

document.querySelector(".js-cookie-code-popup-button").addEventListener("click", function(){cookieCodeForm.open()})
document.querySelector(".cookie-code-form__close-button").addEventListener("click", function(){cookieCodeForm.close()})
document.querySelector(".cookie-code-form__copy-button").addEventListener("click", function(){
    window.navigator.clipboard.writeText(response.value)
})
