<template>
  <div class="main">
    <div class="service">
      <p>SERVICES</p>
      <h2>WHat I Can Do</h2>
    </div>
    <div class="cards">
      <div class="card">
        <img
          src="../assets/web-development.png"
          alt=""
          data-aos="zoom-in-down"
          data-aos-duration="1200"
        />
        <h3>Web Development</h3>
        <p>
          Ich entwickle performante und skalierbare Webanwendungen mit Java Spring Boot im Backend
          und Vue.js im Frontend. Dabei lege ich großen Wert auf sauberen Code und gute Architektur.
        </p>
      </div>
      <div class="card">
        <img
          src="../assets/web-design.png"
          alt=""
          data-aos="zoom-in-down"
          data-aos-duration="1200"
        />
        <h3>Frontend Development</h3>
        <p>
          Mit Vue.js, HTML, CSS und JavaScript gestalte ich moderne, responsive und
          benutzerfreundliche Benutzeroberflächen, die auf allen Geräten funktionieren.
        </p>
      </div>
      <div class="card">
        <img
          src="../assets/web-development.png"
          alt=""
          data-aos="zoom-in-down"
          data-aos-duration="1200"
        />
        <h3>Backend Development</h3>
        <p>
          Ich erstelle sichere und effiziente Backend-Systeme mit Spring Boot, inklusive RESTful
          APIs, Datenbankanbindungen und Authentifizierung.
        </p>
      </div>
      <div class="card">
        <img
          src="../assets/web-development.png"
          alt=""
          data-aos="zoom-in-down"
          data-aos-duration="1200"
        />
        <h3>Teamarbeit & Weiterentwicklung</h3>
        <p>
          Ich arbeite gerne im Team, bin zuverlässig und immer bereit, neue Technologien zu lernen
          und meine Fähigkeiten weiterzuentwickeln
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Bebas+Neue&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&family=Poetsen+One&family=Prata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Bebas+Neue&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&family=Poetsen+One&family=Prata&family=Special+Gothic+Expanded+One&display=swap');
.main {
  background-color: rgb(37, 35, 35);
}
.light .main {
  background-color: rgb(221, 221, 221);
}
.service p {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  font-size: 18px;
  padding-top: 20px;
}
.light .service p {
  color: var(--text-color-light);
}
.dark .service p {
  color: var(--text-color-dark);
}
.service h2 {
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 37px;
  margin-top: 30px;
}
.light .service h2 {
  color: var(--text-color-light);
}
.dark .service h2 {
  color: var(--text-color-dark);
}
.cards {
  width: 70%;
  margin: auto;
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}
.cards .card {
  width: 300px;
  text-align: center;
}
.cards .card img {
  margin-top: 60px;
  width: 60px;
}
.light .card img {
  filter: brightness(0);
}
.card h3 {
  color: white;
  padding: 25px 0px 20px 0px;
  font-size: 25px;
  text-transform: uppercase;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
}
/*Change the color of font later! */
.card p {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 0px 20px 20px 20px;
  font-size: 16px;
}
.light .card h3 {
  color: var(--text-color-light);
}
@media only screen and (max-width: 768px) {
  .main {
    height: auto;
  }
  .service {
    padding: 20px 0;
  }
  .cards {
    width: 90%;
  }
  .cards .card {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
