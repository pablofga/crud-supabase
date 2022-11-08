<script>
    import supabase from '$lib/supabase';
    import {goto} from '$app/navigation';
    import {browser} from '$app/environment';

    let email='';
    let pass='';
    let token='';

    if(browser){
        token = localStorage.getItem('token')
        if (token != null){
            goto('/home')
        }
    }
    async function registrar(){
        const { user, error} = await supabase.auth.signUp({
            email: email,
            password:pass
        })
        console.log(user);
    }
    async function login(){
        const { user, session, error} = await supabase.auth.signIn({
            email: email,
            password:pass
        })
        if(user.role=='authenticated'){
            localStorage.setItem('token',session.access_token);
            console.log(localStorage.getItem('token'));
            goto('/home')
        }
    }

</script>

<div class="p-10 card bg-blue-200">
    <div class="form-control">
        <label for="email" class="label">
            <span class="label-text">Email</span>    
        </label>
        <input type="email" id="email"bind:value={email} placeholder="Email" class="input" autocomplete="off">
        <label for="pass" class="label">
            <span class="label-text">Password</span>    
        </label>
        <input type="password" id="pass"bind:value={pass} placeholder="Password" class="input">
        <div class="flex flex-wrap gap-4">
            <button class="btn mt-5" on:click={login}>Iniciar sesión</button>
            <button class="btn mt-5" on:click={registrar}>Registrar</button>
        </div>
    </div>
</div>