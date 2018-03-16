<template>
    <div id="cv-portfolio" class="section">
        <!-- <button class="btn btn-primary" @click="showitems">showitems</button> -->
        <app-section :items="items" :sectionTitle="sectionTitle"></app-section>
    </div>
</template>

<script>
import Section from '../Section.vue';
//import {mapGetters} from 'vuex'; using axios instead of vuex 
import axios from 'axios';

export default {
    data() {
        return {
            sectionTitle: "PORTFOLIO",
            items: []
        }
    },
    computed: {
        // ...mapGetters({
        //          items: 'getportfolio' //getter
        //     })
        // items(){
        //     return this.$store.state;
        // } 
    },
    methods: {
        showitems(){
            console.log(this.$store.state.portfolio);
        }
    },
    components: {
        appSection: Section,
    },
    created () {
      axios.get('/body/portfolio.json')
        .then(res => {
          //console.log(res)
          this.items = res.data;
          console.log(this.items);
        })
        .catch(error => console.log(error))
    }  
}
</script>
<style style lang="scss">

</style>