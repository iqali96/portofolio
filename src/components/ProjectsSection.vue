<template>
  <div class="main">
    <h1 class="sectionTitel">Projects</h1>
    <div class="cardContainer">
      <div class="leftCard">
        <router-link to="/juice" class="link">
          <h3 class="title">Juice <span>Bar</span></h3>
        </router-link>
        <div class="projectDetails">
          <p>
            Durchstöbern Sie die frische Saftkarte auf eine attraktive und einfache Weise. Die
            Website ermöglicht es Besuchern, alle verfügbaren Optionen übersichtlich und klar zu
            entdecken.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Bebas+Neue&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&family=Poetsen+One&family=Prata&family=Special+Gothic+Expanded+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Bebas+Neue&family=Concert+One&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&family=Poetsen+One&family=Prata&family=Special+Gothic+Expanded+One&display=swap');
.main {
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: #1a3e5f;
}
.sectionTitel {
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 37px;
  margin-bottom: 30px;
  padding-top: 20px;
}
.light .sectionTitel {
  color: var(--text-color-dark);
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.dark .sectionTitel {
  color: var(--text-color-dark);
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
}
.cardContainer {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.leftCard {
  width: 450px;
  height: 600px;
  background: #1a3e5f;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  overflow: hidden;
}
.projectDetails {
  width: 100%;
  height: 100%;
  background-color: rgb(252, 252, 252);
  margin-top: 60px;
  color: black;
  font-family: 'Poetsen One', sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.projectDetails p {
  margin-top: 20px;
}
.leftCard .title {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  text-align: center;
  font-style: normal;
  font-size: 45px;
  margin: 100px;
  color: white;
}
.link {
  text-decoration: none;
}
.leftCard .title span {
  color: rgb(241, 76, 0);
}
.leftCard .description {
  font-family: 'Poetsen One', sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 20px;
}
.light .projectDetails {
  background-color: #ececec;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.leftCard {
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
@media only screen and (max-width: 768px) {
  .leftCard {
    width: 80%;
    margin: auto;
  }
}
</style>
