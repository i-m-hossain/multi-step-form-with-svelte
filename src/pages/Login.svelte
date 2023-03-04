<script>
    import { push } from "svelte-spa-router";
    import { fade } from "svelte/transition";
    let email="", password="";
    const handleSubmit=()=>{
        if(email=== "imran@gmail.com" && password==="123456"){
           push("/")
        }else{
            alert("error while login")
        }
    }
</script>
<form class="flex flex-col w-1/2 space-y-4 mx-auto my-24" on:submit|preventDefault={handleSubmit} in:fade="{{duration: 500}}">
    <input type="email" placeholder="enter email"  class="border px-4 py-2 rounded" bind:value={email} required>
    <input type="password" placeholder="enter password"   class="border px-4 py-2 rounded" bind:value={password} required>
    <button type="submit" class="border px-4 py-2 rounded">Login</button>
</form>