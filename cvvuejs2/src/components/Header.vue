<template>
    <div id="header" class="row justify-content-between">
        <div class="col col-md-auto text-center mb-3">
            <div id="cv-name"><h1 id="cv-name-font" class="display-4 font-weight-bold">{{ name }}</h1></div>
            <div id="cv-email"><h6>E-mail: {{ email }}</h6></div>
            <div id="cv-homepage"><h6>BLOG: <a :href="homepage">{{ homepage }}</a></h6></div>
            <div id="cv-git"><h6>GITHUB REPO: <a :href="GITHUBREPO">{{ GITHUBREPO }}</a></h6></div>
            <div v-if="false" class="notimportant d-none d-sm-block">
                <div id="phone">{{ phone }}</div>
                <div id="address">{{ address }}</div>
            </div>
        </div>

    </div>  
</template>
<script>


export default {
    data() {
        return {
            name: "HAESEONG HAN",
            email: "haeseong.han@gmail.com",
            homepage: "https://bloghaeseong.firebaseapp.com/",
            GITHUBREPO: "https://github.com/hashHan",
            phone: "phone",
            address: "address"
        }
    },
    components: {
            
           
    },
    computed: {
        // 
    },
    methods: {
       
        
    }
}
</script>
<style style lang="scss">



</style>


