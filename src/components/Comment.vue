<template>
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="item.owner.picture" class="card-img" alt="..." style="height:100%">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" @click="userDetail(item.owner.id)">{{ item.owner.firstName }}</h5>
        <p class="card-text">{{ item.message }}</p>
        <p class="card-text"><small class="text-muted">Last updated {{ item.publishDate }}</small></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "Comment",
    props: ["item"],
    methods: {
      userDetail(value) {
        this.$router.push({ name: "UserDetail", params: { userid: value } });
      },
    },
};
</script>

<style>

</style>