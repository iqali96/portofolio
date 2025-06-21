<script setup lang="ts">
import hero from '../components/HeroSection.vue'
import about from '../components/AboutSection.vue'
import whatICan from '../components/whatICan.vue'
import whatIKnow from '../components/WhatIknow.vue'
import edication from '../components/EdicationSection.vue'
import project from '../components/ProjectsSection.vue'
</script>

<template>
  <main>
    <hero class="hero" />
    <about class="about" />
    <whatIKnow class="whatIKnow" />
    <whatICan class="whatICan" />
    <edication class="edication" />
    <project class="projects" />
  </main>
</template>
<style scoped>
main {
  overflow: hidden;
}
.hero {
  margin-bottom: 200px;
}
</style>
