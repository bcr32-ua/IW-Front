<template class="container-fluid" >
    <body style="background-image:url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGt5b3RvfGVufDB8fDB8fHww'); height: 100vh; background-size: cover;">
      <NavBar />
      
      
      <div class="container mt-4">
          <div class="row">
              <div class="col-3">
                  <MenuAdmin />
              </div>
              <div class="col card text-bg-secondary">
                  <div class="d-flex justify-content-between align-items-center mt-4">
                      <h2>Gestión habitaciones</h2>
                      <a href="/nuevoUsuario" class="btn btn-outline-light">Añadir usuario</a>
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
                          <tr v-for="(room) in rooms" :key="room.code">
                              <td>{{ room.code }}</td>
                              <td>{{ room.floor }}</td>
                              <td>{{ room.people }}</td>
                              <td>{{ room.type }}</td>
                              <td>{{ room.base_price }}</td>
                              <td>{{ room.description }}</td>
                              <td>
                                  <button v-if="room.active" class="btn btn-success" @click="toggleRoom(room.code, room.active)">
                                      Disponible
                                  </button>
                                  <button v-else class="btn btn-danger" @click="toggleRoom(room.code, room.active)">
                                      No disponible
                                  </button>
                              </td>
                              <td>
                                  <button class="btn" @click="editRoom(room.code)">
                                      <i class="bi bi-pencil-square"></i>
                                  </button>
                                  <button class="btn" @click="deleteRoom(room.code)">
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

export default {
  components: {
    NavBar,
    MenuAdmin,
  },
  data() {
    return {
      rooms: [
        {
          code: '101',
          floor: '1',
          people: '2',
          type: 'Doble',
          base_price: '50',
          description: 'Habitación doble con cama de matrimonio',
          active: true,
        },
        {
          code: '102',
          floor: '1',
          people: '1',
          type: 'Individual',
          base_price: '30',
          description: 'Habitación individual con cama de matrimonio',
          active: false,
        },
        
      ],
    };
  },
  methods: {
    toggleRoom(code, active) {
      const room = this.rooms.find((room) => room.code === code);
      if (room) {
        room.active = !active;
        console.log(`Habitación ${code} actualizada: ${room.active ? 'Disponible' : 'No disponible'}`);
      }
    },
    editRoom(code) {
      console.log('Editar habitación', code);
      this.$router.push(`/habitaciones/editar/${code}`);
    },
    deleteRoom(code) {
      const confirmation = confirm('¿Estás seguro de que quieres eliminar esta habitación?');
      if (confirmation) {
        this.rooms = this.rooms.filter((room) => room.code !== code);
        console.log('Habitación eliminada', code);
      }
    },
  },
};
</script>


