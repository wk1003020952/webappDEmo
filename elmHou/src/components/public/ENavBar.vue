<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in levelList":key="item.path" :to="item.path">
      {{item.meta.breadcrumbName}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
    export default {
        name: "ENavBar",
        data() {
          return {
            levelList: []
          }
        },
        watch: {
        $route() {
          this.getBreadcrumb()
        }
      },
      created(){
        this.getBreadcrumb()
      },
      methods:{
        getBreadcrumb() {
          console.log(this.$route.matched)
          this.levelList=this.$route.matched;
         /* let matched = this.$route.matched.filter(item => item.name)
          const first = matched[0];
          if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
            matched = [{ path: '/dashboard', meta: { title: 'dashboard' }}].concat(matched)
          }
          this.levelList = matched*/
        }
      }
    }
</script>

<style scoped>

</style>
