<template>
<div class="container">
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <!--<img src="" class="card-img-top" alt="...">-->
  <div class="card-body">
    <h5 class="card-title">{{ item.firstName }} {{ item.lastName }}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["item"],
};
</script>

<style>

</style>