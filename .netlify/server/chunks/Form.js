import { c as create_ssr_component, d as add_attribute } from "./index.js";
import "./supabase.js";
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { titulo = "" } = $$props;
  let { texto = "" } = $$props;
  let { id = "" } = $$props;
  let { filename = "" } = $$props;
  if ($$props.titulo === void 0 && $$bindings.titulo && titulo !== void 0)
    $$bindings.titulo(titulo);
  if ($$props.texto === void 0 && $$bindings.texto && texto !== void 0)
    $$bindings.texto(texto);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  return `<div class="${"form-control"}"><label for="${"titulo"}" class="${"label"}"><span class="${"label-text"}">T\xEDtulo</span></label>
	<input type="${"text"}" id="${"titulo"}" placeholder="${"T\xEDtulo"}" class="${"input input-primary input-bordered"}" autocomplete="${"off"}"${add_attribute("value", titulo, 0)}>
	<label for="${"texto"}" class="${"label"}"><span class="${"label-text"}">Contenido</span></label>
	<textarea id="${"texto"}" placeholder="${"Contenido"}" class="${"textarea h-24 textarea-bordered textarea-primary"}">${texto || ""}</textarea>

	<label for="${"imagen"}" class="${"label"}"><span class="${"label-text"}">Imagen</span></label>
	<input type="${"file"}" id="${"imagen"}">
	<input type="${"hidden"}"${add_attribute("value", id, 0)}>
	${id == "" ? `<button class="${"btn btn-secondary mt-3"}">Guardar post</button>` : `<button class="${"btn btn-secondary mt-3"}">Editar post</button>`}

	${``}</div>`;
});
export {
  Form as F
};
