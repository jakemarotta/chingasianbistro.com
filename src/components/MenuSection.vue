<template>
  <div class="container my-5">
    <h4 class="text-center mb-3"><a v-if="anchorId" :id="anchorId"></a>{{title}}</h4>
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
    anchorId: {
      type: String,
    }
  },
}
</script>

