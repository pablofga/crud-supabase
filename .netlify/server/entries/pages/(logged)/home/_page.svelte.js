import { c as create_ssr_component, f as each, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index.js";
import "../../../../chunks/supabase.js";
import "sweetalert2";
const Show = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let posts = [];
  return `${posts.length ? each(posts, (item) => {
    return `<div class="${"card w-96 bg-base-100 shadow-xl mt-4"}"><figure><img${add_attribute("src", item.imagen, 0)} alt="${"Sin imagen"}"></figure>
		<div class="${"card-body"}"><h2 class="${"card-title"}">${escape(item.titulo)}</h2>
			<p>${escape(item.texto)}</p>
			<div class="${"card-actions"}">${email == item.email ? `<a${add_attribute("href", `/edit/${item.id}`, 0)} class="${"btn btn-secondary"}">Editar</a>
					<button class="${"btn btn-error"}">Eliminar</button>` : ``}
			</div></div>
	</div>`;
  }) : `<p>No hay posts...</p>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-3xl"}">Bienvenido</h1>

${validate_component(Show, "ShowPost").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
