<template>
  <div class="menu-page">
    <b-overlay :show="menuLoading" bg-color="#aca286" rounded no-center>
      <header>
        <b-img 
          fluid
          :src="menuBanner"
          class="d-block"
          height="300"
        />
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
        <transition name="fade" mode="out-in">
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
    }
  },
  computed: {
    menuBanner() {
      const menu = this.$route.path.split("/").pop();
      return `/images/banners/${menu}-banner.jpg`;
    },
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

<style>
.menu-page {
  position: relative;
}

.menu-navbar.navbar-expand {
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
</style>