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
                                    <label for="user_id">Usuario</label>
                                    <input type="text" class="form-control" id="user_id" v-model="formData.user_id" required>
                                </div>
                                <div class="col">
                                    <label for="room_id">Habitacion</label>
                                    <input type="number" class="form-control" id="room_id" v-model="formData.room_id" required>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="season_id">Temporada</label>
                                    <input type="text" class="form-control" id="season_id" v-model="formData.season_id" required>
                                </div>
                                <div class="col">
                                    <label for="start_date">Fecha de entrada</label>
                                    <input type="date" class="form-control" id="start_date" v-model="formData.start_date" required>
                                </div>
                                <div class="col">
                                    <label for="end_date">Fecha de salida</label>
                                    <input type="date" class="form-control" id="end_date" v-model="formData.end_date" required>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="notes">Notas</label>
                                    <textarea class="form-control" id="notes" v-model="formData.notes" required></textarea>
                                </div>
                            </div>
                                                          
                            
                        </div>
                    </div>
                    <div class="mt-4 mb-3 d-flex justify-content-center">
                        <button type="submit" class="btn btn-light">Crear</button>
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
                user_id: '',
                room_id: '',
                season_id: '',
                start_date: '',
                end_date: '',
                total_price: '',
                notes: '',
            },
            errorMessage: '',
        };
    },
    methods: {
        async createReserva() {
            try {
                
                const baseUrl = process.env.VUE_APP_URL_BACK;
                const user =  await axios.get(baseUrl+"/user/1");

                this.formData.user_id = user.data;
                this.formData.room_id = 1;
                this.formData.season_id = 3;
                this.formData.start_date = '2021-12-01';
                this.formData.end_date = '2021-12-10';
                this.formData.total_price = 2000;
                this.formData.notes = 'Notas de la reserva';
                
                const response = await axios.post(baseUrl+"/booking", this.formData);
                
                console.log(response.data);
                router.back();

            } catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }
        },
        async confirmReserva() {
            try {

                const baseUrl = process.env.VUE_APP_URL_BACK;                
                const response = await axios.post(baseUrl+"/booking", this.formData);
                
                console.log(response.data);
                router.back();  


            } catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }
        },
    },
};
</script>
