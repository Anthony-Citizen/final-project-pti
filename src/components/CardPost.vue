<template>
  <div class="container">
    <div class="card" style="text-align:left;">
      <div class="card-header" @click="userDetail(post.owner.id)">
        <img
          :src="post.owner.picture"
          class="profile-img col-sm-3 rounded-circle z-depth-2" width="30%"
          alt="..."
        />
        {{ post.owner.firstName }} {{ post.owner.lastName }}<br />
        <!--<p>{{ post.owner.email }}</p>-->
      </div>
      <!--<img src="../assets/images/lrgrec.png" class="card-img-top" alt="...">-->
      <img :src="post.image" class="card-img-top img-fluid d-block mx-auto mb-3 " alt="..." />
        <div class="btn-group col-md-3" role="group" aria-label="Basic example">
            <div v-for="tag in post.tags" :key="tag">
            <button type="button" class="btn btn-danger rounded-pill mx-1 res" style="font-size:small" @click="tagFilter(tag)">{{ tag }}</button>
        </div>
      </div>
      
      <div class="card-body p-4">
        <h5 class="card-title">
          <b-icon icon="suit-heart-fill"></b-icon> {{ post.likes }} Likes
        </h5>
        <p class="card-text">
          {{ post.text }}
        </p>
        <p class="card-text">
          <a :href="post.link" target="_blank">{{ post.link }}</a>
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated {{ post.publishDate }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPost",
  props: ["post"],
  methods: {
    userDetail(value) {
      this.$router.push({ name: "UserDetail", params: { userid: value } });
    },
    tagFilter(value) {
      if (this.$route.name == "Tag") {
        this.$router.push({ name: "Tag", params: { title: value } });
        window.location.reload()
      }else{
        this.$router.push({ name: "Tag", params: { title: value } });
      }
    },
  },
};
</script>

<style>
button{
  white-space: nowrap;
  text-align: center;
}
@media (min-width:200px) {
  .profile-img{
    max-width: 25%;
    height: auto;
  }
}

@media (min-width:600px) {
  .profile-img{
    max-width: 25%;
    height: auto;
  }
}

</style>
