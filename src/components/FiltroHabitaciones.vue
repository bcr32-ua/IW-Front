<template>
    <div class="filtered-rooms-page">
      <NavBar />
  
        <div class="background">
            <div class="content">
                <RoomSearch />
            </div>
                <div class="filtered-rooms">                    
                    <div v-if="rooms.length === 0" class="no-rooms">
                        <p>No se encontraron habitaciones para los criterios seleccionados.</p>
                    </div>

                    <div v-else class="room-list">
                        <div v-for="room in rooms" :key="room.id" class="room-card">
                            <img src="https://www.myboutiquehotel.com/photos/110778/grand-prince-hotel-takanawa-hanakohro-tokyo-002-49118-1110x700.jpg" alt="hab" class="room-image"/>
                            <div class="room-info">
                                <h2>Habitación {{ room.code }}</h2>
                                <p><strong>Personas:</strong> {{ room.people }}</p>
                                <p><strong>Piso:</strong> {{ room.floor }}</p>
                                <p><strong>Tipo:</strong> {{ room.type }}</p>
                                <p><strong>Precio base:</strong> ${{ room.base_price.toFixed(2) }}</p>
                                <p>{{ room.description }}</p>
                                <button @click="reserveRoom(room.id)" class="reserve-button">
                                Reservar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    </div>
  </template>
  
  <script>
  import NavBar from "../components/NavBar.vue";
  import RoomSearch from '../components/RoomSearch.vue';
  import axios from "axios";
  
  export default {
    components: {
      NavBar,
      RoomSearch,
    },
    data() {
      return {
        rooms: [], 
        filter: {
          startDate: "",
          endDate: "",
          rooms: 1,
          people: 1,
        },
      };
    },
    mounted() {
      const query = this.$route.query;
      this.filter.startDate = query.startDate || "";
      this.filter.endDate = query.endDate || "";
      this.filter.rooms = query.rooms || 1;
      this.filter.people = query.people || 1;
  
      this.fetchFilteredRooms();
    },
    methods: {
      async fetchFilteredRooms() {
        try {
          const baseUrl = process.env.VUE_APP_URL_BACK;
          const response = await axios.get(`${baseUrl}/room`, {
            params: this.filter,
          });
          this.rooms = response.data;
        } catch (error) {
          console.error("Error al obtener las habitaciones:", error);
        }
      },
      reserveRoom(roomId) {
        this.$router.push({ name: "ConfirmarReserva", query: { roomId } });
      },
    },
  };
  </script>
  
  <style scoped>
  .filtered-rooms-page {
    min-height: 100vh;
  }
  
  .background {
    display: flex;
    justify-content: center;
    padding: 40px 0;
    background-color: #BDB9B9;
    background-size: cover;
    background-position: center;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .content{
    margin-left: 50px;
  }
  
  .filtered-rooms {
    width: 70%;
    font-family: Arial, sans-serif;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 20px;
    margin-left: 50px;
  }
  
  .title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: white;
  }
  
  .no-rooms {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
  }
  
  .room-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .room-card {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .room-image {
    margin-left: 50px;
    width: 300.89px;
    height: 200px;
    object-fit: cover;
    margin-right: 20px;
  }
  
  .room-info {
    padding: 15px;
    margin-right: 20px;
  }
  
  .room-info h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .room-info p {
    margin: 5px 0;
    color: #555;
  }
  
  .reserve-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #f04e30;
    color: white;
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .reserve-button:hover {
    background-color: #d84328;
  }

  
  </style>
  