<script>
   import {goto} from '$app/navigation';
    import {browser} from '$app/environment';
    import ShowPost from '../../../componentes/Show.svelte'
    
    let token='';

if(browser){
    token = localStorage.getItem('token')
    if (token == null){
        goto('/')
    }
}
</script>


<h1 class="text-3xl">Bienvenido</h1>

<ShowPost />