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
                            <h2>Gestión recepcionistas</h2>
                            <a href="/nuevoUsuario" class="btn btn-outline-light">Añadir usuario</a>
                        </div>
                        <table class="table-secondary table table-striped mt-4">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellidos</th>
                                    <th>Email</th>
                                    <th>Telefono</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user) in users" :key="user.id">
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.lastname }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.phone }}</td>
                                    <td>
                                        <button class="btn" @click="editUser(user.id)"><i class="bi bi-pencil-square"></i></button>
                                        <button class="btn" @click="deleteUser(user.id)"><i class="bi bi-trash"></i></button>
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
        users: [],
    };
  },
  mounted () {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const baseUrl = process.env.VUE_APP_URL_BACK;
        const response = await axios.get(baseUrl+"/user", { params: { type: 'emp' }},
          {withCredentials: false});
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser(id) {
      try {
        const confirmation = confirm('¿Estás seguro de que quieres eliminar este cliente?');
        if (confirmation) {
          const baseUrl = process.env.VUE_APP_URL_BACK;
            await axios.delete(baseUrl+"/user/"+id, {
                withCredentials: false
            });
            this.getUsers();
        }
      } catch (error) {
        console.error(error);
      }
    },
    editUser(id) {
      this.$router.push(`/usuarios/editar/${id}`);
    }    
  }
};
</script>