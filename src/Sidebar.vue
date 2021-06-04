<template>
  <b-sidebar 
    id="main-sidebar" 
    :visible="visible"
    bg-variant="custom" 
    text-variant="dark"
    align="left"
    shadow 
    backdrop
    @hidden="onHidden"
  >
    <div class="wrapper px-3">
      <b-nav vertical>
        <router-link to="/" class="nav-link">
          <b-button variant="link" @click="onHidden">
            Home
          </b-button>
        </router-link>
        <router-link to="/about" class="nav-link">
          <b-button variant="link" @click="onHidden">
            About
          </b-button>
        </router-link>
        <div class="nav-link">
          <b-button variant="link" @click="toggleMenuSubmenu">
            Menu
            <template v-if="menuSubmenuOpen">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
            </template>
          </b-button>
        </div>
        <b-collapse v-model="menuSubmenuOpen">
          <div class="submenu">
            <router-link to="/menu/appetizers" class="nav-link">
              <b-button variant="link" @click="onHidden">
                Appetizers
              </b-button>
            </router-link>
            <router-link to="/menu/sides" class="nav-link">
              <b-button variant="link" @click="onHidden">
                Soups&nbsp;&amp;&nbsp;Salads
              </b-button>
            </router-link>
            <router-link to="/menu/specials" class="nav-link">
              <b-button variant="link" @click="onHidden">
                Specials
              </b-button>
            </router-link>
            <router-link to="/menu/entrees" class="nav-link">
              <b-button variant="link" @click="onHidden">
                Entr&eacute;es
              </b-button>
            </router-link>
            <router-link to="/menu/sushi" class="nav-link">
              <b-button variant="link" @click="onHidden">
                Sushi
              </b-button>
            </router-link>
          </div>
        </b-collapse>
        <router-link to="/location" class="nav-link">
          <b-button variant="link" @click="onHidden">
            Location
          </b-button>
        </router-link>
        <router-link to="/contact" class="nav-link">
          <b-button variant="link" @click="onHidden">
            Contact
          </b-button>
        </router-link>
      </b-nav>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    visible: {
      type: Boolean,
      required: true,
    }
  },
  model: {
    prop: "visible",
    event: "update:visible"
  },
  data() {
    return {
      menuSubmenuOpen: false,
    }
  },
  computed: {
    menuSubmenuCaret() {
      return `bi bi-caret-${this.menuSubmenuOpen ? "up" : "down"}-fill`;
    }
  },
  methods: {
    onHidden() {
      this.$emit("update:visible", false);
    },
    toggleMenuSubmenu() {
      this.menuSubmenuOpen = !this.menuSubmenuOpen;
    },
  }
}
</script>

<style>
#main-sidebar.bg-custom {
  background-color: #aca286;
}
#main-sidebar .nav-link {
  padding: 0;
}
#main-sidebar > .b-sidebar-body > .wrapper > .nav > .nav-link button {
  font-size: 2em;
  color: rgba(0, 0, 0, 0.5);
}
#main-sidebar .submenu {
  margin-left: 2em;
  padding-bottom: 1em;
  padding-top: 0.5em;
}
#main-sidebar .submenu .nav-link button {
  font-size: 1.25em;
  color: rgba(0, 0, 0, 0.5);
}
</style>
