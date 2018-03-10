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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
//default variables
$theme-color: #ffffff;
$a-color: rgb(34, 132, 243);
$text-color: rgb(0, 0, 0);
$text-color-sub: gray;
$text-title: rgb(11, 132, 202);
$lighter: lighten($theme-color, 50%);
$darker:  darken($theme-color, 50%);

//app.vue
body {
    font-family: 'Roboto', sans-serif;  
    color: $text-color;
    background: $lighter;
    font-size: 14px;
    padding: 30px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, h5, h6  {
    font-weight: 700;
}
p {
    line-height: 1.5;
}

$max-width: 800px;

#app{
  max-width: $max-width;
  
}

@mixin tiny-screens() {
  @media only screen and (max-width: 400px) {
    @content;
  }
}
@mixin small-screens() {
  @media only screen and (max-width: 574px) {
    @content;
  }
}
@mixin smallmedium-screens() {
  @media only screen and (max-width: 680px) {
    @content;
  }
}
@mixin medium-screens() {
  @media only screen and (max-width: 710px) {
    @content;
  }
}

.xxs{
  @include tiny-screens {
    display:none;
  }
}

//Header.vue
#cv-name-font{
  @include small-screens {
    font-size: 40px;
  }
}
//body.vue
 .cv-section-title {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 500;
        position: relative;
        margin-top: 0;
        margin-bottom: 15px;
}
.item-company-title {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    color: $text-color;
}
.item-company{
    color: darken($text-color-sub,15%);
}
.item-location{
    color: darken($text-color-sub,10%);
    font-weight: 600;
    @include medium-screens {
      display:none;
    }
}
.item-title{
     font-weight: 550;
}
.item-time {
    right: 0;
    top: 0;
    color: $text-color-sub;
}
.item-start-time{//to Body.vue
  @include medium-screens {
    display:none;
  }
}
.item-end-time{//to Body.vue
  @include smallmedium-screens {
    display:none;
  }
}
.item-descriptions{
  padding-top: 5px;
  font-size: 14px;
}
.item-description{
  padding-top: 2px;
}

//nav.vue
#nav, #header{
    padding-top: 15px;
    font-weight: bold;
    a {
      color:$a-color;
      &:hover{
        color:white;
        text-decoration-line: none;
        background-color: $a-color ;
      }
    }
}

//footer.vue
.copyright {
    font-size: 14px;
    margin-bottom: 0;
    text-align: center;
}

</style>
