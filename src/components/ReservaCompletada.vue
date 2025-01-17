<template>
    <div
      style="
        background-image: url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGt5b3RvfGVufDB8fDB8fHww');
        height: 100vh;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
      "
    >
      <NavBar />
      <div
        class="container d-flex justify-content-center align-items-center"
        style="height: calc(100vh - 80px);"
      >
        <div
          class="card text-bg-dark mt-5 mb-5 px-5 py-4 text-center"
          style="width: 100%; max-width: 800px;"
        >
          <h2 class="text-center mt-4">Reserva completada</h2>
          <h4 class="text-center mt-4">
            Podrá consultar su reserva en la página Mis reservas, en su perfil.
            En caso de querer modificarla, póngase en contacto con nuestro
            personal.
          </h4>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from "../components/NavBar.vue";
  import axios from "axios";
  
  export default {
    components: {
      NavBar,
    },
    mounted() {
        if (!this.$route.query.booking) {
            this.$router.push('/');
        }

        this.saveBooking();
    },
    methods: {
        async saveBooking() {
        var bookingData = JSON.parse(this.$route.query.booking);
        console.log(bookingData);

        bookingData.start_date = bookingData.start_date.replace(" ", "+");
        bookingData.end_date = bookingData.end_date.replace(" ", "+");
        bookingData.season.season_start = bookingData.season.season_start.replace(" ", "+");
        bookingData.season.season_end = bookingData.season.season_end.replace(" ", "+");


        const baseUrl = process.env.VUE_APP_URL_BACK;      
        await axios.post(baseUrl+"/booking", bookingData);
        }
    }
  };
  </script>