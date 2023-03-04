<script>  
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
<main class="pl-4">
    <h2>Floor </h2>
    <Navigation 
        handleNext={handleNext} 
        handlePrev={handlePrev} 
        handleSaveAndExit={handleSaveAndExit}
    />
</main>