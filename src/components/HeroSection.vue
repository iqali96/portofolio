<template>
  <div class="main">
    <div class="hero">
      <div class="name">
        <h1>Hi, I am Ali</h1>
        <p class="desc">Creative Designer & Developer Located in Vienna</p>
      </div>
      <div class="arrow">
        <a href="" @click.prevent="scrollToSection">
          <img src="../assets/down-arrow.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {},
  methods: {
    scrollToSection() {
      const el = document.getElementById('about')
      el?.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+MX+Guides&display=swap');
.main {
  height: 140vh;
}
.hero {
  background: url('../assets/hero.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 110% !important;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.name {
  margin-left: 30px;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 30px;
  color: white;
}
.name h1 {
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
}
.desc {
  background-color: rgb(32, 50, 66);
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
}
.arrow img {
  width: 50px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  cursor: pointer;
  animation: pulse 2s infinite;
  border-radius: 50%;
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 5);
  }
  70% {
    box-shadow: 0 0 20px 20px rgba(255, 255, 255, 0);
  }
}
</style>
