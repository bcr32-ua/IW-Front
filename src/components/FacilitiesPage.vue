<template>
  <div class="facilities-page">

    <NavBar />

    <div class="background">
      <div class="pillar">
        <h1 class="title">Explora Nuestras Instalaciones Exclusivas</h1>

        <div class="facility">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/539286451.jpg?k=d4580a56b72d3b211e278a4ecb32e4d729682282dd137e8aac2acd842c86dbbb&o=&hp=1" alt="Lobby" class="facility-image" />
          <div class="facility-text">
            <p>
              Sumérgete en la calma al entrar a nuestro lobby, decorado con madera natural, arte
              japonés y una iluminación tenue que evoca la calidez de un hogar tradicional.
            </p>
            <p>
              Nuestro personal estará encantado de asistirte con recomendaciones y planes para
              explorar Kioto.
            </p>
          </div>
        </div>

        <div class="facility">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/463721076.jpg?k=a114e4db3d42d5eeb5c07701c4816659d3748ec4afb7d9087599bbac5e2cdf0c&o=&hp=1" alt="Zen Garden" class="facility-image" />
          <div class="facility-text">
            <p>
              Descubre la tranquilidad en nuestro jardín zen, un espacio diseñado para la meditación
              y la contemplación.
            </p>
            <p>
              Siéntate junto al estanque de carpas koi o camina por los senderos de grava
              perfectamente cuidados.
            </p>
          </div>
        </div>

        <div class="facility">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/526375386.jpg?k=8cf8e854723585cf7df3e6227ef71226e255a8a55e390ab7cbc1bb58518375c9&o=&hp=1" alt="Lounge" class="facility-image" />
          <div class="facility-text">
            <p>
              Ya sea que necesites trabajar o disfrutar de un momento de lectura, nuestras áreas
              comunes ofrecen un ambiente tranquilo con vistas al paisaje de Kioto.
            </p>
            <p>Wi-Fi de alta velocidad y café matcha siempre a tu disposición.</p>
          </div>
        </div>

        <div class="facility">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/539130915.jpg?k=34a955bc25341ef147931af2594fb76198d8c0144b7b8c33cd4ce7ad88062a25&o=&hp=1" alt="Onsen" class="facility-image" />
          <div class="facility-text">
            <p>
              Relájate en nuestro onsen, un baño termal con agua rica en minerales que renueva cuerpo
              y mente.
            </p>
            <p>
              Ofrecemos opciones privadas para parejas o familias que deseen disfrutar de una
              experiencia más íntima.
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
  name: 'FacilitiesPage',
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
