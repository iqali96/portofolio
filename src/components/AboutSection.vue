<template>
  <div class="main" id="about">
    <div class="contain">
      <img class="person" src="../assets/icons8-person.png" alt="" />

      <div class="description">
        <p class="x">ABOUT ME</p>
        <div class="line"></div>
        <p class="text">
          Ich bin Ali, ein Webentwickler mit einem HTL-Abschluss im Bereich Informationstechnologie.
          Ich habe praktische Erfahrung in der Entwicklung von Webanwendungen mit Java Spring Boot
          im Backend und Vue.js im Frontend. Derzeit studiere ich Software Engineering und vernetzte
          Systeme an einer Fachhochschule im berufsbegleitenden Modus, wodurch ich Theorie und
          Praxis optimal miteinander verbinden kann.Ich bin lernbereit, detailorientiert und arbeite
          gerne im Team. Ich suche derzeit eine Position als Junior Java Developer oder Fullstack
          Developer, in der ich meine Kenntnisse weiterentwickeln und an praxisnahen Projekten
          mitwirken kann.
        </p>
      </div>
    </div>
    <div class="contact">
      <div class="address">
        <img src="../assets/email.png" alt="" />
        <span>aljouraifia@gmail.com</span>
      </div>

      <div class="address">
        <img src="../assets/phoneNumber.png" alt="" />
        <span>+4368181889183</span>
      </div>

      <div class="address">
        <img src="../assets/address.png" alt="" />
        <span>Wiedner Hauptstraße 125/33/ 1050 Wien</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Bebas+Neue&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&family=Poetsen+One&family=Prata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Bebas+Neue&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&family=Poetsen+One&family=Prata&family=Special+Gothic+Expanded+One&display=swap');
.main {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contain {
  display: flex;
  flex-direction: row;
  gap: 80px;
  margin-bottom: -80px;
}
.person {
  width: 200px;
  height: 200px;
  margin-top: 100px;
}
.description {
  width: 500px;
  height: 500px;
}
.description .x {
  width: 200px;
  font-size: 35px;
  margin-bottom: 20px;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.line {
  width: 200px;
  height: 1px;
  background-color: white;
  margin-bottom: 20px;
  animation: lineAnimation 2s ease-in-out infinite alternate;
  transform-origin: left;
}
.light .line {
  background-color: var(--text-color-light);
}
.text {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 28px;
  font-size: 24px;
}
@keyframes lineAnimation {
  0% {
    width: 0;
  }
  100% {
    width: 200px;
  }
}
.contact {
  display: flex;
  gap: 40px;
  margin-top: 70px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  margin-bottom: 100px;
}
.contact div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.contact img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.contact span {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.light .contact span {
  color: var(--text-color-light);
}
.dark .contact span {
  color: var(--text-color-dark);
}
.light .contact img {
  filter: brightness(0);
}
.dark .contact img {
  filter: brightness(1) invert(1);
}
@media only screen and (max-width: 768px) {
  .contain {
    flex-direction: column;
    align-items: center;
  }
  .person {
    width: 150px;
    height: 150px;
    margin-top: 50px;
  }
  .description {
    width: 90%;
    height: auto;
  }
  .text {
  }
  .contact {
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
  }
}
</style>
