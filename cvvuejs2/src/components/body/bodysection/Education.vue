<template>
    <div id="cv-education" class="section">
        <app-section :items="items" :sectionTitle="sectionTitle"></app-section>
    </div>  
</template>

<script>
import Section from '../Section.vue';
import axios from 'axios';

export default {
    data() {
        return {
            sectionTitle: "Education",
            items: []
        }
    },
    computed: {
       
    },
    methods: {
          
    },
    components: {
        appSection: Section,
    },
    created () {
      axios.get('/body/education.json')
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