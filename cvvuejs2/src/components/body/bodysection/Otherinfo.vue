<template>
    <div id="cv-otherinfo" class="section">
        <app-section :items="items" :sectionTitle="sectionTitle"></app-section>
    </div>
</template>

<script>
import Section from '../Section.vue';
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            sectionTitle: "SELF LEARINNG"
        }
    },
    computed: {
        ...mapGetters({
                items: 'getinformation' //getter
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