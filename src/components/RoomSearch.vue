<template>
  <div class="room-search">
    <form @submit.prevent="searchRooms">
      <label>Desde...</label>
      <input type="date" v-model="startDate" required/>
      <label>Hasta...</label>
      <input type="date" v-model="endDate" required/>
      <label>Camas</label>
      <select class="form-select" id="beds" v-model.number="beds" required>
          <option value="1">Simple</option>
          <option value="2">Doble (dos camas)</option>
          <option value="1">Doble (una cama)</option>
          <option value="2">Triple</option>
      </select>
      <label>Personas</label>
      <select class="form-select" v-model.number="people" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button class="mt-3" type="submit">Buscar habitación</button>
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
