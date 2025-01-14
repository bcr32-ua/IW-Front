import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/HomePage.vue';
import FacilitiesPage from '../components/FacilitiesPage.vue';
import HabitacionesPage from "../components/HabitacionesPage.vue";
import SignInPage from "../components/SignIn.vue";
import RegisterPage from "../components/RegisterPage.vue";
import GestionClientes from '../components/GestionClientes.vue';
import EditarUsuario from '../components/EditarUsuario.vue';
import CrearUsuario from '../components/CrearUsuario.vue';
import GestionRecepcion from '../components/GestionRecepcion.vue';
import GestionHabitaciones from '../components/GestionHabitaciones.vue';
import GestionTemporadas from '../components/GestionTemporadas.vue';
import CrearTemporada from '../components/CrearTemporada.vue';
import PerfilRegistrado from "../components/PerfilRegistrado.vue";
import EditarPerfil from '@/components/EditarPerfil.vue';
import FiltroHabitaciones from '@/components/FiltroHabitaciones.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/instalaciones', component: FacilitiesPage },
        { path: '/habitaciones', component: HabitacionesPage },
        { path: '/signin', component: SignInPage },
        { path: '/register', component: RegisterPage },
        { path: '/gestionclientes', component: GestionClientes },
        { path: '/usuarios/editar/:id', component: EditarUsuario },
        { path: '/nuevoUsuario', component: CrearUsuario },
        { path: '/gestionRecepcion', component: GestionRecepcion },
        { path: '/gestionHabitaciones', component: GestionHabitaciones },
        { path: '/gestionTemporadas', component: GestionTemporadas },
        { path: '/nuevaTemporada', component: CrearTemporada },
        { path: '/perfilRegistrado', component: PerfilRegistrado},
        { path: '/editarPerfil', component: EditarPerfil},
        { path: '/filtroHabitaciones', component: FiltroHabitaciones},
    ],
});
