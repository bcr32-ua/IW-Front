<template>
  <nav class="navbar">
    <div class="logo" @click="goHome">京都 Kyoto</div>
    <ul class="menu">
      <li><a href="/">Nuestro Hotel</a></li>
      <li><a href="/habitaciones">Habitaciones</a></li>
      <li><a href="/instalaciones">Instalaciones</a></li>
      <li><a href="/seasons">Temporadas</a></li>
      <li><a href="/contact-page">Contáctanos</a></li>
    </ul>
    <div class="search-user">
            <div class="user-icon-wrapper">
        <span @click="toggleDropdown" class="user-icon">👤</span>

        <div v-if="showDropdown" class="dropdown-menu">
          <template v-if="isEmp">
            <router-link to="/gestionClientes" class="dropdown-item">Administración</router-link>
          </template>
          <template v-if="isLoggedIn">
            <router-link to="/perfil-registrado" class="dropdown-item">Mi cuenta</router-link>
            <router-link to="/MisReservas" class="dropdown-item">Mis Reservas</router-link>
            <span class="dropdown-item" @click="logout">Cerrar sesión</span>
          </template>
          <template v-else>
            <router-link to="/signin" class="dropdown-item">Logearse</router-link>
            <router-link to="/register" class="dropdown-item">Registrar</router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      isLoggedIn: !!localStorage.getItem('userId'),
      userType: localStorage.getItem('userType') || null,
      isEmp: localStorage.getItem('userType') === 'emp',
    };
  },
  methods: {
    goHome() {
      window.location.href = '/';
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleOutsideClick(event) {
      const dropdown = this.$el.querySelector('.user-icon-wrapper');
      if (dropdown && !dropdown.contains(event.target)) {
        this.showDropdown = false;
      }
    },
    logout() {
      localStorage.removeItem('userId');
      localStorage.removeItem('userType');
      this.isLoggedIn = false;
      this.userType = null;
      this.isEmp = false;
      this.showDropdown = false;
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },

};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.logo {
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu li {
  margin: 0 15px;
}

.menu li a {
  color: white;
  text-decoration: none;
}

.menu li a:hover {
  text-decoration: underline;
}

.search-user {
  display: flex;
  align-items: center;
}

.search-bar {
  padding: 5px;
  border: none;
  border-radius: 3px;
  margin-right: 10px;
}

.user-icon-wrapper {
  position: relative;
}

.user-icon {
  font-size: 20px;
  cursor: pointer;
  color: white;
  text-decoration: none;
}

.user-icon:hover {
  text-decoration: underline;
}

.dropdown-menu {
  display: block !important;
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  width: 150px;
}

.dropdown-item {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
