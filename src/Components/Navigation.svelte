<script>
    import { currentPage } from "../store/currentPage";

    export let handleNext, handlePrev, handleSaveAndExit;
</script>

<div class="flex space-x-12 my-8">
    <button class={`border px-4 py-2 rounded ${$currentPage===1 ? "cursor-not-allowed":""}`} type="button" on:click={handlePrev}>Prev</button>
    <div class="flex space-x-2">
        <button class="border px-4 py-2 rounded" type="button" on:click={handleSaveAndExit}>Save & Exit</button>
        <button class={`border px-4 py-2 rounded ${$currentPage===6 ? "cursor-not-allowed":""}`} type="button" on:click={handleNext}>Next</button>
    </div>
</div>