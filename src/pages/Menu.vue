<template>
  <div class="menu-page">
    <b-overlay :show="menuLoading" bg-color="#aca286" rounded no-center>
      <header>
        <b-carousel
          id="menu-carousel"
          :value="menuBanner"
          img-height="374"
          label-next=""
          label-prev=""
          fade
        >
          <b-carousel-slide
            v-for="(src, menuName, index) in banners"
            :key="`banner_image_${index}`"
            class=""
            :img-src="src"
            :alt="`${menuName} menu banner`"
          />
        </b-carousel>
        <b-navbar toggleable="md" class="menu-navbar border-bottom-black">
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
      <main>
        <transition name="fade">
          <router-view />
        </transition>
      </main>
    </b-overlay>
  </div>
</template>

<script>
import fetchMenu from "../utils/fetchMenu";

export default {
  name: "Menu",
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
        appetizers: "/images/banners/appetizers-banner.jpg",
        entrees: "/images/banners/entrees-banner.jpg",
        sides: "/images/banners/sides-banner.jpg",
        specials: "/images/banners/specials-banner.jpg",
        sushi: "/images/banners/sushi-banner.jpg",
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
  }
}
</script>

<style scoped>
.menu-page .banner-container {
  position: relative;
}

.menu-page .banner-container .menu-banner {
  position: relative;
  transition: 0.5s opacity linear;
  opacity: 1;  
}

.menu-page .banner-container .menu-banner.is-hidden {
  opacity: 0;
}

.menu-navbar {
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}

.menu-navbar .navbar-nav .nav-item {
  width: 150px;
  text-align: center;
  line-height: 16px;
}

.menu-navbar .navbar-nav .nav-link {
  border: 1px solid transparent;
  border-radius: 4px;
}

.menu-navbar .navbar-nav .nav-link.router-link-active,
.menu-navbar .navbar-nav a.nav-link:hover {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.5)
}

.fade-enter-active, .fade-leave-active {
  transition: 0.25s opacity linear;
  opacity: 1;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>