<template>
    <div class="facilities-page">
  
      <NavBar />
  
      <div class="background">
        <div class="pillar">
          <h1 class="title">Explora Nuestras Diferentes Temporadas</h1>
          <div class="facility">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/463721076.jpg?k=a114e4db3d42d5eeb5c07701c4816659d3748ec4afb7d9087599bbac5e2cdf0c&o=&hp=1" alt="Zen Garden" class="facility-image" />
            <div class="facility-text">
              <p>
                Durante la temporada alta, disfruta del ambiente más vibrante de nuestro hotel. Es el momento perfecto para sumergirte en actividades exclusivas, eventos especiales y aprovechar al máximo nuestras instalaciones de lujo. Reserva con anticipación para asegurar tu lugar en esta época de alta demanda.
              </p>
            </div>
          </div>
  
          <div class="facility">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/526375386.jpg?k=8cf8e854723585cf7df3e6227ef71226e255a8a55e390ab7cbc1bb58518375c9&o=&hp=1" alt="Lounge" class="facility-image" />
            <div class="facility-text">
              <p>
                En la temporada baja, encuentra tranquilidad y relajación como nunca antes. Disfruta de tarifas más accesibles, menor afluencia de huéspedes y una experiencia personalizada. Es el momento ideal para desconectar y recargar energías en un entorno sereno.
              </p>
              <p>Wi-Fi de alta velocidad y café matcha siempre a tu disposición.</p>
            </div>
          </div>
  
          <div class="facility">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/539130915.jpg?k=34a955bc25341ef147931af2594fb76198d8c0144b7b8c33cd4ce7ad88062a25&o=&hp=1" alt="Onsen" class="facility-image" />
            <div class="facility-text">
              <p>
                La temporada media combina lo mejor de ambos mundos. Disfruta de un equilibrio perfecto entre actividad y tranquilidad, con eventos selectos y acceso a nuestras instalaciones sin las aglomeraciones de la temporada alta. Perfecto para quienes buscan una experiencia equilibrada.
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
    name: 'SeasonsPage',
    components: {
      NavBar,
    },
  };
  </script>
  
  <style scoped>
  
  .facilities-page {
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
  
  .facility {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .facility:nth-child(odd) {
    flex-direction: row-reverse;
  }
  
  .facility-image {
    width: 45%;
    height: auto;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .facility-text {
    width: 50%;
    margin: 10px;
    font-size: 1rem;
    line-height: 1.5;
    color: #555;
  }
  </style>
  