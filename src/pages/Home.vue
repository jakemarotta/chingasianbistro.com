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
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/banners/entrees-banner.jpg"
            alt="carousel-image-1"
            height="300"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/banners/sushi-banner.jpg"
            alt="carousel-image-2"
            height="300"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/banners/specials-banner.jpg"
            alt="carousel-image-3"
            height="300"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/banners/bowl-banner.jpg"
            alt="carousel-image-4"
            height="300"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/banners/noodle-banner.jpg"
            alt="carousel-image-5"
            height="300"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/banners/appetizers-banner.jpg"
            alt="carousel-image-6"
            height="300"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/banners/shumai-banner.jpg"
            alt="carousel-image-7"
            height="300"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/banners/fried-rice-banner.jpg"
            alt="carousel-image-8"
            height="300"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
.home-page #home-carousel .carousel-item {
  overflow: hidden;
}
.home-page #home-carousel .carousel-item img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>