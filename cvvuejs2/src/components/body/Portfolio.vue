<template>
    <div id="cv-portfolio" class="section border-top border-bottom">
        <div class="cv-section-title border-bottom"><h5>PORTFOLIO</h5></div>
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
                items: 'getportfolio' //getter
            })
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