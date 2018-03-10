<template>
    <div id="cv-portfolio" class="section">
        <app-section :items="items" :sectionTitle="sectionTitle"></app-section>
    </div>
</template>

<script>
import Section from '../Section.vue';
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            sectionTitle: "PORTFOLIO"
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
<style style lang="scss">

</style>