import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/HomePage.vue';
import FacilitiesPage from '../components/FacilitiesPage.vue';
import HabitacionesPage from "../components/HabitacionesPage.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/instalaciones', component: FacilitiesPage },
        { path: '/habitaciones', component: HabitacionesPage },
    ],
});
