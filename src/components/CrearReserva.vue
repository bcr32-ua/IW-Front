<template>
    <div>
        <NavBar />
        <div class="container">
            

            <div class="card text-bg-dark mt-4 mb-4 px-3">

                <h2 class="text-center mt-2">Crear reserva</h2>
                <form @submit.prevent="createReserva">
                    <div class="row">
                        <div class="col">
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="user">Usuario</label>
                                    <input type="email" class="form-control" id="user" v-model="formData.user" required>
                                </div>
                                <div class="col">
                                    <label for="people">Número de personas</label>
                                    <select class="form-select" v-model="people" required>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label for="beds">Número de camas</label>
                                    <select class="form-select" id="beds" v-model="beds" required>
                                        <option value="1">Simple</option>
                                        <option value="2">Doble (dos camas)</option>
                                        <option value="1">Doble (una cama)</option>
                                        <option value="2">Triple</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="start_date">Fecha de entrada</label>
                                    <input type="date" class="form-control" id="start_date" v-model="formData.start_date" required>
                                </div>
                                <div class="col">
                                    <label for="end_date">Fecha de salida</label>
                                    <input type="date" class="form-control" id="end_date" v-model="formData.end_date" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 mb-3 d-flex justify-content-center">
                        <button type="submit" class="btn btn-light">Buscar</button>
                    </div>
                </form>
            </div>

            <div v-if="formOk" class="card text-bg-dark mt-4 mb-4 px-3">
                <h2 class="text-center mt-2">Detalles</h2>
                <form @submit.prevent="detailsReserva">
                    <div class="row">
                        <div class="col">
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="room">Habitaciones disponibles</label>
                                    <table class="table-secondary table table-striped mt-2">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Habitacion</th>
                                                <th>Precio</th>
                                                <th>Descripcion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(room) in rooms" :key="room.id">
                                                <td>
                                                    <input type="radio" name="room" v-model="formData.room" :value="room" required>
                                                </td>
                                                <td>{{ room.code }}</td>
                                                <td>{{ room.base_price }}€ </td>
                                                <td>{{ room.description }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="services">Servicios</label>
                                    <table class="table-secondary table table-striped mt-2">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Servicio</th>
                                                <th>Precio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(service) in services" :key="service.id">
                                                <td>
                                                    <input type="checkbox" name="services" v-model="formData.services" :value="service">
                                                </td>
                                                <td>{{ service.name }}</td>
                                                <td>{{ service.price }}€ </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="notes">Notas</label>
                                    <textarea class="form-control" id="notes" v-model="formData.notes"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 mb-3 d-flex justify-content-center">
                        <button type="submit" class="btn btn-light">Confirmar datos</button>
                    </div>
                </form>
            </div>

            <div v-if="bookOk" class="card text-bg-dark mt-4 mb-4 px-3">
                <h2 class="text-center mt-2">Resumen</h2>
                <form @submit.prevent="confirmReserva">
                    <table class="table-secondary table table-striped mt-4">
                        <tbody>
                            <tr>
                                <td><strong>Usuario</strong></td>
                                <td> {{ bookingData.user.email }}</td>
                            </tr>
                            <tr>
                                <td><strong>Fechas</strong></td>
                                <td> {{ formatDate(bookingData.start_date) }} - {{ formatDate(bookingData.end_date) }} </td>
                            </tr>
                            <tr>
                                <td><strong>Habitacion</strong></td>
                                <td> {{ bookingData.room.base_price }}€ * {{ nDays }} dias = {{ price.room }}€ </td>
                            </tr>
                            <tr>
                                <td><strong>Aumento temporada</strong></td>
                                <td> {{ bookingData.season.type }} (x{{ bookingData.season.multiplier }})  - {{ price.season }}€ </td>
                            </tr>
                            <tr>
                                <td><strong>Servicios</strong></td>
                                <td>
                                    <ul>
                                        <li v-for="service in bookingData.services" :key="service.id">{{ service.name }} - {{ service.price }}€</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td> {{ bookingData.total_price }}€</td>
                            </tr>
                            <tr>
                                <td><strong>Notas</strong></td>
                                <td> {{ bookingData.notes }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="mt-4 mb-3 d-flex justify-content-center">
                        <button class="btn btn-light">Reservar</button>
                    </div>
                </form>
            </div>



            <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage}}
            </div>
        
        </div>    
    </div>
</template>

<script>
import router from '@/router';
import NavBar from '../components/NavBar.vue';
import axios from 'axios';

export default {
  components: {
    NavBar,
    },
    data() {
        return {
            formData: {
                user: '',
                room: '',
                season: '',
                start_date: '',
                end_date: '',
                services: [],
                total_price: '',
                notes: '',
            },
            bookingData: {
                user: '',
                room: '',
                season: '',
                start_date: '',
                end_date: '',
                services: [],
                total_price: '',
                notes: '',
            },
            formOk: false,
            bookOk: false,
            errorMessage: '',
            rooms: [],
            services: [],
            nDays: 0,
            people: 0,
            beds: 0,
            price: {
                room: 0,
                season: 0,
                services: 0,
            }
        };
    },
    async mounted() {
        try {
            const baseUrl = process.env.VUE_APP_URL_BACK;

            const rooms = await axios.get(`${baseUrl}/room`);
            this.rooms = rooms.data;
            
            const services = await axios.get(`${baseUrl}/service`);
            this.services = services.data;


        } catch (error) {
            this.errorMessage =
                error.response?.data || 'An error occurred. Please try again.';
        }

    
    },
    methods: {
        async createReserva() {
            try {
                this.errorMessage = '';
                this.formOk = false;
                
                const baseUrl = process.env.VUE_APP_URL_BACK;
                
                const user = await axios.get(`${baseUrl}/user/email`, {
                    params: { email: this.formData.user },
                });
                if (!user.data) {
                    this.errorMessage = 'Usuario no encontrado';
                    return;
                }
                this.bookingData.user = user.data;

                this.bookingData.start_date = this.formData.start_date;
                this.bookingData.end_date = this.formData.end_date;

                const rooms = await axios.get(`${baseUrl}/room/available`, {
                    params: { start_date: this.bookingData.start_date.split('T')[0], end_date: this.bookingData.end_date.split('T')[0], people: this.people, beds: this.beds },
                });
                console.log("params ", this.bookingData.start_date.split('T')[0], this.bookingData.end_date.split('T')[0], this.people, this.beds);
                console.log("habitaciones ", rooms.data);
                if (rooms.data.length === 0) {
                    this.errorMessage = 'No hay habitaciones disponibles';
                    return;
                }
                this.rooms = rooms.data;

                this.nDays = ((new Date(this.bookingData.end_date) - new Date(this.bookingData.start_date)) / (1000 * 60 * 60 * 24));
                console.log("#### ", this.bookingData.start_date.split('T')[0]);

                const season = await axios.get(`${baseUrl}/season/date`, {
                    params: { date: this.bookingData.start_date.split('T')[0]},
                });
                if(!season.data) {
                    this.errorMessage = 'Temporada no encontrada';
                    return;
                }
                this.bookingData.season = season.data;

                this.formOk = true;

                console.log("--------------------");
                console.log(this.bookingData);


            } catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }
        },
        async detailsReserva() {
            try {

                this.errorMessage = '';
                this.bookOk = false;

                this.bookingData.room = this.formData.room;
                this.bookingData.services = this.formData.services;

                this.price.room = this.bookingData.room.base_price * this.nDays;
                this.price.season = this.bookingData.season.multiplier * this.price.room;

                this.price.services = this.bookingData.services.reduce((acc, service) => acc + service.price, 0) * this.nDays;
                this.bookingData.total_price = this.price.season + this.price.services;
                // redondear a dos decimales
                this.bookingData.total_price = Math.round(this.bookingData.total_price * 100) / 100;

                this.bookOk = true;
            }catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }

        },
        async confirmReserva() {
            try {

                const baseUrl = process.env.VUE_APP_URL_BACK;                
                await axios.post(baseUrl+"/booking", this.bookingData);

                router.back();  


            } catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }
        },
        formatDate(date) {
        return new Date(date).toLocaleDateString();
        },
    },
};
</script>
