import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/supabase.js";
import { F as Form } from "../../../../../chunks/Form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let id = $page.params.id;
  let titulo = "";
  let texto = "";
  let filename = "";
  $$unsubscribe_page();
  return `<h1 class="${"text-3xl"}">Editar post</h1>

${validate_component(Form, "Form").$$render($$result, { titulo, texto, id, filename }, {}, {})}`;
});
export {
  Page as default
};
