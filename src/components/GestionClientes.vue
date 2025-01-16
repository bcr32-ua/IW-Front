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
                            <h2>Gestión clientes</h2>
                            <a href="/nuevoUsuario" class="btn btn-outline-light">Añadir cliente</a>
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
                                <tr v-for="(cliente) in clientes" :key="cliente.id">
                                    <td>{{ cliente.name }}</td>
                                    <td>{{ cliente.lastname }}</td>
                                    <td>{{ cliente.email }}</td>
                                    <td>{{ cliente.phone }}</td>
                                    <td>
                                        <button class="btn" @click="editCliente(cliente.id)"><i class="bi bi-pencil-square"></i></button>
                                        <button class="btn" @click="deleteCliente(cliente.id)"><i class="bi bi-trash"></i></button>
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
      clientes: [],
    };
  },
  mounted () {
    if (!localStorage.getItem('userType')) {
        this.$router.push('/Signin');
    }
    if (localStorage.getItem('userType') !== 'emp') {
        this.$router.push('/');
    }
    this.getClientes();
  },
  methods: {
    async getClientes() {
      try {
        const baseUrl = process.env.VUE_APP_URL_BACK;
        const response = await axios.get(baseUrl+"/user", { params: { type: 'cli' }},
          {withCredentials: false});

        this.clientes = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCliente(id) {
      try {
        const confirmation = confirm('¿Estás seguro de que quieres eliminar este cliente?');
        if (confirmation) {
          const baseUrl = process.env.VUE_APP_URL_BACK;
            await axios.delete(baseUrl+"/user/"+id, {
                withCredentials: false
            });
            this.getClientes();
        }
      } catch (error) {
        console.error(error);
      }
    },
    editCliente(id) {
      this.$router.push(`/usuarios/editar/${id}`);
    }    
  }
};
</script>
