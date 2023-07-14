import { CookieCodeFormInjections } from "../cookie-code.js";
const cookieCodeForm = new CookieCodeFormInjections(() => {
    const el = document.querySelector("[title='Reset Content']");
    if (el !== null) {
        return el.parentElement.parentElement;
    }
});
cookieCodeForm.startCookieCoding();
