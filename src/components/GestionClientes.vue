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
                                    <td>{{ cliente.nombre }}</td>
                                    <td>{{ cliente.apellido }}</td>
                                    <td>{{ cliente.email }}</td>
                                    <td>{{ cliente.telefono }}</td>
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

export default {
  components: {
    NavBar,
    MenuAdmin,
  },
  data() {
    return {
      clientes: [{
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
    this.getClientes();
    console.log('Clientes obtenidos');
  },
  methods: {
    async getClientes() {
      try {
        /*const response = await axios.get('http://localhost:3000/clientes');
        this.clientes = response.data;*/
        console.log('Clientes obtenidos');
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCliente(id) {
      try {
        const confirmation = confirm('¿Estás seguro de que quieres eliminar este cliente?');
        if (!confirmation) {
          return;
        }
        /*const response = await axios.delete(`http://localhost:3000/clientes/${dni}`);
        console.log(response);*/
        this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
        console.log('Cliente eliminado ', id);
      } catch (error) {
        console.error(error);
      }
    },
    editCliente(id) {
        console.log('Editar cliente ', id);
      this.$router.push(`/usuarios/editar/${id}`);
    }    
  }
};
</script>
