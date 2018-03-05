<template>
    <div id="cv-portfolio" class="section border-top border-bottom">
        <div class="cv-section-title border-bottom"><h5>PORTFOLIO</h5></div>
        <app-section :items="items"></app-section>
    </div>
</template>

<script>
import Section from './Section.vue';
export default {
    data() {
        return {
            items:  [
                       { 
                            Company: ["self"],
                            Location: ["self"],
                            Title: ["bootstrap4"],
                            StartTime : [2018],
                            EndTime: [2018],
                            Description: ["link to a github page", "link to a github page 2"]
                               
                       },
                       { 
                            Company: ["you"],
                            Location: ["you"],
                            Title: ["Vuejs2"],
                            StartTime : [2018],
                            EndTime: [2018],
                            Description: ["link to a github page", "link to a github page 2"]
                               
                       }                    
                    ]
        }
    },
    computed: {
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