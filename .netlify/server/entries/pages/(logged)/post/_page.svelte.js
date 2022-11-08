import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { F as Form } from "../../../../chunks/Form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-3xl"}">Nuevo post</h1>

${validate_component(Form, "Form").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
