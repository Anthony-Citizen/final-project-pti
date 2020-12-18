<template>
<div class="wrap">
  <b-navbar toggleable="lg" type="light" variant="light" style="background-color:white">
    <b-navbar-brand href="#"><img
          class="d-inline-block align-top"
          src="../assets/images/Logo_Clear.png"
      /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/explore">Explore</router-link>
        <router-link class="nav-link" to="/profile">Profile</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" placeholder="Search" class="mr-sm-2" v-model="keyword" ></b-form-input>
          <b-button size="sm" variant="outline-success" class="my-2 my-sm-0" type="submit" @click="searchName(keyword)" >Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      keyword:null,
    };
  },
  methods: {
    searchName(value){
      this.$router.push({ name: "UserDetail", params: { name: value } });
    }
  },
};
</script>

<style>
.wrap{
  margin-bottom:10px;
}
img {
  width: 300px;
  height: 50px;
}
@media only screen and (max-width: 600px) {
  img {
    width: 180px;
    height: 30px;
  }
}
</style>
