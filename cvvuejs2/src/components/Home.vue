<template>
  <div id="home">    
    <app-body></app-body>
    <app-footer></app-footer> 
  </div>

</template>

<script>
   // import Header from './Header.vue';
    import Footer from './Footer.vue';
    import Body from './body/Body.vue';

    export default {
        components: {
          //  appHeader: Header,
            appFooter: Footer,
            appBody: Body
        }
    }
</script>

<style>

</style>
