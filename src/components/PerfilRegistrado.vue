<template>
  <div class="perfil-registrado">
    <NavBar />
    <div class="background">
      <div class="content">
        <div class="menu-vertical">
          <div class="menu-item" @click="goToHistory">
            <i class="icon"></i>
            <span>Historial de Reservas</span>
          </div>
          <div class="menu-item" @click="goToEditProfile">
            <i class="icon"></i>
            <span>Editar Mis Datos</span>
          </div>
        </div>

        <div class="datos-usuario">
          <h3>Mi cuenta</h3>
          <h4>{{ user.name }} {{ user.surname }}</h4>
          <p>{{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      user: {
        name: "",
        surname: "",
        email: "",
      },
    };
  },
  methods: {
    async fetchUserData() {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          this.$router.push("/signin");
          return;
        }

        const baseUrl = process.env.VUE_APP_URL_BACK;
        const response = await axios.get(`${baseUrl}/user/${userId}`);
        this.user = response.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
    goToHistory() {
      this.$router.push("/history");
    },
    goToEditProfile() {
      this.$router.push("/edit-profile");
    },
  },
  mounted() {
    this.fetchUserData();
  },
};
</script>

<style scoped>
.perfil-registrado {
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

.menu-vertical {
  position: relative;
  width: 295px;
  height: 250px;
  right: 400px;
  background: #4a4646;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 5px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 260px;
  height: 50px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #656060;
}

.menu-items span {
  font-size: 20px;
  cursor: pointer;
}

.icon {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
}


.datos-usuario{
  position: relative;
  width: 600px;
  height: 250px;
  bottom: 250px;
  padding: 50px;
  background: #4a4646;
  border-radius: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
}

h4 {
  position: absolute;
  width: 283px;
  height: 25.01px;
  left: 110px;
  top: 110px;
}

p {
  position: absolute;
  width: 278px;
  height: 54.18px;
  left: 110px;
  top: 145px;
}

</style>

