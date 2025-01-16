<template>
    <div>
        <NavBar />
        <div class="container">
            

            <div class="card text-bg-dark mt-4 mb-4 px-3">

                <h2 class="text-center mt-2">Editar temporada</h2>
                <form @submit.prevent="createTemporada">
                    <div class="row">
                        <div class="col">
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="type">Tipo</label>
                                    <input type="text" class="form-control" id="type" v-model="formData.type" required>
                                </div>
                                <div class="col">
                                    <label for="multiplier">Multiplicador</label>
                                    <input type="number" step="0.01" class="form-control" id="multiplier" v-model="formData.multiplier" required>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="season_start">Fecha inicio</label>
                                    <input type="date" class="form-control" id="season_start" v-model="formData.season_start" required>
                                </div>
                                <div class="col">
                                    <label for="season_end">Fecha fin</label>
                                    <input type="date" class="form-control" id="season_end" v-model="formData.season_end" required>
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
                id: '',
                type: '',
                season_start: '',
                season_end: '',
                multiplier: ''
            },
            errorMessage: '',
        };
    },
    mounted() {
        if (!localStorage.getItem('userType')) {
            this.$router.push('/Signin');
        }
        if (localStorage.getItem('userType') !== 'emp') {
            this.$router.push('/');
        }
        this.getTemporadaData();
    },
    methods: {
        async getTemporadaData() {
            try {
                const baseUrl = process.env.VUE_APP_URL_BACK;
                const response = await axios.get(baseUrl+"/season/"+this.$route.params.id);
                this.formData = response.data;

                this.formData.season_start = this.formData.season_start.split('T')[0];
                this.formData.season_end = this.formData.season_end.split('T')[0];

            } catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }
        },
        async createTemporada() {
            try {
                const baseUrl = process.env.VUE_APP_URL_BACK;
                await axios.post(baseUrl+"/season", this.formData);
                
                router.back();  


            } catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }
        },
    },
};
</script>

