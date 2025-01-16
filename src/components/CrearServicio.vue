<template>
    <div>
        <NavBar />
        <div class="container">
            

            <div class="card text-bg-dark mt-4 mb-4 px-3">

                <h2 class="text-center mt-2">Crear Servicio</h2>
                <form @submit.prevent="createServicio">
                    <div class="row">
                        <div class="col">
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="name">Nombre</label>
                                    <input type="text" class="form-control" id="name" v-model="formData.name" required>
                                </div>
                                <div class="col">
                                    <label for="price">Precio</label>
                                    <input type="number"  step="0.01" class="form-control" id="price" v-model="formData.price" required>
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
    mounted() {
        if (!localStorage.getItem('userType')) {
            this.$router.push('/Signin');
        }
        if (localStorage.getItem('userType') !== 'emp') {
            this.$router.push('/');
        }
    },
    methods: {
        async createServicio() {
            try {
                
                const baseUrl = process.env.VUE_APP_URL_BACK;
                await axios.post(baseUrl+"/service", this.formData);
                
                router.back();  


            } catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }
        },
    },
};
</script>
