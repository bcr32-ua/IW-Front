<template>
    <div class="edit-profile-page">
      <NavBar />
      <div class="background">
        <div class="content">
          <div class="edit-profile-form">
            <h2>Editar perfil</h2>
            <form @submit.prevent="updateUser">
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
              <div class="form-group">
                <label for="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div class="form-group">
                <label for="surname">Apellido</label>
                <input
                  type="text"
                  id="surname"
                  v-model="formData.surname"
                  placeholder="Tu apellido"
                  required
                />
              </div>
              <div class="form-group">
                <label for="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  placeholder="123-456-789"
                  required
                />
              </div>
              <button type="submit" class="save-button">Guardar cambios</button>
            </form>
            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>
            <div v-if="successMessage" class="success-message">
              {{ successMessage }}
            </div>
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
        formData: {
          email: "",
          password: "",
          name: "",
          lastname: "",
          phone: "",
        },
        errorMessage: "",
        successMessage: "",
      };
    },
    created() {
      this.fetchUserData();
    },
    methods: {
      async fetchUserData() {
        try {
          const baseUrl = process.env.VUE_APP_URL_BACK;
          const userId = localStorage.getItem("userId");
          const response = await axios.get(`${baseUrl}/user/${userId}`);
          this.formData = response.data;
        } catch (error) {
          this.errorMessage =
            error.response?.data || "Error al cargar los datos del usuario.";
        }
      },
      async updateUser() {
        try {
          const baseUrl = process.env.VUE_APP_URL_BACK;
          const userId = localStorage.getItem("userId");
          await axios.put(`${baseUrl}/user`, { ...this.formData, id: userId });
          this.successMessage = "Perfil actualizado con éxito.";
          this.errorMessage = "";
        } catch (error) {
          this.errorMessage =
            error.response?.data || "Error al actualizar el perfil.";
          this.successMessage = "";
        }
      },
    },
  };
  </script>

  <style scoped>
  .edit-profile-page {
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
  
  .edit-profile-form {
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
  
  .save-button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #f04e30;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .error-message {
    margin-top: 15px;
    color: #dc3545;
  }
  
  .success-message {
    margin-top: 15px;
    color: #28a745;
  }
  </style>
  
  