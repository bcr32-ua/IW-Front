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
                                    <td>{{ user.nombre }}</td>
                                    <td>{{ user.apellido }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.telefono }}</td>
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

export default {
  components: {
    NavBar,
    MenuAdmin,
  },
  data() {
    return {
        users: [{
            id: 1,
            nombre: 'Ivan',
            apellido: 'Garcia',
            email: 'ivan@ua.es',
            telefono: '123456789',
        },
        {
            id: 2,
            nombre: 'Pepe',
            apellido: 'Garcia',
            email: 'pepe@ua.es',
            telefono: '123456788',
        }
      ],
    };
  },
  mounted () {
    this.getUsers();
    console.log('Clientes obtenidos');
  },
  methods: {
    async getUsers() {
      try {
        /*const response = await axios.get('http://localhost:3000/recepcionistas');
        this.users = response.data;*/
        console.log('Recepcionistas obtenidos');
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser(id) {
      try {
        const confirmation = confirm('¿Estás seguro de que quieres eliminar este usuario?');
        if (!confirmation) {
          return;
        }
        /*const response = await axios.delete(`http://localhost:3000/users/${id}`);
        console.log(response);*/
        this.users = this.users.filter((user) => user.id !== id);
        console.log('Usuario eliminado ', id);
      } catch (error) {
        console.error(error);
      }
    },
    editUser(id) {
        console.log('Editar user ', id);
      this.$router.push(`/usuarios/editar/${id}`);
    }    
  }
};
</script>