<template>
    <div id="cv-education" class="section border-top border-bottom">
        <div class="cv-section-title border-bottom"><h5>EDUCATION</h5></div>
        <app-section :items="items"></app-section>
    </div>  
</template>

<script>
import Section from './Section.vue';
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            //
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
<style>

</style>