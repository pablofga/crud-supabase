import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/supabase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let pass = "";
  return `<div class="${"p-10 card bg-blue-200"}"><div class="${"form-control"}"><label for="${"email"}" class="${"label"}"><span class="${"label-text"}">Email</span></label>
        <input type="${"email"}" id="${"email"}" placeholder="${"Email"}" class="${"input"}" autocomplete="${"off"}"${add_attribute("value", email, 0)}>
        <label for="${"pass"}" class="${"label"}"><span class="${"label-text"}">Password</span></label>
        <input type="${"password"}" id="${"pass"}" placeholder="${"Password"}" class="${"input"}"${add_attribute("value", pass, 0)}>
        <div class="${"flex flex-wrap gap-4"}"><button class="${"btn mt-5"}">Iniciar sesi\xF3n</button>
            <button class="${"btn mt-5"}">Registrar</button></div></div></div>`;
});
export {
  Page as default
};
