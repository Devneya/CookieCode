var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { generateCode, GPTGeneratorBuilder } from "./devneya.js";
class CookieCodeForm {
    constructor(locatePopupButtonContainer) {
        this.container = undefined;
        this.popupButton = undefined;
        this.locatePopupButtonContainer = locatePopupButtonContainer;
        this.formTemplate = `
        <form class="cookie-code-form">
            <div class="cookie-code-form__close">+</div>
            <label for="" class="cookie-code-form__label" for="cookie-code-form__api-key">API Key:</label>
            <input type="text" class="cookie-code-form__api-key" name="cookie-code-form__api-key" placeholder="API Key" required>
            <label for="" class="cookie-code-form__label" for="cookie-code-form__prompt">Prompt:</label>
            <textarea class="cookie-code-form__prompt" name="cookie-code-form__prompt" placeholder="Prompt" required></textarea>
            <label for="cookie-code-form__languages-dropdown">Choose a language:</label> 
            <select name="cookie-code-form__languages-dropdown" class="cookie-code-form__languages-dropdown"> 
                <option value="JavaScript">JavaScript</option> 
                <option value="TypeScript">TypeScript</option> 
                <option value="Python">Python</option> 
                <option value="Golang">Golang</option> 
                <option value="Bash">Bash</option> 
                <option value="PostgreSQL">PostgreSQL</option> 
            </select>
            <button class="cookie-code-form__submit-button cookie-code-btn">Submit</button>
            <textarea class="cookie-code-form__response" name="cookie-code-form__response"></textarea>
            <button class="cookie-code-form__copy-button cookie-code-btn" type="button">Copy & Close</button>
        </form>
        `;
    }
    changeCookieCodeFormVisibility() {
        var _a, _b;
        (_b = (_a = this.container) === null || _a === void 0 ? void 0 : _a.querySelector("div .cookie-code-form")) === null || _b === void 0 ? void 0 : _b.classList.toggle("active");
    }
    mutationCallback() {
        this.popupButtonContainer = this.locatePopupButtonContainer();
        if (!document.querySelector("cookie-code-popup-button") &&
            this.popupButtonContainer) {
            this.renderPopupButton(this.popupButtonContainer);
        }
    }
    injectFormInContainer(container) {
        if (container) {
            container.innerHTML = this.formTemplate;
        }
        else if (this.container) {
            this.container.innerHTML = this.formTemplate;
        }
    }
    renderPopupButton(container) {
        this.popupButton = document.createElement("button");
        this.popupButton.classList.add("cookie-code-btn", "cookie-code-popup-button");
        this.popupButton.innerText = "Cookie Code";
        container.appendChild(this.popupButton);
        this.popupButton.addEventListener("click", () => {
            this.changeCookieCodeFormVisibility();
        });
    }
    injectPopupButton(mutationCallback) {
        this.popupButtonContainer = this.locatePopupButtonContainer();
        if (this.popupButtonContainer) {
            this.renderPopupButton(this.popupButtonContainer);
        }
        else {
            this.observer = new MutationObserver(mutationCallback);
            this.observer.observe(document.body, { childList: true, subtree: true });
        }
    }
    renderFormContainer() {
        this.container = document.createElement("div");
        this.container.classList.add("cookie-code-container");
        document.body.appendChild(this.container);
    }
    addListeners() {
        var _a, _b, _c, _d, _e, _f;
        const apiKey = (document.querySelector(".cookie-code-form__api-key"));
        const prompt = (document.querySelector(".cookie-code-form__prompt"));
        const response = (document.querySelector(".cookie-code-form__response"));
        const lang = (document.querySelector(".cookie-code-form__languages-dropdown"));
        (_b = (_a = this.container) === null || _a === void 0 ? void 0 : _a.querySelector(".cookie-code-form__close")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.changeCookieCodeFormVisibility);
        (_d = (_c = this.container) === null || _c === void 0 ? void 0 : _c.querySelector(".cookie-code-form__copy-button")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
            var _a;
            navigator.clipboard.writeText(((_a = this.container) === null || _a === void 0 ? void 0 : _a.querySelector(".cookie-code-form__response")).value);
            this.changeCookieCodeFormVisibility();
        });
        (_f = (_e = this.container) === null || _e === void 0 ? void 0 : _e.querySelector(".cookie-code-form__submit-button")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function (event) {
            response.value = "";
            event.preventDefault();
            (() => __awaiter(this, void 0, void 0, function* () {
                let devneyaResponse = yield generateCode(GPTGeneratorBuilder(apiKey.value), lang.value, 3, prompt.value);
                response.value = devneyaResponse;
            }))();
        });
    }
    injectCookieCode() {
        this.renderFormContainer();
        this.injectFormInContainer(this.container);
        this.addListeners();
        this.injectPopupButton(this.mutationCallback);
    }
}
const form = new CookieCodeForm(function () { return document.body; });
form.injectCookieCode();
