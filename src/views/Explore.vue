<template>
  <div>
    <Navbar />
      <div class="container">
        <div class="card-arr card-columns">
          <div v-for="post in posts" :key="post.id">
              <CardPost :post="post"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CardPost from '@/components/CardPost.vue'
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fd9c56670e3336ede8fe363';

export default {
  name: 'Explore',
  components: {
    Navbar,
    CardPost,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    setPosts(data) {
      this.posts = data;
      //console.log(this.posts[0].tags[0]);
    },
  },
  mounted(){
      axios
      .get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
      .then((response) => {
        this.setPosts(response.data.data)
      })
      .catch((error) => console.log(error))
  },
}
</script>

<style>
@media (min-width:576px) {
    .card-arr {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
    }
}

@media (min-width:899px) {
    .card-arr {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
        
    }
}

@media (min-width:1281px) {
    .card-arr {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
        column-gap: 1.25rem;
        orphans: 1;
        widows: 1;
    }
}
</style>