<template>
    <div class="all">
      <EjinbiHeader></EjinbiHeader>
      <EjinbiContent></EjinbiContent>
      <e-go-top></e-go-top>
    </div>
</template>

<script>

    import EjinbiHeader from "../components/jinbi/EjinbiHeader";
    import EjinbiContent from "../components/jinbi/EjinbiContent";
    import EjinbiFooter from "../components/jinbi/EjinbiFooter";
    import EGoTop from "../components/public/EGoTop";
    export default {
        name: "Ejinbi",
      components: {EGoTop, EjinbiFooter, EjinbiContent, EjinbiHeader}
    }
</script>

<style scoped lang="stylus">
  .all{
      height: 100%;
      display: flex;
      flex-direction: column;
  }
</style>
