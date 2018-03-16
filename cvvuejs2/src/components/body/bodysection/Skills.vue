<template>
    <div id="cv-skills" class="">
        <div class="cv-section-title border-bottom">
            <h5>{{ sectionTitle }}</h5>
        </div>
        <div class="cv-section-body border-bottom">
            <div class="row justify-content-between">
                <div v-for="(item, index) in items" :key="index" class="cv-section-item col">
                    <div class="font-weight-bold text-center">{{ item.Section[0] }}</div>
                    <ul class="item-descriptions">
                        <li v-for="(content, index) in item.Contents" :key="index" class="item-description">{{ content }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import Section from '../Section.vue';
//import {mapGetters} from 'vuex';
import axios from 'axios';

export default {
    data() {
        return {
            sectionTitle: "TECHNICAL EXPERTISE",
            items: []
        }
    },
    computed: {
        // ...mapGetters({
        // items: 'getskills' //getter
        // })
        //     //
    },
    methods: {
            //
    },
    components: {
        //appSection: Section,
    },
    created () {
      axios.get('/body/skills.json')
        .then(res => {
          //console.log(res)
          this.items = res.data;
          console.log(this.items);
        })
        .catch(error => console.log(error))
    }      
}
</script>
<style style lang="scss">

</style>