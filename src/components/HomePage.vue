<template>
  <div class="home-page"> <!-- Root element -->
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
  background-image: url('https://via.placeholder.com/1920x1080'); /* Replace with actual image URL */
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
