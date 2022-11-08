import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import "../../../chunks/supabase.js";
const app = "";
const NavHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar mb-2 shadow-lg bg-neutral text-neutral-content"}"><div class="${"flex none px-2 mx-2"}"><span class="${"text-lg font-bold"}">CRUD SUPABASE</span></div>
	<div class="${"flex-1 px-2 mx-2"}"><div class="${"items-stretch lg:flex>"}"><a href="${"/home"}" class="${"btn btn-ghost btn-sm rounded-btn"}">Home</a>
				<a href="${"/post"}" class="${"btn btn-ghost btn-sm rounded-btn"}">Post</a>
				<a href="${"/"}" class="${"btn btn-ghost btn-sm rounded-btn"}">salir</a></div></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavHome, "NavHome").$$render($$result, {}, {}, {})}
<main class="${"container mx-auto p-8 max-w-2xl mt-8"}">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
