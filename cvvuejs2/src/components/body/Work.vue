<template>
    <div id="cv-work" class="section border-top border-bottom">
        <div class="cv-section-title border-bottom"><h5>WORK EXPERIENCE</h5></div>
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
                            Company: ["KIS PRICING","Affiliated with Moody's"],
                            Location: ["SEOUL"],
                            Title: ["Financial Analyst"],
                            StartTime : ["Apr", 2014],
                            EndTime: ["Feb", 2016],
                            Description: [
                                "Evaluate structured fixed-income and credit-linked derivative instruments for institutional investors.", 
                                "Develop pricing models and programs for asset-backed commercial papers and electronic short-term bonds.",
                                "Design converting logic to compare the yield curve of different bond markets using the bootstrapping method."
                                ]
                               
                       },
                       { 
                            Company: ["KOSDA","Korea Options, Swaps and Derivatives Association"],
                            Location: ["SEOUL"],
                            Title: ["INTERNSHIP",""],
                            StartTime : ["Feb", 2014],
                            EndTime: ["Apr", 2016],
                            Description: [
                                "Managed the whole process of the FORUM about international regulations of OTC markets.", 
                                "Managed the whole process of the 2013 KOSDA AWARDS.",
                                ]
                               
                       },
                                              { 
                            Company: ["ROK AIRFORCE MCRC","Master Control & Reporting Center"],
                            Location: ["OSAN"],
                            Title: ["Aviation control technician", "Sergeant"],
                            StartTime : ["Nov", 2009],
                            EndTime: ["Dec", 2011],
                            Description: [
                                "Monitor aircraft within a specific airspace, using radar, computer equipment, or visual references.", 
                                "Compile information about flights from flight plans, pilot reports, radar, or observations.",
                                "Participated in developing a program to count and summarize flight plans.",
                                "Placed third out of 700 soldiers during the seven-week recruit training."
                                ]
                               
                       },                 
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