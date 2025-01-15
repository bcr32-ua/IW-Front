<template>
    <div class="contact-page">
      <NavBar />
      <div class="background">
        <div class="content">
          <div class="contact-section">
            <h2>Contáctanos</h2>
            <div class="contact-info">
              <p>
                <strong>Teléfono:</strong> +34 123 456 789
              </p>
              <div class="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26142.943164140997!2d135.7493018756561!3d35.01001190278605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108a03887d72d%3A0xd92108a36694707!2sORIENTAL%20HOTEL%20KYOTO%20ROKUJO!5e0!3m2!1ses!2ses!4v1736964914887!5m2!1ses!2ses"
                  width="100%"
                  height="300"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="suggestions-section">
            <h2>Dudas o Sugerencias</h2>
            <form @submit.prevent="sendMessage">
              <div class="form-group">
                <label for="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  placeholder="nombre@ejemplo.com"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Mensaje</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  placeholder="Escribe tu mensaje aquí..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit-button">Enviar</button>
            </form>
            <div v-if="successMessage" class="success-message">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
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
          message: "",
        },
        successMessage: "",
        errorMessage: "",
      };
    },
    methods: {
      async sendMessage() {
        try {
          const baseUrl = process.env.VUE_APP_URL_BACK;
          await axios.post(`${baseUrl}/contact`, this.formData);
          this.successMessage = "Mensaje enviado con éxito.";
          this.errorMessage = "";
          this.formData.email = "";
          this.formData.message = "";
        } catch (error) {
          this.errorMessage =
            error.response?.data || "Error al enviar el mensaje.";
          this.successMessage = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-page {
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
    display: flex;
  }
  
  .contact-section{
    padding: 30px;
    border-radius: 10px;
    width: 80%;
    color: white;
    background: rgba(0, 0, 0, 0.8);
    margin-right: 292px;
  }

  .suggestions-section {
    padding: 30px;
    border-radius: 10px;
    width: 100%;
    color: white;
    background: rgba(0, 0, 0, 0.8);
  }
  
  .contact-info p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .map-container iframe {
    border-radius: 10px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #f04e30;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .success-message {
    margin-top: 15px;
    color: #28a745;
  }
  
  .error-message {
    margin-top: 15px;
    color: #dc3545;
  }
  </style>
  