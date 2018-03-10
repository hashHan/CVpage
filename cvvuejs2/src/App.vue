<template>
  <div id="app" class="container">
    <div><app-header></app-header></div>
    <div><router-view></router-view></div>
    <div><app-footer></app-footer></div>
  </div>

</template>

<script>
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        appHome: Home,
        appFooter: Footer,
        appHeader: Header
    }
}
</script>

<style>
#app{
  max-width: 800px;
  padding-right: 30px;
}
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
