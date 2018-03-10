<template>
    <div id="header" class="row justify-content-between">
        <div class="col-2"></div>
        <div class="col col-md-auto text-center">
            <div id="cv-name"><h1 id="cv-name-font" class="display-4 font-weight-bold">{{ name }}</h1></div>
            <div id="cv-email"><h6 class="">{{ email }}</h6></div>
            <div id="cv-homepage"><h6><a :href="homepage">Github Page : {{ homepage }}</a></h6></div>
            <div class="notimportant d-none d-sm-block">
                <div id="phone">{{ phone }}</div>
                <div id="address">{{ address }}</div>
            </div>
        </div>
        <div class="col-2 text-right"><appNav></appNav></div>

    </div>  
</template>
<script>
import Nav from './Nav.vue';

export default {
    data() {
        return {
            name: "HAESEONG HAN",
            email: "haeseong.han@gmail.com",
            homepage: "#",
            phone: "phone",
            address: "address",
        }
    },
    components: {
            appNav: Nav
    },
    computed: {
        // 
    },
    methods: {
        // 
    }
}
</script>
<style style lang="scss">



</style>


