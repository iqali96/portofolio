<template>
  <div class="edication">
    <h1>Edication</h1>
    <div class="line">
      <!-- Right Box for FH Burgenland-->
    </div>
    <div class="cardContainer">
      <div class="htl-right" data-aos="fade-left">
        <h4 class="title">HTL-Höhre Technische Lehranstalt</h4>
        <h4 class="study">Informatik</h4>
        <p class="schwerpunkt">Schwerpunkt: Softwareentwicklung mit Java und Web-Technologien</p>
      </div>
      <!-- Left Box for FH Burgenland-->
      <div class="htl-left" data-aos="fade-right">
        <h4 class="title">FH Burgenland</h4>
        <h4 class="study">Software Engineering und vernetzte Systeme (Bachelor)</h4>
        <p class="schwerpunkt">Schwerpunkt: Softwareentwicklung und vernetzte Systeme</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Bebas+Neue&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&family=Poetsen+One&family=Prata&family=Special+Gothic+Expanded+One&display=swap');
.edication {
  width: 80%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: relative;
}
.edication h1 {
  margin: 50px 0px 50px 0px;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 37px;
}
.light h1 {
  color: var(--text-color-light);
}

.line {
  height: 400px;
  width: 1px;
  background-color: rgb(151, 151, 151);
}
.light .line {
  background-color: var(--background-color-dark);
}

.light .line::after,
.line::before {
  background-color: var(--background-color-dark);
}
.dark .line::after,
.dark .line::before {
  background-color: var(--background-color-light);
}
.cardContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: -120px;
}

.htl-right {
  width: 350px !important;
  height: 350px;
  padding: 10px 0px 0px 110px;
  background-color: rgb(51, 69, 85);
  border-radius: 5px;
  box-sizing: border-box;
}
/* Right Box for FH */
.htl-right::before {
  content: '2021 - 2024';
  color: rgb(231, 231, 231);
  width: 100px;
  height: 350px;
  position: absolute;
  background: #1a3e5f;
  top: 0px;
  left: 0px;
  padding-top: 160px;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  font-style: normal;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.title {
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  font-style: normal;
  color: rgb(212, 212, 212);
}
.study {
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  font-style: normal;
  color: rgb(221, 221, 221);
  padding-top: 5px;
}
.schwerpunkt {
  margin-top: 15px;
}
.light .schwerpunkt {
  color: var(--background-color-light);
}
/* Left Box for FH */
.htl-left {
  max-width: 350px;
  height: 350px;
  padding: 10px 0px 0px 110px;
  background-color: rgb(51, 69, 85);
  border-radius: 5px;
}

.htl-left::after {
  content: '2025 - laufend';
  color: rgb(228, 228, 228);
  width: 100px;
  height: 350px;
  position: absolute;
  background: #1a3e5f;
  top: 0px;
  left: 0px;
  padding-top: 160px;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  font-style: normal;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
@media only screen and (max-width: 768px) {
  * {
    box-sizing: border-box;
    max-width: 100%;
  }
  .edication {
    width: 80%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .line {
    height: 0px;
    width: 0px;
  }
  .line::before {
    display: none;
  }
  .line::after {
    display: none;
  }
  .cardContainer {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .htl-right,
  .htl-left {
    width: 450px;
    height: 150px;
    padding: 10px;
    position: relative;
    left: 0;
    top: 0;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .htl-left {
    margin-top: 120px;
  }
  .htl-right::before {
    font-size: 12px;
    width: 80px;
    top: 0px;
    width: 100%;
    height: 40px;
    padding-top: 15px;
    margin-top: -40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .htl-left::after {
    font-size: 12px;
    top: 0px;
    width: 100%;
    height: 40px;
    padding-top: 15px;
    margin-top: -40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .title {
    font-size: 18px;
    margin-left: 40px;
  }
}
</style>
