<template>
<div class="container">
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="item.picture" class="card-img-top ct" alt="..." @click="userDetail(item.id)">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text"><small class="text-muted">{{ item.id }}</small></p>
        <h5 class="card-title">{{ item.title }}. {{ item.firstName }} {{ item.lastName }}</h5>
        <p class="card-text">Email: {{ item.email }}</p>
        <button type="button" class="btn btn-info mx-1" @click="userDetail(item.id)">Full Profile</button>
        <button type="button" class="btn btn-info" @click="userPost(item.id)">Posts List</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["item"],
  methods: {
    userDetail(value) {
      this.$router.push({name: 'UserDetail', params: {userid: value}})
    },
    userPost(value) {
      this.$router.push({name: 'UserPost', params: {userid: value}})
    },
  },
};
</script>

<style>
@media (min-width: 200px) {
  .card-img-top {
    height: 80vw;
}
}
@media (min-width: 700px) {
  .card-img-top {
    height: 29vw;
}
}
@media (min-width: 1000px) {
  .card-img-top {
    height: 15vw;
}
}
</style>