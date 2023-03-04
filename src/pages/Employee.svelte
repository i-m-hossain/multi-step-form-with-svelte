<script>  
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
    <h2>Employee </h2>
    <Navigation
        handleNext={handleNext} 
        handlePrev={handlePrev} 
        handleSaveAndExit={handleSaveAndExit}
    />
</main>