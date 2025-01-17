<template class="container-fluid" >
    <body style="background-color: #BDB9B9;  min-height: 100vh;">
      <NavBar />
      
      
      <div class="container mt-4">
          <div class="row">
              <div class="col-3">
                  <MenuAdmin />
              </div>
              <div class="col card text-bg-secondary">
                  <div class="d-flex justify-content-between align-items-center mt-4">
                      <h2>Gestión habitaciones</h2>
                      <a href="/nuevaHabitacion" class="btn btn-outline-light">Añadir habitacion</a>
                  </div>
                  <table class="table-secondary table table-striped mt-4">
                      <thead>
                          <tr>
                              <th>Código</th>
                              <th>Planta</th>
                              <th>Capacidad</th>
                              <th>Tipo</th>
                              <th>Precio</th>
                              <th>Descripción</th>
                              <th>Disponible</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(room) in rooms" :key="room.id">
                              <td>{{ room.code }}</td>
                              <td>{{ room.floor }}</td>
                              <td>{{ room.people }}</td>
                              <td>{{ room.type }}</td>
                              <td>{{ room.base_price }}</td>
                              <td>{{ room.description }}</td>
                              <td>
                                  <button v-if="room.active" class="btn btn-success" @click="toggleRoom(room.id)">
                                      Disponible
                                  </button>
                                  <button v-else class="btn btn-danger" @click="toggleRoom(room.id)">
                                      No disponible
                                  </button>
                              </td>
                              <td>
                                  <button class="btn" @click="editRoom(room.id)">
                                      <i class="bi bi-pencil-square"></i>
                                  </button>
                                  <button class="btn" @click="deleteRoom(room.id)">
                                      <i class="bi bi-trash"></i>
                                  </button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
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
      rooms: [],
    };
  },
  mounted (){
    if (!localStorage.getItem('userType')) {
        this.$router.push('/Signin');
    }
    if (localStorage.getItem('userType') !== 'emp') {
        this.$router.push('/');
    }
    this.getRooms();
  },
  methods: {
    async getRooms(){
      const baseUrl = process.env.VUE_APP_URL_BACK;
        const response = await axios.get(baseUrl+"/room", {
            withCredentials: false
        });
        this.rooms = response.data;
        this.rooms.sort((a, b) => {
            return a.code - b.code;
        });
    },
    async toggleRoom(id) {
      const baseUrl = process.env.VUE_APP_URL_BACK;
      await axios.put(baseUrl+"/room/updateActive/"+id, {
          withCredentials: false
      });
      this.getRooms();     
    },
    editRoom(id) {
      this.$router.push(`/habitaciones/editar/${id}`);
    },
    async deleteRoom(id) {
      const confirmation = confirm('¿Estás seguro de que quieres eliminar esta habitación?');
      if (confirmation) {
        const baseUrl = process.env.VUE_APP_URL_BACK;
        await axios.delete(baseUrl+"/room/"+id, {
            withCredentials: false
        });
        this.getRooms();
      }
    },
  },
};
</script>


