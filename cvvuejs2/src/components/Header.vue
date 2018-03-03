<template>
    <div id="cv-header" class=" text-center">
        <div id="cv-name"><h1 id="cv-name-font" class="display-4 font-weight-bold">HAESEONG HAN</h1></div>
        <div id="cv-email"><h6 class="">haeseong.han@gmail.com</h6></div>
        <div id="cv-homepage"><h6><a href="#">Github Page : address for printing</a></h6></div>
        <div class="notimportant d-none d-sm-block">
          <div id="phone">phone - v-if</div>
          <div id="address">address - v-if</div>
        </div>
    </div>  
</template>
<script>
// import {mapActions} from 'vuex';

export default {
    data() {
        return {
            // isDropdownOpen: false
        }
    },
    computed: {
        // funds() {
        //     return this.$store.getters.funds;
        // }
    },
    methods: {
        // ...mapActions({
        //     randomizeStocks: 'randomizeStocks',
        //     fetchData: 'loadData'
        // }),
        // endDay() {
        //     this.randomizeStocks();
        // },
        // saveData() {
        //     const data = {
        //         funds: this.$store.getters.funds,
        //         stockPortfolio: this.$store.getters.stockPortfolio,
        //         stocks: this.$store.getters.stocks
        //     };
        //     this.$http.put('data.json', data);
        // },
        // loadData() {
        //     this.fetchData();
        // }
    }
}
</script>


