<template>
  <div class="home">
    <Navbar />
    <h1>Home</h1>
    <div class="col-md3 mt-4">
      <CardItem />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CardItem from '@/components/CardItem.vue'
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fc79a69c1c1b92aa2865b4d';

export default {
  name: 'Home',
  components: {
    Navbar,
    CardItem
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    setItem(data) {
      this.items = data;
    },
  },
  mounted(){
      axios
      .get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
      .then(function (response) {
        // handle success
        console.log("Berhasil", response);
      })
      .catch(function (error) {
        // handle error
        console.log("Gagal", error);
      })
  }
}
</script>
