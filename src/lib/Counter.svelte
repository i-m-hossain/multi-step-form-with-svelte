<script>
  let count = 0
  const moveToNextPage = () => {
    count += 1
  }
</script>

<button on:click={moveToNextPage}>
  count is {count}
</button>
