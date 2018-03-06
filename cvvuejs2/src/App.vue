<template>
  <div class="container" style="max-width: 800px">
    <div><app-header></app-header></div>
    <div><router-view></router-view></div>
  </div>

</template>

<script>
    import Home from './components/Home.vue';
    import Header from './components/Header.vue';
    export default {
        components: {
            appHome: Home,
            appHeader: Header
        }
    }
</script>

<style>
  @media screen and (max-width: 400px){
    .xxs{
      display:none;
    }
  }
  @media screen and (max-width: 500px){
    #cv-name-font{
      font-size: 40px;
    }
  }
  @media screen and (max-width: 710px){
    .item-start-time{
      display:none;
    }
  }
</style>
