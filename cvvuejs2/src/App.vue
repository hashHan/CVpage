<template>
  <div id="app" ref="wholeapp" class="container">
    <div class="row">
      <div class="col-11">
        <div class="row">
          <div class="navshow col-2 "></div>
          <div class="col"><app-header></app-header></div>
          <div class="col-2 row align-items-center justify-content-center">
            <app-nav class="navshow"></app-nav>
            <button type="button" class="pdfshow btn btn-danger btn-sm"  @click="makeimagePDF"
            data-toggle="popover" title="it takes a second." 
            data-content="Please wait a second.">PDF</button>
          </div>     
        </div>
        <div><router-view></router-view></div>
        <div><app-footer></app-footer></div>
       <!-- <img :src="srcdata" alt="" class="test"> -->
       </div>
      <div class="col pdfmargin"></div>
    </div>
  </div>

</template>

<script>
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import jsPDF from 'jsPDF';
import html2canvas from 'html2canvas';

export default {
    data () {
      return {
        //srcdata: '',
      
      }
    },
    methods: {
        makeimagePDF () {
            //alert('please wait a second.')
            window.html2canvas = html2canvas; //Vue.js
            let that = this;
            let pdf = new jsPDF('p', 'mm', 'a4');//default value of jsPDF(orientation, unit, format, compress) //https://developer.tizen.org/community/tip-tech/creating-pdf-documents-jspdf?langredirect=1
            let canvas = pdf.canvas;
            const a4width = 210;
            const a4height = 297;
            const pageWidth = 205;
            const pageHeight = pageWidth*(a4height/a4width); //a4 ratio
            canvas.width = pageWidth;//let ele = document.querySelector(selector) // use $refs instead of it
            canvas.height = pageHeight;
            let ele = this.$refs.wholeapp; //should set to pdf.fromHTML(ele)
            if(!ele){
              console.warn(selector + ' is not exist.');
              return false
            }
            let width = ele.offsetWidth; 
            let height = ele.offsetHeight; 
            let imgHeight = pageWidth * height/width; // calculate based on ele's height/width ratio
           
            html2canvas(ele).then(function(canvas) {
                let position = 0;
                const imgData = canvas.toDataURL('image/png');//HTMLCanvasElement.toDataURL()
                //that.srcdata = imgData;//check for imaData // result: margin cut :( a problem with canvas in jsPDF
                //console.log(imgData);
                pdf.addImage(imgData, 'png', 0, position, pageWidth, imgHeight, undefined, 'slow')
                //Paging, jspdf methods
                let heightLeft = imgHeight; 
                heightLeft -= pageHeight; //left height
                
                while (heightLeft >= 0) {
                  position = heightLeft - imgHeight;
                  pdf.addPage();
                  pdf.addImage(imgData, 'png', 0, position, pageWidth, imgHeight);
                  console.log(pdf)
                  heightLeft -= pageHeight;
                };

                console.log(pdf);
                pdf.save('HaeseongHanCV.pdf');	
            });
        },
    },
    components: {
        appHome: Home,
        appFooter: Footer,
        appHeader: Header,
        appNav: Nav
       

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
.navshow{
  @include small-screens {
    display:none;
  }
}
.pdfshow{
   @include smallmedium-screens {
    display:none;
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
.item-company-link{
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
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
.item-end-time, .item-time-slash{//to Body.vue
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
