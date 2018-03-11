<template>
    <div class="common-section">
        <div class="cv-section-title border-bottom">
            <h5>{{ sectionTitle }}</h5>
        </div>
        <div class="cv-section-body border-bottom">
            <div v-for="(item, index) in items" :key="index" class="cv-section-item">
                <div class="row justify-content-between">
                    <div class="col item-company">
                        <span class="font-weight-bold item-company-title">{{ item.Company[0] }}</span>
                        <span v-if="item.Company[1]" class="xxs">       
                            <span v-if="!checkurl(item.Company[1])">({{ item.Company[1] }})</span>
                            <span v-else><a :href="item.Company[1]" class="item-company-link"> (LINK)</a></span>
                        </span>
                    </div>
                    <div class="col-2.5 item-location text-right">
                        <span>
                            <span v-if="!checkurl(item.Location[0])">{{ item.Location[0] }}</span>
                            <span v-else><a :href="item.Location[0]"><slot name="locationlink">Link to Project</slot></a></span>
                        </span>
                        <span v-if="item.Location[1]" class="xxs">({{ item.Location[1] }})</span>
                    </div>
                </div>
                <div class="row justify-content-between font-italic">
                    <div class="col item-title">
                        <span>{{ item.Title[0] }}</span>
                        <span v-if="item.Title[1]" class="xxs">({{ item.Title[1] }})</span>                      
                    </div>
                    <div class="col-2.5 item-time text-right d-none d-sm-block">
                        <span v-for="(time, index) in item.StartTime" :key="index" class="item-start-time"> {{ time }}</span>
                        <span v-for="(time, index) in item.EndTime" :key="index" class="item-end-time">- {{ time }}</span>
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
//import Bodynav from './Bodynav.vue';

export default {
    props: ['items', 'sectionTitle'],
    data() {
        return {
            //
        }
    },
    computed: {
            //
    },
    methods: {
        checkurl(str){
            const strurl=str.slice(0, 4);
            if(strurl=="http"){
                return true;
            }else{
                return false;
            }
        }
    },
    components: {
        //appBodynav: Bodynav,
    }    
}
</script>
<style style lang="scss">

</style>