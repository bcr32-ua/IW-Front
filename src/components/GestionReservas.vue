<template class="container-fluid" >
    <body style="background-color: #BDB9B9;  min-height: 100vh;">
        <NavBar />
            <div>
                <div class="container mt-4">

                    <div class="row">
                        <div class="col-3">
                            <MenuAdmin />
                        </div>
                        <div class="col card text-bg-secondary">
                            <div class="d-flex justify-content-between align-items-center  mt-4">
                                <h2>Gestión reservas</h2>
                                <a href="/nuevaReserva" class="btn btn-outline-light">Añadir reserva</a>
                            </div>
                            <table class="table-secondary table table-striped mt-4">
                                <thead>
                                    <tr>
                                        <th>Usuario</th>
                                        <th>Habitacion</th>
                                        <th>Fecha de entrada</th>
                                        <th>Fecha de salida</th>
                                        <th>Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(book) in books" :key="book.id">
                                        <td>{{ book.user.email }}</td>
                                        <td>{{ book.room.code }}</td>
                                        <td>{{ formatDate(book.start_date) }}</td>
                                        <td>{{ formatDate(book.end_date) }}</td>
                                        <td>{{ book.total_price }}€</td>
                                        <td>
                                            <button class="btn" @click="editReserva(book.id)"><i class="bi bi-pencil-square"></i></button>
                                            <button class="btn" @click="deleteReserva(book.id)"><i class="bi bi-trash"></i></button>
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
        books: [],
    }
  },
  mounted() {
    if (!localStorage.getItem('userType')) {
        this.$router.push('/Signin');
    }
    if (localStorage.getItem('userType') !== 'emp') {
        this.$router.push('/');
    }
    this.getReservas();
  },
  methods: {
    async getReservas() {
        const baseUrl = process.env.VUE_APP_URL_BACK;
        const response = await axios.get(baseUrl+"/booking", {
            withCredentials: false
        });
        this.books = response.data;
    },
    formatDate(date) {
        return new Date(date).toLocaleDateString();
    },
    async editReserva(id) {
        this.$router.push(`/reservas/editar/${id}`);
    },
    async deleteReserva(id) {
        const confirmation = confirm('¿Estás seguro de que quieres eliminar esta reserva?');
        if (confirmation) {
            const baseUrl = process.env.VUE_APP_URL_BACK;
            await axios.delete(baseUrl+"/booking/"+id, {
                withCredentials: false
            });
            this.getReservas();
        }
        
    },
  }
}

</script>