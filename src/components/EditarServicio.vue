<template>
    <div>
        <NavBar />
        <div class="container">
            

            <div class="card text-bg-dark mt-4 mb-4 px-3">

                <h2 class="text-center mt-2">Editar Servicio</h2>
                <form @submit.prevent="editServicio">
                    <div class="row">
                        <div class="col">
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="name">Nombre</label>
                                    <input type="text" class="form-control" id="name" v-model="formData.name" required>
                                </div>
                                <div class="col">
                                    <label for="price">Precio</label>
                                    <input type="number" class="form-control" id="price" v-model="formData.price" required>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="description">Descripción</label>
                                    <textarea class="form-control" id="description" v-model="formData.description" required></textarea>
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
                name: '',
                description: '',
                price: '',
            },
            errorMessage: '',
        };
    },
    mounted () {
        this.getServicioData();
    },
    methods: {
        async getServicioData() {
            try {
                const baseUrl = process.env.VUE_APP_URL_BACK;
                const response = await axios.get(baseUrl+"/service/"+this.$route.params.id);
                this.formData = response.data;

                console.log(this.formData);
            } catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }
        },
        async editServicio() {
            try {
                
                const baseUrl = process.env.VUE_APP_URL_BACK;
                const response = await axios.post(baseUrl+"/service", this.formData);
                
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
