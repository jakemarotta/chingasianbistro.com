<template>
  <div>
    <b-carousel
      id="home-carousel"
      :interval="3000"
      img-height="374"
      label-next=""
      label-prev=""
      controls
      indicators
    >
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/carousel/image1.jpg"
            alt="carousel-image-1"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/carousel/image2.jpg"
            alt="carousel-image-2"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/carousel/image3.jpg"
            alt="carousel-image-3"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/carousel/image4.jpg"
            alt="carousel-image-4"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/carousel/image5.jpg"
            alt="carousel-image-5"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/carousel/image6.jpg"
            alt="carousel-image-6"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/carousel/image7.jpg"
            alt="carousel-image-7"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide >
        <template #img>
          <img
            class=""
            src="../assets/carousel/image8.jpg"
            alt="carousel-image-8"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    const images = [];
    for (let i = 1; i <= 8; i++) { images.push(`../assets/carousel/image${i+1}`) }
    return {
      images,
    }
  }
}
</script>

<style scoped>
.carousel {
  /* height: 374px; */
}
</style>