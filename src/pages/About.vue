<template>
  <div>
    <b-img 
      fluid 
      src="../assets/banners/about-banner.jpg" 
      class="d-block mb-2"
      height="300"
    />
    
    <HoursOfOperation class="mx-5 mb-4" />
    
    <p class="mx-4 mb-3">
      If you're craving the bold flavors of authentic Asian and Chinese
      cuisine, visit Ching Asian Bistro in Franklin, TN.
    </p>
    <p class="mx-4 mb-3">
      Located in Westhaven area of Franklin, Tennessee, our Asian and
      Chinese restaurant offers the best Asian and Chinese food in town,
      creating a fine dining experience for the entire family. From noodles
      to fried rice and spring rolls, our restaurant prepares fine Asian and
      Chinese cuisine right before your eyes for the ultimate dining
      pleasure. For great Asian and Chinese food, stop by and dine with us
      or order takeout today.
    </p>
    <p class="mx-4 mb-3">
      Also, join us at our new <b>sushi bar</b> to experience the vibrant
      flavors, prepared by our in-house sushi chef.
    </p>
    <p class="mx-4 mb-3">
      Ching Asian Bistro features a special lunch and dinner menu, available
      for dine-in or carry-out.
    </p>
  </div>
</template>

<script>
import HoursOfOperation from "../components/HoursOfOperation";

export default {
  name: "About",
  components: {
    HoursOfOperation,
  },
}
</script>
