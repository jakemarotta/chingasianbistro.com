<template>
  <div class="about-page content-page">
    <div class="image-wrapper">
      <img 
        fluid 
        src="../assets/banners/about-banner.jpg" 
        class="banner d-block mb-2"
        height="300"
        :class="showBanner ? 'show' : 'hide'" 
        @load="showBanner = true"
      />
    </div>
    
    <HoursOfOperation class="mx-5 mb-4" />
    
    <p class="mb-3">
      If you're craving the bold flavors of authentic Asian and Chinese
      cuisine, visit Ching Asian Bistro in Franklin, TN.
    </p>
    <p class="mb-3">
      Located in Westhaven area of Franklin, Tennessee, our Asian and
      Chinese restaurant offers the best Asian and Chinese food in town,
      creating a fine dining experience for the entire family. From noodles
      to fried rice and spring rolls, our restaurant prepares fine Asian and
      Chinese cuisine right before your eyes for the ultimate dining
      pleasure. For great Asian and Chinese food, stop by and dine with us
      or order takeout today.
    </p>
    <p class="mb-3">
      Also, join us at our new <b>sushi bar</b> to experience the vibrant
      flavors, prepared by our in-house sushi chef.
    </p>
    <p class="mb-3">
      Ching Asian Bistro features a special lunch and dinner menu, available
      for dine-in or carry-out.
    </p>
  </div>
</template>

<script>
import HoursOfOperation from "../components/HoursOfOperation";

export default {
  name: "About",
  data() {
    return {
      showBanner: false,
    }
  },
  components: {
    HoursOfOperation,
  },
}
</script>

<style scoped>
.about-page .image-wrapper {
  padding-bottom: 34.4827586207%;
}
</style>
