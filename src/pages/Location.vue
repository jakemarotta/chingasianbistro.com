<template>
  <div class="location-page content-page">
    <div class="image-wrapper banner">
      <img 
        :src="locationMapSrc" 
        height="528" 
        class="banner d-block" 
        :class="showBanner ? 'show' : 'hide'" 
        @load="showBanner = true"
      />
    </div>
  </div>
</template>

<script>
import locationMapSrc from "../assets/chingasianbistromap.jpg"

export default {
  name: "Location",
  data() {
    return {
      showBanner: false,
      locationMapSrc,
    }
  }
}
</script>

<style scoped>
.location-page {
  min-height: 60.828%;
}
.location-page .image-wrapper {
  padding-bottom: 60.829493087%;
}
</style>
