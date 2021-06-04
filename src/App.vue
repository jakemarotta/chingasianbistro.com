<template>
  <div id="app" :class="appClass">

    <header>
      <router-link to="/">
        <img alt="Ching Asian Bistro" class="logo desktop" src="./assets/logo/chingasianbistro.png">
      </router-link>
      <b-navbar toggleable="sm" type="dark" class="mx-auto main-navbar">
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

      <div class="mobile-navbar">
        <button @click="openSidebar" class="navbar-toggler sidebar-toggler collapsed">
          <span class="navbar-toggler-icon" />
        </button>
        <router-link to="/">
          <img alt="Ching Asian Bistro" class="logo mobile" src="./assets/logo/chingasianbistro.png">
        </router-link>
      </div>
    </header>

    <main role="main">
      <div class="bg-main mx-auto mb-3 p-1 main-container">
        <b-overlay :show="pageLoading" bg-color="#aca286" rounded no-center>
          <transition name="fade" mode="out-in">
            <router-view id="page-content-router" />
          </transition>
        </b-overlay>
      </div>
    </main>

    <Sidebar v-model="sidebarOpen">

    </Sidebar>

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
import Sidebar from "./Sidebar.vue";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BIcon,
    BIconFacebook,
    Sidebar,
  },
  data() {
    return {
      scrollTimeout: 0,
      scrollY: 0,
      pageLoading: true,
      sidebarOpen: false,
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
    openSidebar() {
      this.sidebarOpen = true;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    }
  },
}
</script>

<style scoped>
@media only screen and (min-width: 480px) and (max-width: 992px) {
  #app main {
    margin-top: 100px;
  }
}
@media only screen and (max-width: 480px) {
  #app main {
    margin-top: 82px;
  }
  #app main .main-container {
    width: 100%;
  }

}
</style>

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

html {
  scroll-behavior: smooth;
}

#root {
  
}

body {
  background-color: #000000;
}

#scrollToTopButton {
  position: fixed;
  bottom: 0.75em;
  right: 0.75em;
  padding: 0.5em 0.75em;
  border: 0.125em solid rgba(255, 255, 255, 0.5);
  border-radius: 0.25em;
}

/*
  Navbar
*/

.main-navbar {
  color: #aca286;
  max-width: calc(870px + 0.5em);
}
@media only screen and (max-width: 992px) {
  .main-navbar {
    display: none;
  }
  .logo.desktop {
    display: none;
  }
}
.main-navbar .navbar-nav {
  border-color: 1px solid #aca286;
}
.main-navbar .navbar-nav .nav-item:not(:last-child) {
  margin-right: 3em;
}
.main-navbar .navbar-nav .nav-item .nav-link {
  background-color: transparent;
  border: 1px solid rgba(172, 162, 134, 0.3);
  transition: 0.3s border-color ease;
  color: #aca286;
  border-radius: 4px;
}

.main-navbar .navbar-nav .nav-item .nav-link.router-link-active {
  border-color: #aca286;
  /* text-decoration: underline; */
}

.main-navbar .navbar-nav .nav-item .nav-link:hover {
  border-color: #aca286;
}

.main-navbar .navbar-nav .nav-item .nav-link h5 {
  margin-bottom: 0.125em;
}

.footer-nav .nav-link {
  padding: 0;
  padding-bottom: 4px;
}
.social-icon {
  font-size: 32px;
}

/*
  Mobile "Navbar"
*/
.mobile-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  min-height: 5em;
}
@media only screen and (min-width: 992px) {
  .mobile-navbar {
    display: none;
  }
}
@media only screen and (min-width: 480px) and (max-width: 992px) {
  .mobile-navbar .logo.mobile {
    width: 240px;
  }
}
@media only screen and (max-width: 480px) {
  .mobile-navbar .logo.mobile {
    width: 200px;
  }
}
.mobile-navbar .sidebar-toggler {
  color: rgba(255, 255, 255, 0.5);
  border: 0.125em solid rgba(255, 255, 255, 0.5);
  padding: 0.5em 0.75em;
  position: absolute;
  top: 0.5em;
  left: 0.5em;
}
.mobile-navbar .sidebar-toggler > span {
  color: #aca286;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.mobile-navbar .logo-container {
  position: relative;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.mobile-navbar .logo.mobile {
  height: auto;
}

/*
  Sections
*/

.main-container {
  position: relative;
  max-width: calc(870px + 0.5em);
  width: 85%;
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
  Content
*/
#page-content-router > *:not(.banner) {
  width: 98%;
  margin-left: auto;
  margin-right: auto;
}
#page-content-router.fade-enter-active, #page-content-router.fade-leave-active {
  transition: 0.25s opacity linear;
}

#page-content-router.fade-enter-active {
  transition-delay: 0;
}

#page-content-router.fade-enter, #page-content-router.fade-leave-to {
  opacity: 0;
  min-height: 110vh;
}
</style>
