<template>
  <div class="home-page">
    <NavBar />
    <div class="background">
      <div class="content">
        <h1>Historial De Reservas</h1>
        <div class="reservas-table">
          <table>
            <thead>
            <tr>
              <th>Desde</th>
              <th>Hasta</th>
              <th>Precio</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="reserva in reservas" :key="reserva.id">
              <td>{{ formatDate(reserva.start_date) }}</td>
              <td>{{ formatDate(reserva.end_date) }}</td>
              <td>{{ reserva.total_price }}</td>
            </tr>
            </tbody>
          </table>
          <div class="pagination">
            <button
                @click="prevPage"
                :disabled="currentPage === 1"
            >
              &lt;
            </button>
            <span>{{ currentPage }}</span>
            <button
                @click="nextPage"
                :disabled="currentPage >= totalPages"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import axios from 'axios';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      reservas: [],
      currentPage: 1,
      itemsPerPage: 5,
      totalPages: 1,
    };
  },
  methods: {
    async fetchBookings() {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('Por favor, inicia sesión.');
        this.$router.push('/signin');
        return;
      }

      const baseUrl = process.env.VUE_APP_URL_BACK;

      try {
        const response = await axios.get(`${baseUrl}/booking/user/${userId}`);
        const data = response.data;

        this.reservas = data.slice(
            (this.currentPage - 1) * this.itemsPerPage,
            this.currentPage * this.itemsPerPage
        );
        this.totalPages = Math.ceil(data.length / this.itemsPerPage);
      } catch (error) {
        console.error('Error obteniendo reservas:', error.response || error);
        alert('Ha ocurrido un error obteniendo las reservas.');
      }
    },
    cancelBooking(bookingId) {
      const baseUrl = process.env.VUE_APP_URL_BACK;

      axios
          .delete(`${baseUrl}/booking/${bookingId}`)
          .then(() => {
            alert('Reserva cancelada');
            this.fetchBookings();
          })
          .catch((error) => {
            console.error('Error cancelando la reserva:', error.response || error);
            alert('Error cancelando la reserva.');
          });
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchBookings();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchBookings();
      }
    },
  },
  mounted() {
    this.fetchBookings();
  },
};

</script>

<style scoped>
.home-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.background {
  background-image: url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGt5b3RvfGVufDB8fDB8fHww');
  background-size: cover;
  background-position: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 1200px;
}

.reservas-table table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.reservas-table th,
.reservas-table td {
  padding: 15px 10px; /* Add space for better readability */
  text-align: left; /* Align text to the left */
}

.reservas-table th {
  background-color: #3a3a3a; /* Darker header background */
  color: white; /* White text for header */
  font-weight: bold; /* Bold header text */
}

.reservas-table tbody tr {
  background-color: #4a4a4a; /* Consistent gray row background */
  color: white; /* White text for rows */
}

.reservas-table tbody tr:nth-child(odd) {
  background-color: #5a5a5a; /* Slightly lighter gray for alternate rows */
}

.reservas-table tbody tr:hover {
  background-color: #666666; /* Highlight on hover */
}

.reservas-table td button {
  background-color: #cc0000; /* Red background for buttons */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.reservas-table td button:hover {
  background-color: #ff3333; /* Lighter red on hover */
}


.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #444;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #888;
  cursor: not-allowed;
}

</style>
