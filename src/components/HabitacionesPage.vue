<template>
  <div class="habitaciones-page">

    <NavBar />

    <div class="background">
      <div class="pillar">
        <h1 class="title">Descubre Tu Refugio en el Corazón de Kioto</h1>

        <div class="habitacion">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/573436415.jpg?k=74473d6acd0d80b5532c562aa0dc77fb518de3b0fca488c142c515e7773fc56c&o=&hp=1" alt="hab" class="hab-image" />
          <div class="habitacion-text">
            <p>
              Bienvenido a nuestra elegante habitación diseñada para ofrecerte una experiencia única en la mágica ciudad de Kioto.
            </p>
            <p>
              Inspirada en la tradición japonesa y equipada con todas las comodidades modernas, este espacio es ideal para quienes buscan sumergirse en la tranquilidad y el encanto de esta histórica ciudad.
            </p>
          </div>
        </div>

        <div class="habitacion">
          <div class="text">
            <p>
              Diseño Japonés Contemporáneo: Disfruta de un ambiente armonioso que combina la simplicidad del estilo tradicional con detalles modernos.
            </p>
            <p>
              Cama Premium: Una cama cómoda y espaciosa, perfecta para descansar después de explorar templos y jardines.
            </p>
            <p>
              Vista Panorámica: Ventanales que ofrecen una vista espectacular de los paisajes de Kioto, desde los pintorescos tejados hasta las colinas circundantes.
            </p>
            <p>
              Zona de Relajación: Un rincón con tatamis y cojines para disfrutar de un té matcha mientras planificas tus aventuras.
            </p>
            <p>
              Baño Privado de Lujo: Relájate en una bañera estilo onsen con productos de cortesía hechos con ingredientes naturales locales.
            </p>
            <p>
              Wi-Fi Gratuito: Mantente conectado con el mundo mientras te pierdes en el encanto de Kioto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'HabitacionesPage',
  components: {
    NavBar,
  },
};
</script>

<style scoped>

.habitaciones-page {
  background-color: #bcb8b8;
  min-height: 100vh;
}

.background {
  background-color: #bcb8b8;
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.pillar {
  width: 60%;
  font-family: Arial, sans-serif;
  background-color: #d8d8d8;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: #333;
}

.habitacion {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
}

.habitacion:nth-child(odd) {
  flex-direction: row-reverse;
}

.hab-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.habitacion-text {
  width: 50%;
  margin: 10px;
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
}

.text {
  width: 100%;
  margin: 10px;
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
}
</style>
