<template>
    <div id="cv-otherinfo" class="section">
        <app-section :items="items" :sectionTitle="sectionTitle">
            <span slot="locationlink">Link to POST</span>
        </app-section>
    </div>
</template>

<script>
import Section from '../Section.vue';
import axios from 'axios';

export default {
    data() {
        return {
            sectionTitle: "SELF LEARINNG",
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
      axios.get('/body/information.json')
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