<template>
  <div class="menu-page content-page">
    <header class="banner">
      <b-carousel
        id="menu-carousel"
        :value="menuBanner"
        label-next=""
        label-prev=""
        img-height="300"
        fade
      >
        <b-carousel-slide >
          <template #img>
            <img
              src="../assets/banners/appetizers-banner.jpg"
              alt="Appetizers Menu banner"
              height="300"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide >
          <template #img>
            <img
              src="../assets/banners/entrees-banner.jpg"
              alt="Entrees Menu banner"
              height="300"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide >
          <template #img>
            <img
              src="../assets/banners/sides-banner.jpg"
              alt="Sides Menu banner"
              height="300"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide >
          <template #img>
            <img
              src="../assets/banners/specials-banner.jpg"
              alt="Specials Menu banner"
              height="300"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide >
          <template #img>
            <img
              src="../assets/banners/sushi-banner.jpg"
              alt="Sushi Menu banner"
              height="300"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>
      <b-navbar toggleable="lg" class="menu-navbar flex-wrap border-bottom-black">
        <b-navbar-nav pills class="flex-wrap justify-content-around align-items-center w-100">
          <b-nav-item to="/menu/appetizers" class="mx-2">
            Appetizers
          </b-nav-item>
          <b-nav-item to="/menu/sides" class="mx-2">
            Soups&nbsp;&amp;&nbsp;Sides
          </b-nav-item>
          <b-nav-item to="/menu/specials" class="mx-2">
            Specials
          </b-nav-item>
          <b-nav-item to="/menu/entrees" class="mx-2">
            Entr&eacute;es
          </b-nav-item>
          <b-nav-item to="/menu/sushi" class="mx-2">
            Sushi
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </header>
    <b-overlay :show="menuLoading" bg-color="#aca286" rounded no-center>
      
      <main>
        <div class="menu-content">
          <transition name="fade">
            <router-view ref="contentRouterView" />
          </transition>
        </div>
      </main>
    </b-overlay>
  </div>
</template>

<script>
import smoothReflow from "vue-smooth-reflow";
import fetchMenu from "../utils/fetchMenu";

export default {
  name: "Menu",
  mixins: [smoothReflow],
  data() {
    return {
      menuLoading: true,
      menu: {
        appetizers: [],
        entrees: {
          beef: [],
          pork: [],
          vegetable: [],
          seafood: [],
          chicken: [],
          lunchOptions: [],
          lunchList: [],
          lunchSchedule: {
            startTime: "",
            endTime: "",
            sundayStartTime: "",
            sundayEndTime: "",
            price: "",
          }
        },
        specials: {
          friedRice: [],
          loMein: [],
          mooShi: [],
          eggFooYoung: [],
          chefsSpecialties: [],
        },
        soupsAndSides: {
          soupsAndSides: [],
          salads: [],
        },
        sushi: {
          nigiri: [],
          sashimi: [],
          maki: [],
          appetizers: [],
        },
      },
      banners: {
        appetizers: "../assets/banners/appetizers-banner.jpg",
        entrees: "../assets/banners/entrees-banner.jpg",
        sides: "../assets/banners/sides-banner.jpg",
        specials: "../assets/banners/specials-banner.jpg",
        sushi: "../assets/banners/sushi-banner.jpg",
      }
    }
  },
  computed: {
    menuBanner() {
      const menu = this.$route.path.split("/").pop();
      return Object.keys(this.banners).findIndex(key => key === menu);
    },
  },
  methods: {
    bannerClass(bannerSrc) {
      return {
        "is-hidden": bannerSrc !== this.menuBanner,
      };
    }
  },
  provide() {
    return {
      menu: this.menu,
    }
  },
  created() {
    fetchMenu().then(menu => {
      Object.assign(this.menu, menu);
      this.$nextTick(() => this.menuLoading = false);
    });
  },
  mounted() {
    // this.$smoothReflow({
    //   el: this.refs.$contentRouterView,
    // });
  }
}
</script>

<style scoped>
.menu-page {
  min-height: 110vh;
}

.menu-page .banner #menu-carousel .carousel-item img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.menu-navbar {
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
@media only screen and (max-width: 992px) {
  .menu-navbar {
    display: none;
  }
}

.menu-navbar .navbar-nav .nav-item {
  width: 17%;
  text-align: center;
  line-height: 1em;
}

.menu-navbar .navbar-nav .nav-link {
  border: 1px solid transparent;
  border-radius: 0.25em;
  transition: 0.3s border-color ease;
}

.menu-navbar .navbar-nav .nav-link.router-link-active,
.menu-navbar .navbar-nav a.nav-link:hover {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.5)
}

.menu-page .menu-content {
  padding: 0 1em;
}

.menu-page .menu-content {

}

.fade-enter-active, .fade-leave-active {
  transition: 0.25s opacity linear;
  opacity: 1;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  /* hides flickering beneath screen bounds */
  /* min-height: 35em; */
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
}

@media only screen and (max-width: 992px) {
  .menu-navbar .navbar-nav .nav-item .nav-link {
    border-color: rgba(0, 0, 0, 0.1);
  }
  .menu-navbar .navbar-nav .nav-item .nav-link.router-link-active {
    border-color: rgba(0, 0, 0, 0.5);
  }
  .menu-navbar .navbar-nav .nav-item:not(:last-child) {
    margin-bottom: 0.25em;
  }
}
</style>