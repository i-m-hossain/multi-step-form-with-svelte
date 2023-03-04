<script>
	import Router, {  location } from "svelte-spa-router"
    import {  routes } from "./routes";
    import SideBar from "./Components/SideBar.svelte";
    import ProgressBar from "./Components/ProgressBar.svelte";
	
</script>

	{#if $location !=="/login" }
		<main class="flex w-full">
			<SideBar/>
			<div class=" flex-1">
				
				<ProgressBar/>
				<Router routes={routes}></Router>
			</div>
		</main>
	{:else}
		<Router routes={routes}/>
	{/if}
	<style>
		/* Style for "active" links; need to mark this :global because the router adds the class directly */
		:global(a.active) {
			color: red;
		}
		</style>
