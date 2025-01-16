<template>
    <div>
        <NavBar />
        <div class="container">
            

            <div class="card text-bg-dark mt-4 mb-4 px-3">

                <h2 class="text-center mt-2">Crear habitacion</h2>
                <form @submit.prevent="createHabitacion">
                    <div class="row">
                        <div class="col">
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="code">Codigo</label>
                                    <input type="text" class="form-control" id="code" v-model="formData.code" required>
                                </div>
                                <div class="col">
                                    <label for="floor">Planta</label>
                                    <select class="form-select" v-model="formData.floor" required>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label for="people">Gente</label>
                                    <select class="form-select" v-model="formData.people" required>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col">
                                    <label for="type">Tipo</label>
                                    <select class="form-select" v-model="formData.type" required>
                                        <option value="Simple">Simple</option>
                                        <option value="Doble (dos camas)">Doble (dos camas)</option>
                                        <option value="Doble (una cama)">Doble (una cama)</option>
                                        <option value="Triple">Triple</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label for="base_price">Precio</label>
                                    <input type="number" step="0.01" class="form-control" id="base_price" v-model="formData.base_price" required>
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
                code: '',
                floor: '',
                people: '',
                type: '',
                base_price: '',
                description: '',
                active: false,
            },
            errorMessage: '',
        };
    },
    methods: {
        async createHabitacion() {
            try {
                
                const baseUrl = process.env.VUE_APP_URL_BACK;
                await axios.post(baseUrl+"/room", this.formData);
                
                router.back();  


            } catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }
        },
    },
};
</script>
