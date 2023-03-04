<script>  
    import { push } from "svelte-spa-router";
    import { fade } from "svelte/transition";
    import Navigation from "../Components/Navigation.svelte";
    import {  moveToPrevPage, moveToNextPage, moveToHomePage } from "../store/currentPage";
    const handleNext=()=>{
        moveToNextPage()
    }
    const handlePrev=()=>{
        moveToPrevPage()
    }
    const handleSaveAndExit=()=>{
        moveToHomePage()
    }  
</script>
<main class="pl-4" in:fade="{{duration: 500}}">
    <div class="flex space-x-24 items-center border h-[300px]">
        <h2>Setup factory</h2>
        <button class="border p-2" on:click={()=> push('/edit-factory')}>Edit</button>
    </div>

    <Navigation 
        handleNext={handleNext} 
        handlePrev={handlePrev} 
        handleSaveAndExit={handleSaveAndExit}
    />
</main>