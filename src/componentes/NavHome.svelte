<script>
	import supabase from '$lib/supabase';
	import { goto } from '$app/navigation';

	async function signOut(){
		localStorage.removeItem('token')
		await supabase.auth.signOut()
		goto('/')
	}
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
	<div class="flex none px-2 mx-2">
		<span class="text-lg font-bold">CRUD SUPABASE</span>
	</div>
	<div class="flex-1 px-2 mx-2">
		<div class="items-stretch lg:flex>">
				<a href="/home" class="btn btn-ghost btn-sm rounded-btn">Home</a>
				<a href="/post" class="btn btn-ghost btn-sm rounded-btn">Post</a>
				<a href="/" on:click={signOut} class="btn btn-ghost btn-sm rounded-btn">salir</a>
		</div>
	</div>
</div>
