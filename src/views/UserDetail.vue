<template>
  <div>
    <Navbar />
    <div class="card pos mb-3" style="max-width: 1000px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="setItems.picture" class="card-img" alt="..." />
        </div>
        <div class="col-md-4" style="text-align:left;">
          <div class="card-body">
            <p class="card-text">{{setItems.id}}</p>
            <h5 class="card-title">{{ setItems.firstName }}</h5>
            <p class="card-text">
              Gender: {{ setItems.gender }}
            </p>
            <p class="card-text">
              Birth Date: {{ setItems.dateOfBirth }}
            </p>
            <p class="card-text">
              Email: {{ setItems.email }}
            </p>
            <p class="card-text">
              Phone: {{ setItems.phone }}
            </p>
            <p class="card-text">
              <small class="text-muted"
                >Register Date:{{ setItems.registerDate }}
              </small>
            </p>
            <button type="button" class="btn btn-info" @click="userPost(setItems.id)">Posts List</button>
          </div>
        </div>
        <div class="col-md-4" style="text-align:left;">
          <div class="card-body">
            <h5 class="card-title">Address</h5>
            <p class="card-text">
              Street: {{ setItems.location.street }}
            </p>
            <p class="card-text">
              City: {{ setItems.location.city }}
            </p>
            <p class="card-text">
              State: {{ setItems.location.state }}
            </p>
            <iframe src="https://www.google.com/maps/d/embed?mid=1gaQSzilmEXF7ALoUH7VAifYe9fg" width="250" height="150"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fd9c56670e3336ede8fe363';
export default {
    name: 'UserDetail',
    components: {
        Navbar
    },
    data() {
        return {
            id: undefined,
            setItems: undefined,
        };
    },
    methods: {
      userPost(value) {
        this.$router.push({name: 'UserPost', params: {userid: value}})
      },
    },
    mounted(){
        this.id=this.$route.params.userid
        console.log(this.id)
        axios
        .get(`${BASE_URL}/user/${this.id}`, { headers: { 'app-id': APP_ID } })
        .then((response) => {
            this.setItems=response.data
            console.log(this.setItems)
        })
        .catch((error) => console.log(error))
    },        
}
</script>

<style>
.pos {
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
@media (min-width: 200px) {
  .card-img {
    height: 80vw;
}
}
@media (min-width: 700px) {
  .card-img {
    height: 48vw;
}
}
@media (min-width: 800px) {
  .card-img {
    height: 30vw;
}
}
@media (min-width: 1000px) {
  .card-img {
    height: 28vw;
}
}
</style>