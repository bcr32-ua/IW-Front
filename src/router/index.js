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
import CrearHabitacion from '../components/CrearHabitacion.vue';
import EditarHabitacion from '../components/EditarHabitacion.vue';
import GestionTemporadas from '../components/GestionTemporadas.vue';
import CrearTemporada from '../components/CrearTemporada.vue';
import PerfilRegistrado from "../components/PerfilRegistrado.vue";
import EditarPerfil from '@/components/EditarPerfil.vue';
import EditarTemporada from '../components/EditarTemporada.vue';
import GestionServicios from '../components/GestionServicios.vue';
import CrearServicio from '../components/CrearServicio.vue';
import EditarServicio from '../components/EditarServicio.vue';
import GestionReservas from '../components/GestionReservas.vue';
import CrearReserva from '../components/CrearReserva.vue';
import EditarReserva from '../components/EditarReserva.vue';
import FiltroHabitaciones from '@/components/FiltroHabitaciones.vue';
import MisReservas from '@/components/MisReservas.vue';
import ContactPage from '@/components/ContactPage.vue';
import ProcesoReserva from '../components/ProcesoReserva.vue';
import ReservaCompletada from '../components/ReservaCompletada.vue';
import seasonsPage from '@/components/seasonsPage.vue';
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
        { path: '/nuevaHabitacion', component: CrearHabitacion },
        { path: '/habitaciones/editar/:id', component: EditarHabitacion },
        { path: '/gestionTemporadas', component: GestionTemporadas },
        { path: '/temporadas/editar/:id', component: EditarTemporada },
        { path: '/nuevaTemporada', component: CrearTemporada },
        { path: '/gestionServicios', component: GestionServicios },
        { path: '/nuevoServicio', component: CrearServicio },
        { path: '/servicios/editar/:id', component: EditarServicio },
        { path: '/gestionReservas', component: GestionReservas },
        {  path: '/nuevaReserva', component: CrearReserva },
        {  path: '/reservas/editar/:id', component: EditarReserva },
        { path: '/perfil-registrado', component: PerfilRegistrado},
        { path: '/editarPerfil', component: EditarPerfil},
        { path: '/filtroHabitaciones', component: FiltroHabitaciones},
        { path: '/MisReservas', component: MisReservas},
        { path: '/contact-page', component: ContactPage},
        { path: '/procesoReserva', name: 'ProcesoReserva', component: ProcesoReserva},
        { path: '/reservaCompletada', component: ReservaCompletada },
        { path: '/seasons', component: seasonsPage},
    ],
});
