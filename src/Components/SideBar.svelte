<script>

    import { link } from "svelte-spa-router";
    import { currentPage } from "../store/currentPage";
    import active from 'svelte-spa-router/active'
</script>

<div class="flex flex-col space-y-5 border-r px-4">
    <div class="">
        <a href="/" use:link use:active >Helios</a>
    </div>
    <div class="flex flex-col">
        {#each [
            '/setup-factory', 
            '/floor', 
            '/camera', 
            "/employee", 
            '/machine', 
            '/schedule'
        ] as item, i (i)}
        <a  href={item} 
            on:click={()=>{
                localStorage.setItem("currentPage", JSON.stringify(i+1));
                $currentPage = i+1}
            }
            use:link 
            use:active
        >
            {item.slice(1)}
        </a>
        {/each}
        
        
    </div>
    <div class="flex">
        <a href="/setting" use:active use:link>Setting</a>
    </div>
</div>