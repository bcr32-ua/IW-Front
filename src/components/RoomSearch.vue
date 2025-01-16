<template>
  <div class="room-search">
    <form @submit.prevent="searchRooms">
      <label>Desde...</label>
      <input type="date" v-model="startDate" required/>
      <label>Hasta...</label>
      <input type="date" v-model="endDate" required/>
      <label>Camas</label>
      <input type="number" v-model.number="beds" min="0" required/>
      <label>Personas</label>
      <input type="number" v-model.number="people" min="0" required/>
      <button type="submit">Buscar habitación</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: "",
      endDate: "",
      beds: 0,
      people: 0,
    };
  },
  methods: {
    searchRooms() {
      const queryParams = new URLSearchParams({
        start_date: this.startDate || "0",
        end_date: this.endDate || "0",
        beds: this.beds || 0,
        people: this.people || 0,
      }).toString();
      this.$router.push(`/filtroHabitaciones?${queryParams}`);
    },
  },
};
</script>

<style scoped>
.room-search {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin: 5px 0;
}
input {
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  border: none;
}
button {
  background-color: #555;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #777;
}
</style>
