<template>
  <div>
    <find_header></find_header>
    <find_main></find_main>
  </div>
</template>
<script>
  import Find_header from "../components/find/find_header";
  import Find_main from "../components/find/find_main";
  export default {
    name: "find",
    components: {Find_main, Find_header}
  }
</script>

<style scoped>

</style>
