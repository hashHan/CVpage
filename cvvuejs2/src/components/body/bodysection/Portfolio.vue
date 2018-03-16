<template>
    <div id="cv-portfolio" class="section">
        <!-- <button class="btn btn-primary" @click="showitems">showitems</button> -->
        <app-section :items="items" :sectionTitle="sectionTitle"></app-section>
    </div>
</template>

<script>
import Section from '../Section.vue';
import axios from 'axios';

export default {
    data() {
        return {
            sectionTitle: "PORTFOLIO",
            items: []
        }
    },
    computed: {
       
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
          this.items = res.data;
          console.log(this.items);
        })
        .catch(error => console.log(error))
    }  
}
</script>
<style style lang="scss">

</style>