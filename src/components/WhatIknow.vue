<template>
  <div class="main">
    <h1>SKILLS</h1>
    <div class="tool">
      <div class="x" v-for="i in frontendSkills" :key="i">
        <img src="../assets/check-mark.png" alt="" />
        <p>{{ i }}</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="tool">
      <div class="x" v-for="i in backendSkills" :key="i">
        <img src="../assets/check-mark.png" alt="" />
        <p>{{ i }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      frontendSkills: ['HTML', 'CSS', 'JS', 'Vue', 'Bootstrb'],
      backendSkills: ['Java', 'Spring boot', 'SQL', 'MariaDB', 'Git and Github', 'Docker'],
    }
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&family=Prata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Bebas+Neue&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&family=Poetsen+One&family=Prata&family=Special+Gothic+Expanded+One&display=swap');
.main {
  height: 90vh;
  width: 80%;
  margin: auto;
}
h1 {
  font-weight: normal;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  font-size: 35px;
  margin-bottom: 50px;
}
.tool {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
}
.tool img {
  width: 25px;
}
.light img {
  filter: brightness(0);
}
.tool .x {
  display: flex;
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
}
.x p {
  font-size: 20px;
}
.line {
  width: 0px;
  height: 1px;
  background-color: rgb(175, 175, 175);
  margin: auto;
  animation: lineAnimation 2s ease-in-out infinite alternate;
  transform-origin: center;
}
.light .line {
  background-color: black;
}
@keyframes lineAnimation {
  0% {
    width: 0;
  }
  100% {
    width: 200px;
  }
}
</style>
