<template>
  <header>
    <router-link to="/">
      <img alt="Ching Asian Bistro" class="logo desktop" src="./assets/logo/chingasianbistro.png">
    </router-link>
    <b-navbar type="dark" class="mx-auto main-navbar">
      <b-navbar-toggle target="main-navbar-collapse" />
      <b-collapse id="main-navbar-collapse" is-nav>
        <b-navbar-nav fill tabs class="justify-space-between w-100 mx-auto">
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
      <button @click="toggleSidebar" class="navbar-toggler sidebar-toggler collapsed">
        <span class="navbar-toggler-icon" />
      </button>
      <router-link to="/">
        <img alt="Ching Asian Bistro" class="logo mobile" src="./assets/logo/chingasianbistro.png">
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  inject: ["sidebarState"],
  methods: {
    toggleSidebar() {
      this.sidebarState.visible = !this.sidebarState.visible;
    }
  }
}
</script>

<style scoped>
/*
  Desktop Navbar
 */
.main-navbar {
  color: #aca286;
  max-width: 85%;
}
@media only screen and (max-width: 992px) {
  .logo.desktop {
    display: none;
  }
}
@media only screen and (min-width: 480px) and (max-width: 992px) {
  .main-navbar {
    margin-top: 100px;
  }
}
@media only screen and (max-width: 992px) {
  .main-navbar .nav-item .nav-link h5 {
    font-size: 1em;
  }
}
@media only screen and (min-width: 992px) {
  .main-navbar {
    max-width: calc(870px + 0.5em);
  }
}
@media only screen and (max-width: 768px) {
  .main-navbar .navbar-nav li.nav-item:not(:last-child) {
    margin-right: 0.5em;
  }
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  .main-navbar {
    max-width: 90%;
  }
}
@media only screen and (max-width: 480px) {
  .main-navbar {
    margin-top: 82px;
    max-width: 96%;
  }
  .main-navbar .nav-item .nav-link h5 {
    font-size: 0.8em;
  }
}

.main-navbar .navbar-nav {
  border-color: 1px solid #aca286;
}
.main-navbar .navbar-nav .nav-item:not(:last-child) {
  margin-right: 2em;
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
</style>
