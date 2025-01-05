<template>
  <div class="room-search">
    <form>
      <label>Desde...</label>
      <input type="date" />
      <label>Hasta...</label>
      <input type="date" />
      <label>Habitaciones</label>
      <input type="number" min="1" />
      <label>Personas</label>
      <input type="number" min="1" />
      <button type="submit">Buscar habitación</button>
    </form>
  </div>
</template>

<script>
export default {};
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
