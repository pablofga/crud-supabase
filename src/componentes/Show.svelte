<script>
	import supabase from '$lib/supabase';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Swal from 'sweetalert2';
	// import 'sweetalert2/dist/sweetalert2.css';

	let email = '';
	let posts = [];
	if (browser) {
		email = supabase.auth.user().email;
	}

	onMount(async () => {
		let { data } = await supabase.from('posts').select('*').order('id', { ascending: false });
		// .eq('email',email);
		posts = data;
	});

	function alertDelete(id,filename) {
		Swal.fire({
			title: '¿Estás seguro que deseas eliminar el post?',
			text: 'Esta operación no se puede deshacer',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, borrarlo!!'
		}).then((result) => {
			if (result.isConfirmed) {
				// Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
				deletePost(id, filename);
			}
		});
	}

	async function deletePost(id,filename) {
		const data = await supabase.storage.from('imagenes').remove([filename])
		if (data){
			await supabase.from('posts').delete().match({ id: id });
			location.reload();
		}

	}
</script>

{#each posts as item}
	<div class="card w-96 bg-base-100 shadow-xl mt-4">
		<figure>
			<img src={item.imagen} alt="Sin imagen" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">
				{item.titulo}
			</h2>
			<p>{item.texto}</p>
			<div class="card-actions">
				{#if email == item.email}
					<a href={`/edit/${item.id}`} class="btn btn-secondary">Editar</a>
					<button class="btn btn-error" on:click={alertDelete(item.id, item.filename)}>Eliminar</button>
				{/if}
			</div>
		</div>
	</div>
{:else}
	<p>No hay posts...</p>
{/each}
