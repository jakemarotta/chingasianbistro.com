<template>
  <div class="hours-of-operation flex-column align-items-center text-center mx-auto">
    <h4>Hours of Operation</h4>
    <div class="d-flex flex-wrap justify-content-between border-bottom-black">
      <span class="font-weight-bold">Sunday</span>
      <span class="text-right">11:00am&nbsp;-&nbsp;9:30pm</span>
    </div>
    <div class="d-flex flex-wrap justify-content-between border-bottom-black">
      <span class="font-weight-bold">Monday</span>
      <span class="text-right">Closed</span>
    </div>
    <div class="d-flex flex-wrap justify-content-between border-bottom-black">
      <span class="font-weight-bold">Tuesday</span>
      <span class="text-right">11:00am&nbsp;-&nbsp;9:30pm</span>
    </div>
    <div class="d-flex flex-wrap justify-content-between border-bottom-black">
      <span class="font-weight-bold">Wednesday</span>
      <span class="text-right">11:00am&nbsp;-&nbsp;9:30pm</span>
    </div>
    <div class="d-flex flex-wrap justify-content-between border-bottom-black">
      <span class="font-weight-bold">Thursday</span>
      <span class="text-right">11:00am&nbsp;-&nbsp;9:30pm</span>
    </div>
    <div class="d-flex flex-wrap justify-content-between border-bottom-black">
      <span class="font-weight-bold">Friday</span>
      <span class="text-right">11:00am&nbsp;-&nbsp;10:30pm</span>
    </div>
    <div class="d-flex flex-wrap justify-content-between border-bottom-black">
      <span class="font-weight-bold">Saturday</span>
      <span class="text-right">11:00am&nbsp;-&nbsp;10:30pm</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HoursOfOperation",
}
</script>

<style scoped>
.hours-of-operation {
  font-size: 16px;
  max-width: 400px;
}
</style>