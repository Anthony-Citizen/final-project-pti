<template>
  <div class="container">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
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
      <img :src="post.image" class="card-img-top img-fluid d-block mx-auto mb-3 " style="height:100%" alt="..." />
        <div class="btn-group col-md-3" role="group" aria-label="Basic example">
            <div v-for="tag in post.tags" :key="tag">
            <button type="button" class="btn btn-danger rounded-pill mx-1 res" style="font-size:small" @click="tagFilter(tag)">{{ tag }}</button>
        </div>
      </div>
      
      <div class="card-body p-4">
        <h5 class="card-title">
          <b-icon icon="suit-heart-fill"></b-icon> {{ post.likes }} Likes <a href="#" id="show-btn" @click="postComment(post.id)"><i class="fas fa-comment"></i></a>
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
    <b-modal ref="my-modal" hide-footer title="Comments">
      <div class="d-block" v-for="item in items" :key="item.id">
        <Comment :item="item"/>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    </b-modal>
  </div>
</template>

<script>
import Comment from '@/components/Comment.vue'
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fd9c5812f835ac07e51038f';

export default {
  name: "CardPost",
  props: ["post"],
  components: {
    Comment,
  },
  data() {
    return {
      items: [],

    };
  },
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
    setItems(data) {
      this.items = data;
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    postComment(id) {
      axios
      .get(`${BASE_URL}/post/${id}/comment`, { headers: { 'app-id': APP_ID } })
      .then((response) => {
        this.showModal()
        this.setItems(response.data.data)
        console.log(response);
      })
      .catch((error) => console.log(error))
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
