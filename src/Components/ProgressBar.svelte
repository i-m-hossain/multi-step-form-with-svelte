<script>

    import { currentPage } from "../store/currentPage";

</script>
<main class="border p-4 w-full mb-4 ">
    <progress value={($currentPage/6)*100} max="100">{($currentPage/6)*100} %</progress> <span>{Math.round(($currentPage/6)*100)} %</span>
</main>