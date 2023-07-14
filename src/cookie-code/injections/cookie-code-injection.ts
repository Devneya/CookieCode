import { CookieCodeFormInjections } from "../cookie-code.js";

const cookieCodeForm = new CookieCodeFormInjections(()=>document.body)
cookieCodeForm.startCookieCoding()


