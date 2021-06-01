<template>
  <div id="app" :class="appClass">

    <header>
      <router-link to="/">
        <img alt="Ching Asian Bistro" src="./assets/logo/chingasianbistro.png">
      </router-link>
      <b-navbar sticky toggleable="sm" type="dark" class="mx-auto main-navbar">
        
        <b-navbar-toggle target="main-navbar-collapse" />
        <b-collapse id="main-navbar-collapse" is-nav>
          <b-navbar-nav fill tabs class="justify-space-between w-100">
            <b-nav-item to="/about">
              <h5 class="font-weight-light">About</h5>
            </b-nav-item>
            <b-nav-item to="/menu">
              <h5 class="font-weight-light">Menu</h5>
            </b-nav-item>
            <b-nav-item to="/location">
              <h5 class="font-weight-light">Location</h5>
            </b-nav-item>
            <b-nav-item to="/contact">
              <h5 class="font-weight-light">Contact</h5>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <main role="main">
      <div class="bg-main mx-auto mb-3 p-1 main-container">
        <b-overlay :show="pageLoading" bg-color="#aca286" rounded no-center>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </b-overlay>
      </div>
    </main>

    <footer>
      <b-container>
        <b-row>
          <b-col>
            <h5 class="pb-1 border-bottom-main">Social Media</h5>
            <div class="flex-wrap justify-content-center">
              <a class="social-icon" href="https://www.facebook.com/Ching-Asian-Bistro-150821338404204/" target="_blank">
                <BIconFacebook />
              </a>
            </div>
          </b-col>
          <b-col cols="6">
            <h5 class="pb-1 border-bottom-main">
              Located in Franklin, TN
            </h5>
            <p>
              Formerly the Great Wall of China Restaurant, Ching Asian Bistro
              offers a variety of excellent Asian Chinese foods in a friendly,
              family-oriented atmosphere. You can always count on us for a
              great menu selection, personalized services, and competitive
              prices. Our friendly staff works one-on-one with you to make
              each visit a pleasant one.
            </p>
          </b-col>
          <b-col>
            <h5 class="pb-1 border-bottom-main">Navigate</h5>
            <b-nav vertical class="footer-nav align-items-start">
              <b-nav-item to="/about">
                About
              </b-nav-item>
              <b-nav-item to="/menu">
                Menu
              </b-nav-item>
              <b-nav-item to="/location">
                Location
              </b-nav-item>
              <b-nav-item to="/contact">
                Contact Us
              </b-nav-item>
            </b-nav>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="d-flex justify-content-around border-top-main border-bottom-main py-1">
            <span class="font-weight-bold">Ching Asian Bistro</span>
            <span class="px-2">|</span>
            <span>(615) 595-9780</span>
            <span class="px-2">|</span>
            <span>188 Front St. Suite 104</span>
            <span class="px-2">|</span>
            <span>Franklin, TN 37064</span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <span>© 2019. All rights reserved.</span>
          </b-col>
        </b-row>
      </b-container>
    </footer>

    <transition name="fade">
      <div id="scrollToTopButton" v-show="scrollY > 300" @click="toTop">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none"
          stroke="#ffffff"
          stroke-opacity="0.5"
          stroke-width="1" 
          stroke-linecap="square" 
          stroke-linejoin="arcs"
        >
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
import { BIcon, BIconFacebook } from "bootstrap-vue";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BIcon,
    BIconFacebook,
  },
  data() {
    return {
      scrollTimeout: 0,
      scrollY: 0,
      pageLoading: true,
    }
  },
  computed: {
    appClass() {
      return {
        "is-loading": this.pageLoading,
      }
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.pageLoading = true;
      next();
    });
    this.$router.afterEach(() => {
      this.pageLoading = false;
    });
    window.addEventListener("load", this.onLoad);
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scrollTimeout) return;
      this.scrollTimeout = setTimeout(() => {
        this.scrollY = window.scrollY;
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    onLoad() {
      this.pageLoading = false;
    },
  },
}
</script>

<style>
#app {
  text-align: center;
  height: 100%;
  width: 100%;
  background-image: url(./assets/chingasiancuisine_bg.jpg);
  background-position: top center;
  background-repeat: no-repeat;
}

html,
body {
  height: 100%;
}

#root {
  
}

body {
  background-color: #000000;
}

#scrollToTopButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 8px 12px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
}

/*
  Navbar
*/

.main-navbar {
  color: #aca286;
  max-width: calc(870px + 0.5em);
}

.main-navbar .navbar-nav {
  border-color: 1px solid #aca286;
}

.main-navbar .navbar-nav .nav-link {
  background-color: transparent;
  border: 1px solid transparent;
  color: #aca286;
  border-radius: 4px;
}

.main-navbar .navbar-nav .nav-item:not(:last-child) {
  margin-right: 4px;
}

.main-navbar .navbar-nav .nav-link.router-link-active {
  border-color: #aca286;
  /* text-decoration: underline; */
}

.main-navbar .navbar-nav .nav-link:hover {
  border-color: #aca286;
}

.footer-nav .nav-link {
  padding: 0;
  padding-bottom: 4px;
}

.social-icon {
  font-size: 32px;
}

/*
  Sections
*/

.main-container {
  position: relative;
  max-width: calc(870px + 0.5em);
  /* min-height: 300px; */
}

.main-container > .b-overlay-wrap > .b-overlay .spinner-border {
  margin-top: 200px;
}

footer {
  color: #aca286;
}


/*
  Background
*/

.bg-black {
  background-color: black;
}

.bg-transparent {
  background-color: transparent;
}

.bg-main {
  background-color: #aca286;
}

/*
  Border
*/

.border-top-main {
  border-top: 1px solid #aca286;
}

.border-top-black {
  border-top: 1px solid #000000;
}

.border-bottom-main {
  border-bottom: 1px solid #aca286;
}

.border-bottom-black {
  border-bottom: 1px solid #000000;
}

/* 
  Transitions
*/
.fade-enter-active, .fade-leave-active {
  transition: 0.25s opacity linear;
}

.fade-enter-active {
  /* transition-delay: .25s; */
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>
