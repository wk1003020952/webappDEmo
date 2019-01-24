<template>
    <router-view/>
</template>
<script>
import FooterGuide from "./pages/FooterGuide";
export default {
  name: 'App',
  components: {FooterGuide},
}
</script>
<style lang="stylus">
@import "//at.alicdn.com/t/font_995834_p1w1rdy2hth.css";
  div#app
    position relative
    height 100%
</style>
