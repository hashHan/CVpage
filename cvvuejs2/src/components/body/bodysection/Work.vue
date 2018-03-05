<template>
    <div id="cv-work" class="section">
        <app-section :items="items" :sectionTitle="sectionTitle"></app-section>
    </div>
</template>

<script>
import Section from '../Section.vue';
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
           sectionTitle: "WORK EXPERIENCE"
        }
    },
    computed: {
        ...mapGetters({
        items: 'getwork' //getter
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