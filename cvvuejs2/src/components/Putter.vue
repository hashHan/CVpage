<template>
    <div id="putter" class="">
       <button class="btn btn-primary" @click="onSubmit">putter</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';

export default {
    data() {
        return {
           
        }
    },
    computed: {
        ...mapGetters({
        work: 'getwork', //getter
        education: 'geteducation',
        portfolio: 'getportfolio',
        information: 'getinformation',
        skills:'getskills'
        })
            
    },
    methods: {
        onSubmit () {
            // const formData = {
            //     email: this.email,
            //     age: this.age,
            //     password: this.password,
            //     confirmPassword: this.confirmPassword,
            //     country: this.country,
            //     hobbies: this.hobbyInputs.map(hobby => hobby.value),
            //     terms: this.terms
            // }
            //console.log(formData)
            axios.put('https://cvhaeseong.firebaseio.com/body/education.json', this.education)
                .then(res => console.log(res))
                .catch(error => console.log(error));
            axios.put('https://cvhaeseong.firebaseio.com/body/portfolio.json', this.portfolio)
                .then(res => console.log(res))
                .catch(error => console.log(error));
            axios.put('https://cvhaeseong.firebaseio.com/body/information.json', this.information)
                .then(res => console.log(res))
                .catch(error => console.log(error));
            axios.put('https://cvhaeseong.firebaseio.com/body/skills.json', this.skills)
                .then(res => console.log(res))
                .catch(error => console.log(error));

        }
    },
    components: {
       
    }
}
</script>
<style style lang="scss">

</style>