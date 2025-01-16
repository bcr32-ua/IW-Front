<template>
    <div style="background-image:url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGt5b3RvfGVufDB8fDB8fHww'); height: 100vh; background-size: cover;">
        <NavBar />
        <div class="container">

            <div v-if="!bookOk" class="card text-bg-dark mt-4 mb-4 px-3">
                <h2 class="text-center mt-2">Detalles de la reserva</h2>
                <form @submit.prevent="detailsReserva">
                    <div class="row">
                        <div class="col">
                            <div class="row mt-2">
                                <div class="col">
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
                                    <label for="notes">Indique cualquier tipo de indicación a tener en cuenta:</label>
                                    <textarea class="form-control mt-2" id="notes" v-model="formData.notes"></textarea>
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
                    <table class="table-secondary table table-striped">
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
        if (!localStorage.getItem('userType')) {
            this.$router.push('/Signin');
        }
        
        try {
            const baseUrl = process.env.VUE_APP_URL_BACK;

            const rooms = await axios.get(`${baseUrl}/room`);
            this.rooms = rooms.data;
            
            const services = await axios.get(`${baseUrl}/service`);
            this.services = services.data;

            // datos del cliente
            const userId = localStorage.getItem('userId');
            const user = await axios.get(`${baseUrl}/user/${userId}`);
            this.formData.user = user.data.email;
            this.bookingData.user = user.data;

            //fecha
            if(this.$route.params.startDate) {
                this.formData.start_date = this.$route.params.startDate;
            }
            if(this.$route.params.endDate) {
                this.formData.end_date = this.$route.params.endDate;
            }

            this.bookingData.start_date = this.formData.start_date;
            this.bookingData.end_date = this.formData.end_date;

            if(this.$route.params.people) {
                this.people = this.$route.params.people;
                this.beds = this.$route.params.rooms;
            }
            if(this.$route.params.roomId) {
                this.formData.room = this.rooms.find(room => room.id == this.$route.params.roomId);
            }

            
            this.nDays = ((new Date(this.bookingData.end_date) - new Date(this.bookingData.start_date)) / (1000 * 60 * 60 * 24));

            const season = await axios.get(`${baseUrl}/season/date`, {
                params: { date: this.bookingData.start_date.split('T')[0]},
            });
            if(!season.data) {
                this.errorMessage = 'Temporada no encontrada';
                return;
            }
            this.bookingData.season = season.data;


        } catch (error) {
            this.errorMessage =
                error.response?.data || 'An error occurred. Please try again.';
        }

    
    },
    methods: {
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
                this.bookingData.notes = this.formData.notes;

                this.bookOk = true;
            }catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }

        },
        async confirmReserva() {
            try {
                var booking_str = JSON.stringify(this.bookingData);

                await axios.post(`https://green-sys.es/sales`, {
                    amount: this.bookingData.total_price,
                    description: 'Reserva de habitación',
                    currency: 'EUR',
                    reference: this.bookingData.user.email+'-'+this.bookingData.room.code+'-'+this.bookingData.start_date+'-'+this.bookingData.end_date,
                    url_callback: 'https://frolicking-pavlova-d115a9.netlify.app/ReservaCompletada?booking='+booking_str,
                });
                
                



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
