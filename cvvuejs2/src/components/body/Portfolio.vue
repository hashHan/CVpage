<template>
    <div id="cv-portfolio" class="section border-top border-bottom">
        <div class="cv-section-title border-bottom"><h5>PORTFOLIO</h5></div>
        <!-- section-body is totally equal to "Work.vue" -->
        <div class="cv-section-body">
            <div v-for="(item, index) in items" :key="index" class="cv-section-item">
                <div class="row justify-content-between">
                    <div class="col item-company">
                        <span class="font-weight-bold">{{ item.Company[0] }}</span>
                        <span v-if="item.Company[1]" class="xxs">({{ item.Company[1] }})</span>
                    </div>
                    <div class="col item-location text-right d-none d-sm-block">
                        <span>{{ item.Location[0] }}</span>
                        <span v-if="item.Location[1]" class="xxs">({{ item.Location[1] }})</span>
                    </div>
                </div>
                <div class="row justify-content-between font-italic">
                    <div class="col item-title">
                        <span>{{ item.Title[0] }}</span>
                        <span v-if="item.Title[1]" class="xxs">({{ item.Title[1] }})</span>                      
                    </div>
                    <div class="col item-time text-right d-none d-sm-block">
                        <span v-for="(time, index) in item.StartTime" :key="index" class="item-start-time"> {{ time }}</span>
                        <span> - </span>
                        <span v-for="(time, index) in item.EndTime" :key="index" class="item-end-time"> {{ time }}</span>
                    </div>
                </div>
                <ul class="item-descriptions d-none d-sm-block">
                    <li v-for="(content, index) in item.Description" :key="index" class="item-description">{{ content }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
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
    }  
}
</script>
<style>

</style>