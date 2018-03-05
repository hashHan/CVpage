<template>
    <div id="cv-body" class=" border-top border-bottom">

        <app-portfolio></app-portfolio>
        <app-Work></app-Work>
        <app-education></app-education> 
        <app-skills></app-skills>
        <app-otherinfo></app-otherinfo>
             
    </div>
</template>
<script>
import Work from './bodysection/Work.vue';
import Education from './bodysection/Education.vue';
import Portfolio from './bodysection/Portfolio.vue';
import Otherinfo from './bodysection/Otherinfo.vue';
import Skills from './bodysection/Skills.vue';

export default {
    data() {
        return {
            //
        }
    },
    computed: {
            //
    },
    methods: {
            //
    },
    components: {
        appWork: Work,
        appEducation: Education,
        appPortfolio: Portfolio,
        appSkills: Skills,
        appOtherinfo: Otherinfo
    }  
}
</script>
<style>

</style>

