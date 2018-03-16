//import data from '../../data/data';
import education from '../../data/sectiondata/education';
import information from '../../data/sectiondata/information';
//import portfolio from '../../data/sectiondata/portfolio';
import work from '../../data/sectiondata/work';
import skills from '../../data/sectiondata/skills';
import axios from 'axios';

const state = {
    education,
    information,
    portfolio: [],
    work,
    skills
};

const mutations = {
    updatedata(state, data) {
        state.portfolio = data
    }
};

const actions = {
    loadData({commit}) {
        axios.get('/body/portfolio.json')
        .then(res => {
          //console.log(res)
          commit('updatedata', res.data)
          //this.items = res.data;
          //console.log(this.items);
        })
        .catch(error => console.log(error))
    }
        
};

const getters = {
    getportfolio: state => {
        return state.portfolio;
    },
    getwork: state => {
        return state.work;
    },
    geteducation: state => {
        return state.education;
    },
    getinformation: state => {
        return state.information;
    },   
    getskills: state => {
        return state.skills;
    }  
};

export default {
    state,
    mutations,
    actions,
    getters
};