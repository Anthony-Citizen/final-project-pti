<template>
<div>
    <Navbar />
    <div class="container">
        <div class="card-columns column-count">
            <div v-for="post in posts" :key="post.id">
                <CardPost :post="post"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CardPost from '@/components/CardPost.vue'
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5fd9c56670e3336ede8fe363';

export default {
    name: 'UserPost',
    components: {
        Navbar,
        CardPost,
    },
    data() {
        return {
            title: undefined,
            posts: [],
        };
    },
    methods: {
        setPosts(data) {
            this.posts = data;
            console.log(this.posts);
        },
    },
    mounted(){
        this.id=this.$route.params.userid
        console.log(this.id)
        axios
        .get(`${BASE_URL}/user/${this.id}/post`, { headers: { 'app-id': APP_ID } })
        .then((response) => {
            this.setPosts(response.data.data)
        })
        .catch((error) => console.log(error))
    },        
}
</script>

<style>
@media (min-width: 17em) {
    .card-columns {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
    }
}

@media (min-width: 34em) {
    .card-columns {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }
}

@media (min-width: 48em) {
    .card-columns {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
    }
}
</style>