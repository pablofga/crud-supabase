<script>
	import supabase from '$lib/supabase';
	import { browser } from '$app/environment';
	import Alert from './Alert.svelte';
	import { goto } from '$app/navigation';

	let email = '';
	export let titulo = '';
	export let texto = '';
	export let id = '';
	export let filename = '';
	let alert = false;
	let file = null;

	if (browser) {
		email = supabase.auth.user().email;
	}

	async function savePost() {
		const filename = email + '/' + Date.now();
		//Código para subir una imagen
		const image = await supabase.storage.from('imagenes').upload(filename, file, {
			cacheControl: '3600',
			upsert: false
		});

		console.log(image);

		const { publicURL } = await supabase.storage.from('imagenes').getPublicUrl(filename);
		console.log(publicURL);
		console.log(filename);

		const newPost = await supabase.from('posts').insert({
			titulo: titulo,
			texto: texto,
			email: email,
			imagen: publicURL,
			filename: filename
		});

		console.log(newPost.status);
		if (newPost.status == 201) {
			titulo = '';
			texto = '';
			console.log(file);
			file = '';
			console.log(file);
			alert = true;
		} else {
			console.log(newPost.status);
		}
	}

	async function editPost() {
		console.log(file)
		if (file == null) {
			console.log('paso1')
			const edit = await supabase
				.from('posts')
				.update({ titulo: titulo, texto: texto })
				.match({ id: id });
			if (edit.status == 200) {
				goto('/home');
			}
		} else {
			console.log('paso2' + filename)
			//Eliminar imagen
			const data = await supabase.storage.from('imagenes').remove([filename]);
			console.log('paso3')
			//tomar nombre de archivo nuevo
			const fileName = email + '/' + Date.now();
			console.log({email})
			console.log('paso4')
			console.log({fileName})
			//Código para subir una imagen
			const image = await supabase.storage.from('imagenes').upload(fileName, file, {
				cacheControl: '3600',
				upsert: false
			});
			console.log('paso5'+ fileName)
			console.log(image);

			const { publicURL } = await supabase.storage.from('imagenes').getPublicUrl(fileName);

			const edit = await supabase
				.from('posts')
				.update({ titulo: titulo, texto: texto, filename: fileName, imagen: publicURL })
				.match({ id: id });
			if (edit.status == 200) {
				goto('/home');
			}
		}
	}

	function cleanAlert() {
		alert = false;
	}

	function getFile(e) {
		file = !!e.target.files.length && e.target.files[0];
		console.log(file);
	}
</script>

<div class="form-control">
	<label for="titulo" class="label">
		<span class="label-text">Título</span>
	</label>
	<input
		type="text"
		id="titulo"
		bind:value={titulo}
		placeholder="Título"
		class="input input-primary input-bordered"
		autocomplete="off"
		on:click={cleanAlert}
	/>
	<label for="texto" class="label">
		<span class="label-text">Contenido</span>
	</label>
	<textarea
		id="texto"
		bind:value={texto}
		placeholder="Contenido"
		class="textarea h-24 textarea-bordered textarea-primary"
		on:click={cleanAlert}
	/>

	<label for="imagen" class="label">
		<span class="label-text">Imagen</span>
	</label>
	<input type="file" id="imagen" on:change={getFile} />
	<input type="hidden" bind:value={id} />
	{#if id == ''}
		<button class="btn btn-secondary mt-3" on:click={savePost}>Guardar post</button>
	{:else}
		<button class="btn btn-secondary mt-3" on:click={editPost}>Editar post</button>
	{/if}

	{#if alert}
		<Alert />
	{/if}
</div>
