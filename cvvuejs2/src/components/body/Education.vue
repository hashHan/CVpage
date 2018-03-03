<template>
    <div id="cv-education" class="section border-top border-bottom">
        <div class="cv-section-title border-bottom"><h5>EDUCATION</h5></div>
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
                            Company: ["EDX, INC.","MOOC PLATFORM"],
                            Location: ["ONLINE"],
                            Title: ["Data Science MicroMasters"],
                            StartTime : [2017],
                            EndTime: ["ATTENDING"],
                            Description: [
                                "Attending MicroMasters Program in Data Science from edX, in partnership with UCSanDiego.", 
                                "Coursework: Big Data Analytics using Spark, Machine Learning Fundamentals, Statistics and Probability in Data Science using Python, Python for Data Science",
                                "jupyter notebooks, pandas, numpy, matplotlib, scikit-learn, nltk"
                                ]
                               
                       },
                       { 
                            Company: ["NATIONAL INSTITUTE FOR LIFELONG EDUCATION","NILE"],
                            Location: ["SEOUL"],
                            Title: ["Computer Engineering"],
                            StartTime : [2016],
                            EndTime: [2017],
                            Description: [
                                "Earned 36 credits on undergraduate_level courses in computer engineering from 2016.", 
                                "Coursework: Data Structures; Computer System; Network_1; System Programming; Algorithms; Digital Engineering; Microprocessor_1; Computer Architecture and Organization; Databases; Discrete Mathematics; Software Engineering; Operation System",
                                "GPA: 4.17/4.5 ( 95.8/100 )"
                                ]
                               
                       },
                       { 
                            Company: ["CHUNGNAM NATIONAL UNIVERSITY SCHOOL OF MEDICINE"],
                            Location: ["DAEJEON"],
                            Title: ["Medicine", "M.D. Candidate"],
                            StartTime : ["MARCH", 2016],
                            EndTime: ["Leave of Absence"],
                            Description: [
                                "between second year and third year"
                                ]
                               
                       },     
                       { 
                            Company: ["YONSEI UNIVERSITY"],
                            Location: ["SEOUL"],
                            Title: ["B.A in Business Administration", "B.A. in Economics","Minored in Applied Statistics"],
                            StartTime : [],
                            EndTime: ["Aug", 2014],
                            Description: [
                                "Statistics (partial GPA: 4.30/4.5)",
                                "Finance (partial GPA: 4.35/4.5)",
                                "Economics (partial GPA: 4.17/4.5)",
                                "The Highest Honors (Aug 2008), Honors (Aug 2013)"
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