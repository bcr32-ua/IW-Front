<template>
    <div class="editar-user-page">
        <NavBar />
        <div class="container">
            

            <div class="card text-bg-dark mt-4 px-3">

                <h2 class="text-center mt-2">Crear usuario</h2>
                <form @submit.prevent="createUser">
                    <div class="row">
                        <div class="col">
                            
                            <div class="form-group mb-2">
                                <label for="name">Nombre</label>
                                <input class="form-control" type="text" id="name" v-model="formData.name" placeholder="Nombre" required />
                            </div>
                            <div class="form-group mb-2">
                                <label for="email">Email</label>
                                <input class="form-control" type="email" id="email" v-model="formData.email" placeholder="nombre@ejemplo.com" required />
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input class="form-control" type="password" id="password" v-model="formData.password" placeholder="*********" required />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group mb-2">
                                <label for="lastname">Apellidos</label>
                                <input class="form-control" type="text" id="lastname" v-model="formData.lastname" placeholder="Apellidos" required />
                            </div>
                            <div class="form-group mb-2">
                                <label for="phone">Teléfono</label>
                                <input class="form-control" type="tel" id="phone" v-model="formData.phone" placeholder="123-456-789" required />
                            </div>
                            <div class="form-group">
                                <label for="type">Tipo de usuario</label>
                                <select class="form-select" id="type" v-model="formData.type" required>
                                    <option value="admin">Administrador</option>
                                    <option value="recepcion">Recepcion</option>
                                    <option value="user">Usuario</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 mb-3 d-flex justify-content-center">
                        <button type="submit" class="btn btn-light">Registrar</button>
                        
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
export default {
  components: {
    NavBar,
    },
    data() {
        return {
            formData: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                phone: '',
                type: ''
            },
            errorMessage: '',
        };
    },
    methods: {
        async createUser() {
            try {
                /*const response = await axios.post('http://localhost:3000/clientes', this.formData);
                console.log(response.data);*/
                console.log('Usuario añadido', this.formData);
                router.back();


            } catch (error) {
                this.errorMessage =
                    error.response?.data || 'An error occurred. Please try again.';
            }
        },
    },
};
</script>
