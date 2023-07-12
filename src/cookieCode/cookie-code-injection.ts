import { CookieCodeFormInjections } from "./cookie-code.js";

const form = new CookieCodeFormInjections(() => document.body)
form.startCookieCoding()