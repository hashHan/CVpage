<template>
    <div id="cv-work" class="section">
        <app-section :items="items" :sectionTitle="sectionTitle"></app-section>
    </div>
</template>

<script>
import Section from '../Section.vue';
import axios from 'axios';

export default {
    data() {
        return {
           sectionTitle: "EXPERIENCE",
           items: []
        }
    },
    computed: {
    
    },
    methods: {
        //
    },
    components: {
        appSection: Section,
    },
    created () {
      axios.get('/body/work.json')
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