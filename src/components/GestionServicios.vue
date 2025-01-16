<template class="container-fluid" >
    <body style="background-image:url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGt5b3RvfGVufDB8fDB8fHww'); height: 100vh; background-size: cover;">
        <NavBar />
            <div>
                <div class="container mt-4">

                    <div class="row">
                        <div class="col-3">
                            <MenuAdmin />
                        </div>
                        <div class="col card text-bg-secondary">
                            <div class="d-flex justify-content-between align-items-center  mt-4">
                                <h2>Gestión servicios</h2>
                                <a href="/nuevoServicio" class="btn btn-outline-light">Añadir servicio</a>
                            </div>
                            <table class="table-secondary table table-striped mt-4">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Descripcion</th>
                                        <th>Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(servicio) in servicios" :key="servicio.id">
                                        <td>{{ servicio.name }}</td>
                                        <td>{{ servicio.description }}</td>
                                        <td>{{ servicio.price }}</td>
                                        <td>
                                            <button class="btn" @click="editServicio(servicio.id)"><i class="bi bi-pencil-square"></i></button>
                                            <button class="btn" @click="deleteServicio(servicio.id)"><i class="bi bi-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    
    </body>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import MenuAdmin from '../components/MenuAdmin.vue';
import axios from 'axios';

export default {
  components: {
    NavBar,
    MenuAdmin,
  },
  data() {
    return {
        servicios: []
    }
  },
  mounted() {
    this.getServicios();
  },
  methods: {
    async getServicios() {
        const baseUrl = process.env.VUE_APP_URL_BACK;
        const response = await axios.get(baseUrl+"/service", {
            withCredentials: false
        });
        this.servicios = response.data;
    },
    async editServicio(id) {
        this.$router.push(`/servicios/editar/${id}`);
    },
    async deleteServicio(id) {
        const confirmation = confirm('¿Estás seguro de que quieres eliminar este servicio?');
        if (confirmation) {
            const baseUrl = process.env.VUE_APP_URL_BACK;
            await axios.delete(baseUrl+"/service/"+id, {
                withCredentials: false
            });
            this.getServicios();
        }
        
    },
  }
}

</script>