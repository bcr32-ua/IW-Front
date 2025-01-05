<template>
  <nav class="navbar">
    <div class="logo" @click="goHome">京都 Kyoto</div>
    <ul class="menu">
      <li><a href="#">Nuestro Hotel</a></li>
      <li><a href="#">Habitaciones</a></li>
      <li><a href="#">Instalaciones</a></li>
      <li><a href="#">Temporadas</a></li>
      <li><a href="#">Contáctanos</a></li>
    </ul>
    <div class="search-user">
      <input type="text" placeholder="Buscar..." class="search-bar" />
      <i class="user-icon">👤</i>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    goHome() {
      // Placeholder for redirecting to home
      console.log('Redirect to home');
    },
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
.user-icon {
  font-size: 20px;
  cursor: pointer;
}
</style>
