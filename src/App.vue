<template>
  <div id="app">
    <Header />

    <main role="main">
      <div class="bg-main mx-auto mb-3 p-1 main-container">
        <b-overlay :show="pageLoading" bg-color="#aca286" rounded no-center>
          <transition name="fade" mode="out-in">
            <component :is="pageComponent" />
          </transition>
        </b-overlay>
      </div>
    </main>

    <Sidebar v-model="sidebarState.visible" />

    <Footer />

    <ScrollToTop />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";
import { ScrollToTop } from "./components";

import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Home from "./pages/Home.vue";
import Location from "./pages/Location.vue";
import Menu from "./pages/Menu.vue";

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Footer,
    ScrollToTop,
  },
  data() {
    return {
      pageLoading: true,
      sidebarState: {
        visible: false,
      }
    }
  },
  computed: {
    pageComponent() {
      const path = this.$route.fullPath;
      if (path.startsWith("/about")) return About;
      if (path.startsWith("/contact")) return Contact;
      if (path.startsWith("/location")) return Location;
      if (path.startsWith("/menu")) return Menu;
      return Home;
    }
  },
  provide() {
    return {
      sidebarState: this.sidebarState,
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
  methods: {
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
#app {
  text-align: center;
  height: 100%;
  width: 100%;
  background-image: url(./assets/chingasiancuisine_bg.jpg);
  background-position: top center;
  background-repeat: no-repeat;
}
@media only screen and (min-width: 480px) and (max-width: 992px) {
  .main-navbar {
    margin-top: 100px;
  }
}
@media only screen and (max-width: 480px) {
  .main-navbar {
    margin-top: 82px;
  }
  #app main .main-container {
    width: 100%;
  }
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

<style>
html,
body {
  height: 100%;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #000000;
}





/*
  Sections
*/

.main-container {
  position: relative;
  max-width: calc(870px + 0.5em);
  width: 85%;
  /* min-height: 30vh; */
  background-color: #aca286;
  border-radius: 4px;
}

.main-container > .b-overlay-wrap > .b-overlay .spinner-border {
  margin-top: 200px;
}

footer {
  color: #aca286;
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
  Image loading/sizing (wrapper should have padding-bottom)
*/
.image-wrapper {
  position: relative;
  height: 0;
}
.image-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 
  Show/Hide elements 
*/
.show {
  transition: 0.25s opacity ease;
}
.hide {
  opacity: 0;
}

</style>
