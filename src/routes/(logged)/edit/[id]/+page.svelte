<script>
    import {page} from '$app/stores'
    import supabase from '$lib/supabase'
    import {onMount} from 'svelte'
    import Form from '../../../../componentes/Form.svelte';

    let id=$page.params.id;
    let titulo=''
    let texto=''
    let filename=''
    
     
     onMount(async () =>{
        let {data} = await supabase.from('posts').select('*').eq('id',id);
        titulo = data[0].titulo;
        texto = data[0].texto;
        filename = data[0].filename;
     })
</script>

<h1 class="text-3xl">Editar post</h1>

<Form {titulo} {texto} {id} {filename}/>
