<template>
  <div class="container" style="max-width: 800px">
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>  

  
  </div>

</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Body from './components/body/Body.vue';

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer,
            appBody: Body
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
