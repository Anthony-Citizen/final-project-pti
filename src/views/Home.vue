<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-12">
          <div class="row">
            <div class="col-sm-12" v-for="item in items" :key="item.id">
              <CardItem :item="item"/>
            </div>
          </div>
        </div>
        <div class="col-md-4 nopadding">
          <div class="card">
            <img src="../assets/images/rice-bowl.png" class="card-img-top pr-img" alt="..." style="width:50px">
            <div class="card-body">
              <h5 class="card-title">Nasi Uduk</h5>
              <p class="card-text">Introduction to Internet Technology Final Project</p>
              <a href="#" class="btn btn-light"><router-link class="nav-link" to="/profile">Profile</router-link></a>
              <p>&copy;Holograph-2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CardItem from '@/components/CardItem.vue'
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fd9c5812f835ac07e51038f';

export default {
  name: 'Home',
  components: {
    Navbar,
    CardItem,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    setItems(data) {
      this.items = data;
      //console.log(this.items);
    },
  },
  mounted(){
      axios
      .get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
      .then((response) => this.setItems(response.data.data))
      .catch((error) => console.log(error))
  },
}
</script>

<style>
.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}
@media (min-width: 200px) {
  .pr-img {
    width: 80vw;
}
}
@media (min-width: 700px) {
  .pr-img {
    height: 48vw;
}
}
@media (min-width: 800px) {
  .pr-img {
    height: 30vw;
}
}
@media (min-width: 1000px) {
  .pr-img {
    height: 26vw;
}
}
</style>
