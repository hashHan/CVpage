<template>
    <div id="cv-education" class="section">
        <app-section :items="items" :sectionTitle="sectionTitle"></app-section>
    </div>  
</template>

<script>
import Section from '../Section.vue';
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            sectionTitle: "Education"
        }
    },
    computed: {
        ...mapGetters({
        items: 'geteducation' //getter
        })
            //
    },
    methods: {
            //
    },
    components: {
        appSection: Section,
    }    
}
</script>
<style style lang="scss">

</style>