<template>
  <div class="mb-2">
    <div class="d-flex justify-content-between align-items-center border-bottom-black">
      <h5 class="py-1">
        {{title}}
        <img v-if="spicy" src="/images/menu/hotpepper.png" alt="Hot &amp; Spicy" class="ml-1 mb-1" />
      </h5>
      <span class="text-right">{{price}}</span>
    </div>
    <p class="font-italic text-left">{{description}}</p>
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