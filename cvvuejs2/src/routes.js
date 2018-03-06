import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Body from './components/body/Body.vue';
import Portfolio from './components/body/bodysection/Portfolio.vue';
import Work from './components/body/bodysection/Work.vue';
import Education from './components/body/bodysection/Education.vue';
import Skills from './components/body/bodysection/Skills.vue';
import Otherinfo from './components/body/bodysection/Otherinfo.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/body', component: Body },
    { path: '/header', component: Header },
    { path: '/footer', component: Footer },
   
    { path: '/portfolio', component: Portfolio },
    { path: '/work', component: Work },
    { path: '/education', component: Education },
    { path: '/skills', component: Skills },
    { path: '/otherinfo', component: Otherinfo },
];