import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/HomePage.vue';
import FacilitiesPage from '../components/FacilitiesPage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage }, // Default route
        { path: '/instalaciones', component: FacilitiesPage }, // Default route
    ],
});
