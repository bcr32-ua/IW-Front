<template>
  <div class="home-page">
    <NavBar />
    <div class="background">
      <div class="content">
        <RoomSearch />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import RoomSearch from '../components/RoomSearch.vue';

export default {
  components: {
    NavBar,
    RoomSearch,
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
  justify-content: flex-start;
}
.content {
  margin-left: 50px;
}
</style>
