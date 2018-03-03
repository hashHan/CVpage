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
import Work from './Work.vue';
import Education from './Education.vue';
import Portfolio from './Portfolio.vue';
import Otherinfo from './Otherinfo.vue';
import Skills from './Skills.vue';

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

