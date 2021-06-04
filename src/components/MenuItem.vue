<template>
  <div class="menu-item mb-2">
    <div class="d-flex justify-content-between align-items-center border-bottom-black">
      <h5 class="title py-1 text-left">
        {{title}}
        <img v-if="spicy" src="../assets/menu/hotpepper.png" alt="Hot &amp; Spicy" class="ml-1 mb-1" />
      </h5>
      <span class="price text-right">{{price}}</span>
    </div>
    <p class="description font-italic text-left">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    spicy: {
      type: Boolean,
      default: false,
    },
  }  
}
</script>

<style scoped>
.menu-item {

}
@media only screen and (max-width: 768px) {
  .menu-item .title {
    font-size: 1em;
  }
  .menu-item .price {
    font-size: 0.875em;
  }
  .menu-item .description {
    font-size: 0.875em;
  }
}
</style>