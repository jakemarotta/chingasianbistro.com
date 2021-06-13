<template>
  <div class="home-page content-page">
    <b-carousel
      id="home-carousel"
      class="banner"
      :interval="3000"
      label-next=""
      label-prev=""
      img-height="300"
      controls
      indicators
    >
      <b-carousel-slide
        v-for="(src, _, index) in images"
        :key="`carousel-slide-${index}`"
        img-height="300"
      >
        <template #img>
          <img
            :src="src"
            :alt="`carousel-image-${index}`"
            height="300"
            :class="showBanner ? 'show' : 'hide'" 
            @load="showBanner = true"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
const images = {
  image1: undefined,
  image2: undefined,
  image3: undefined,
  image4: undefined,
  image5: undefined,
  image6: undefined,
  image7: undefined,
  image8: undefined,
}
import(/* webpackPreload: true */ "../assets/carousel/image1.jpg").then(m => images.image1 = m.default);
import(/* webpackPreload: true */ "../assets/carousel/image2.jpg").then(m => images.image2 = m.default);
import(/* webpackPreload: true */ "../assets/carousel/image3.jpg").then(m => images.image3 = m.default);
import(/* webpackPreload: true */ "../assets/carousel/image4.jpg").then(m => images.image4 = m.default);
import(/* webpackPreload: true */ "../assets/carousel/image5.jpg").then(m => images.image5 = m.default);
import(/* webpackPreload: true */ "../assets/carousel/image6.jpg").then(m => images.image6 = m.default);
import(/* webpackPreload: true */ "../assets/carousel/image7.jpg").then(m => images.image7 = m.default);
import(/* webpackPreload: true */ "../assets/carousel/image8.jpg").then(m => images.image8 = m.default);

export default {
  name: "Home",
  data() {
    return {
      showBanner: false,
      images,
    }
  },
}
</script>

<style scoped>
.home-page #home-carousel .carousel-item {
  overflow: hidden;
  position: relative;
  padding-bottom: 42.988505747%;
  height: 0;
}
.home-page #home-carousel .carousel-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
</style>