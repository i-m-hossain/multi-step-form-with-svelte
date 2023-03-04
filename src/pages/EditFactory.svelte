<script>
    import { fade } from "svelte/transition";
    import Navigation from "../Components/Navigation.svelte";
    import { moveToHomePage, moveToNextPage, moveToPrevPage } from "../store/currentPage";
    const handleNext=()=>{
        moveToNextPage()
    }
    const handlePrev=() =>{
        moveToPrevPage()
    }
    const handleSaveAndExit=()=>{
        moveToHomePage()
    }
</script>
<main in:fade="{{duration: 500}}"> 
    
    <div class="flex space-x-24 items-center border h-[300px]">
        <h2>Edit factory</h2>
       
    </div>
    <Navigation handleNext={handleNext} handlePrev={handlePrev} handleSaveAndExit={handleSaveAndExit}/>
</main>