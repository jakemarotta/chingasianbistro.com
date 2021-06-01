<template>
  <div class="container my-5">
    <h4 class="text-center mb-3">{{title}}</h4>
      <div>
        <slot />
      </div>
  </div>
</template>

<script>
export default {
  name: "MenuSection",
  props: { 
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
