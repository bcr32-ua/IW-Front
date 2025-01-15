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
                                <h2>Gestión temporadas</h2>
                                <a href="/nuevaTemporada" class="btn btn-outline-light">Añadir temporada</a>
                            </div>
                            <table class="table-secondary table table-striped mt-4">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Multiplicador</th>
                                        <th>Fecha inicio</th>
                                        <th>Fecha fin</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(temporada) in temporadas" :key="temporada.id">
                                        <td>{{ temporada.type }}</td>
                                        <td>{{ temporada.multiplier }}</td>
                                        <td>{{ formatDate(temporada.season_start) }}</td>
                                        <td>{{ formatDate(temporada.season_end) }}</td>
                                        <td>
                                            <button class="btn" @click="editTemporada(temporada.id)"><i class="bi bi-pencil-square"></i></button>
                                            <button class="btn" @click="deleteTemporada(temporada.id)"><i class="bi bi-trash"></i></button>
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
        temporadas: []
    }
  },
  mounted() {
    this.getTemporadas();
  },
  methods: {
    async getTemporadas() {
        const baseUrl = process.env.VUE_APP_URL_BACK;
        const response = await axios.get(baseUrl+"/season", {
            withCredentials: false
        });
        console.log(response.data);
        this.temporadas = response.data;
        
        this.temporadas.sort((a, b) => {
            return new Date(a.season_start) - new Date(b.season_start);
        });
    },
    formatDate(date) {
        return new Date(date).toLocaleDateString();
    },
    async editTemporada(id) {
        this.$router.push(`/temporadas/editar/${id}`);
    },
    async deleteTemporada(id) {
        const confirmation = confirm('¿Estás seguro de que quieres eliminar esta habitación?');
        if (confirmation) {
            const baseUrl = process.env.VUE_APP_URL_BACK;
            await axios.delete(baseUrl+"/season/"+id, {
                withCredentials: false
            });
            this.getTemporadas();
        }
        
    },
  }
}

</script>