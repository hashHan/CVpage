//import data from '../../data/data';
import education from '../../data/sectiondata/education';
import information from '../../data/sectiondata/information';
import portfolio from '../../data/sectiondata/portfolio';
import work from '../../data/sectiondata/work';

const state = {
    education,
    information,
    portfolio,
    work
};

const mutations = {
    // 'SET_STOCKS' (state, stocks) {
    //     state.stocks = stocks;
    // },
    // 'RND_STOCKS' (state) {
    //     state.stocks.forEach(stock => {
    //         stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    //     });
    // }
};

const actions = {
    // buyStock: ({commit}, order) => {
    //     commit('BUY_STOCK', order);
    // },
    // initStocks: ({commit}) => {
    //     commit('SET_STOCKS', stocks);
    // },
    // randomizeStocks: ({commit}) => {
    //     commit('RND_STOCKS');
    // }
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
};

export default {
    state,
    mutations,
    actions,
    getters
};