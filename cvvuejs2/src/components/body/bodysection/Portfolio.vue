<template>
    <div id="cv-portfolio" class="section">
        <app-section :items="items" :sectionTitle="sectionTitle"></app-section>
    </div>
</template>

<script>
import Section from '../Section.vue';
import {mapGetters} from 'vuex';
import axios from 'axios';

export default {
    data() {
        return {
            sectionTitle: "PORTFOLIO",
            items: []
        }
    },
    computed: {
        ...mapGetters({
               // items: 'getportfolio' //getter
            })
    },
    methods: {
            //
    },
    components: {
        appSection: Section,
    },
    created () {
      axios.get('https://cvhaeseong.firebaseio.com/body/portfolio.json')
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