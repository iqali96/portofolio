<template>
  <div class="container">
    <div class="hero">
      <h1>Juice Bar Project</h1>
      <div class="images">
        <img class="smoothie" src="../assets/smoothie/coconut-smoothie.png" alt="" />
        <img class="smoothie" src="/src/assets/smoothie/blackberry-smoothie.png" alt="nn" />
        <img class="smoothie" src="../assets/smoothie/greenApple-smoothie.png" alt="" />
      </div>
    </div>
    <div class="project">
      <h1>Project Overview</h1>
      <p class="project-description">
        Dieses Projekt ist ein Web-basiertes Bestellsystem für eine Juice Bar. Kunden können ihre
        Lieblingssäfte online auswählen und bestellen, während das Küchenteam die eingehenden
        Bestellungen in Echtzeit auf einem separaten Bildschirm sehen kann.
      </p>

      <p>Die Anwendung wurde mit Vue.js im Frontend und Spring Boot im Backend entwickelt.</p>
      <p class="beinhalt">Sie beinhaltet Funktionen wie:</p>

      <ul>
        <li>Benutzerfreundliche Bestelloberfläche für Kunden</li>
        <li>Live-Anzeige der Bestellungen für die Küche</li>
        <li>Verwaltung von Produkten und Bestellungen durch das Admin-Panel</li>
        <li>Kommunikation mit einer SQL-Datenbank zur Speicherung aller Daten</li>
      </ul>

      <div class="details">
        <div class="part">
          <h1>Home Page:</h1>
          <img src="../assets/juiceImage.png" alt="" />
        </div>
        <div class="part">
          <h1>Products Page</h1>
          <img src="../assets/products.png" alt="" />
        </div>
        <div class="part">
          <h1>Products Details Page</h1>
          <img src="../assets/productInfo.png" alt="" />
        </div>
        <div class="part">
          <h1>Blog Details Page</h1>
          <img src="../assets/blog.png" alt="" />
        </div>
        <div class="part">
          <h1>Login Page</h1>
          <img src="../assets/login.png" alt="" />
        </div>
        <div class="part">
          <h1>Dashboard Page</h1>
          <img src="../assets/dashboard.png" alt="" />
        </div>
        <div class="part">
          <h1>Dashboard Side</h1>
          <img src="../assets/dashboardSide.png" alt="" class="dashboardSide" />
        </div>
        <div class="part">
          <h1>Order Steps</h1>
          <img src="../assets/orderSystem.png" />
        </div>
        <div class="part">
          <h1>Order Steps</h1>
          <img src="../assets/orderStep2.png" />
        </div>
        <div class="part">
          <h1>Edit Product</h1>
          <img src="../assets/editProduct.png" />
        </div>
        <div class="part">
          <h1>Database</h1>
          <img src="../assets/database.png" />
        </div>
        <div class="part">
          <h1>Java Code</h1>
          <img src="../assets/javaCode.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Alumni+Sans+Collegiate+One:ital@0;1&family=Bebas+Neue&family=Concert+One&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&family=Poetsen+One&family=Prata&family=Special+Gothic+Expanded+One&display=swap');

.container {
  background-color: #f0f0f0;
}
.project {
  padding: 20px;
}
.project h1 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  margin-top: 40px;
}
.details {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.details img {
  margin-top: 20px;
  width: 50%;
  height: auto;
  margin-top: 20px;
}
.part {
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project p,
h1,
ul li {
  font-family: 'Concert One', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
  color: #333;
}
.project-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}
.beinhalt {
  margin-top: 20px;
  margin-bottom: 20px;
}
.hero {
  background: url('../assets/stacked-waves-haikei.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.hero h1 {
  font-family: 'Concert One', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.smoothie {
  width: 200px;
  height: 200px;
  margin: 0 20px;
}
.smoothie:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
.smoothie:active {
  transform: scale(0.95);
  transition: transform 0.1s ease;
}
.smoothie:nth-child(1) {
  animation: bounce 2s infinite;
}
.smoothie:nth-child(2) {
  animation: bounce 2s infinite 0.2s;
}
.smoothie:nth-child(3) {
  animation: bounce 2s infinite 0.4s;
}
.smoothie:nth-child(4) {
  animation: bounce 2s infinite 0.6s;
}
.smoothie:nth-child(5) {
  animation: bounce 2s infinite 0.8s;
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.dashboardSide {
  width: 140px !important;
  height: 500px !important;
  margin-top: 20px;
}
</style>
