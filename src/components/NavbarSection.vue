<template>
  <div class="main">
    <div class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="logo"><img src="../assets/logo.png" alt="" /></div>
      <div>
        <img src="../assets/navbar.png" alt="" class="navbarIcon" @click="toggleNavbar()" />
      </div>

      <div class="darkLight">
        <img :src="icon" alt="" class="toggleMode" @click="toggleMode" />
      </div>
      <div class="nav-links">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <router-link to="/juice">Projects</router-link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div class="responsive-nav" :class="{ active: menueOpen }">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <router-link to="/juice">Projects</router-link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import light from '../assets/light.svg'
import dark from '../assets/dark.svg'
export default {
  data() {
    return {
      isScrolled: false,
      isDark: true,
      menueOpen: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    icon() {
      return this.isDark ? light : dark
    },
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 300
    },
    toggleMode() {
      this.isDark = !this.isDark
      document.documentElement.className = this.isDark ? 'dark' : 'light'
    },
    toggleNavbar() {
      this.menueOpen = !this.menueOpen
    },
  },
}
</script>
<style scoped>
.navbar {
  padding: 0px 20px 0px 0px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index: 1;
}
.logo img {
  width: 58px;
  cursor: pointer;
  margin: 20px;
}
ul {
  display: flex;
}
li {
  list-style: none;
  padding-top: 20px;
}
li a {
  text-decoration: none;
  color: white;
  display: block;
  margin: 16px;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  position: relative;
}

ul li a::before {
  content: '';
  height: 2px;
  width: 100%;
  background-color: #ffffff;
  position: absolute;
  bottom: 0px;
  margin-right: 5px;
  margin-bottom: 0px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
ul li a:hover::before {
  transform: scaleX(1);
}
.navbar-scrolled {
  background-color: rgb(32, 50, 66);
  transition: 1s;
}
.navbar-scrolled li a {
  color: white;
}
.navbar-scrolled li a::before {
  background-color: white;
}
.darkLight {
  height: 40px;
  width: 40px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 20px;
}
.darkLight img {
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
.light {
  background-color: red;
}
.navbarIcon {
  width: 30px;
  height: 30px;
  position: fixed;
  top: 20px;
  right: 10px;
  display: none;
  filter: brightness(1) invert(1);
  cursor: pointer;
}
.responsive-nav {
  display: none;
  position: fixed;
  top: 100%;
  left: 0px;
  right: 0;
  background-color: rgba(32, 50, 66, 0.9);
  transition: top 0.3s ease-in-out;
  text-align: center;
  z-index: 1000;
}
@media only screen and (max-width: 768px) {
  .navbar {
    width: 100%;
    height: 90px;
    justify-content: space-between;
  }
  .nav-links {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: column;

    width: 100%;
    background-color: rgba(32, 50, 66, 0.9);
    padding: 10px;
  }
  .navbarIcon {
    display: block;
  }
  .responsive-nav {
    display: block;
  }
  .responsive-nav.active {
    top: 90px;
  }
  .darkLight {
    position: fixed;
    top: 20px;
    right: 50%;
  }
}
</style>
