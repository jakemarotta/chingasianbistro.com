<template>
  <transition name="fade">
    <div class="scroll-to-top-button" v-show="scrollY > 300" @click="toTop">
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
</template>

<script>
export default {
  name: "ScrollToTop",
  data() {
    return {
      scrollTimeout: 0,
      scrollY: 0,
      pageLoading: true,
      sidebarOpen: false,
    }
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
  },
}
</script>

<style scoped>
.scroll-to-top-button {
  position: fixed;
  bottom: 0.75em;
  right: 0.75em;
  padding: 0.5em 0.75em;
  border: 0.125em solid rgba(255, 255, 255, 0.5);
  border-radius: 0.25em;
}
</style>
