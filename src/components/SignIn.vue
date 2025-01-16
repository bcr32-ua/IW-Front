<template>
  <div class="sign-in-page">
    <NavBar />
    <div class="background">
      <div class="content">
        <div class="sign-in-form">
          <h2>Inicia sesión</h2>
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  placeholder="nombre@ejemplo.com"
                  required
              />
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input
                  type="password"
                  id="password"
                  v-model="formData.password"
                  placeholder="*********"
                  required
              />
            </div>
            <button type="submit" class="sign-in-button">Iniciar sesión</button>
          </form>
          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
          <div class="register-link">
            <p>¿No tienes cuenta?</p>
            <router-link to="/register" class="register-button">Regístrate</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        const baseUrl = process.env.VUE_APP_URL_BACK;
        const response = await axios.post(
            `${baseUrl}/user/login`, // Concatenando la ruta al baseUrl
            this.formData
        );

        const userId = response.data;
        localStorage.setItem('userId', userId);
        localStorage.setItem('userType', response.data.type);
        this.$router.push('/');
      } catch (error) {
        this.errorMessage =
            error.response?.data || 'Error: Unable to log in. Please try again.';
      }
    },
  },
};
</script>

<style scoped>
/* Existing styles */
.sign-in-page {
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
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: #fff;
}
.sign-in-form {
  width: 300px;
}
.form-group {
  margin-bottom: 15px;
  text-align: left;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 95%;
  padding: 8px;
  border: none;
  border-radius: 5px;
}
.sign-in-button {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #f04e30;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.register-link {
  margin-top: 15px;
}
.register-button {
  background: none;
  border: none;
  color: #f04e30;
  cursor: pointer;
}
.error-message {
  margin-top: 10px;
  color: #dc3545;
}


</style>
