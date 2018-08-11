<template>
  <div class="app">   
    <Loading v-if="isLoading" />

    <PostSearch v-on:postSearching="searchPost" />

    <div class="posts">
      <Posts v-if="!isLoading"
            v-for="mainPost in filterPost"
            :key="mainPost.id"
            :mainPost="mainPost" />
    </div>   
  </div>
</template>

<script>
import axios from 'axios';

//Components
import PostSearch from './Home/PostSearch.vue'
import Posts from './Home/Posts.vue'
import Loading from './Home/Loading.vue'

export default {
  name: "Home",
  data() {
    return {      
      isLoading: true,
      postSearch: '',
      mainPosts: []
    }
  },
  methods: {
    searchPost(q) {
      this.postSearch = q;
    }
  },
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        if (res.status == 200) {
          this.mainPosts = res.data;
          this.isLoading = false;
          console.log('axios.get success!');
        }
      })
      .catch(e => {
        this.isLoading = false;
        console.log(`Error: ${e}`);
      })
  },
  computed: {
    filterPost() {
      return this.mainPosts.filter(post => {
        return post.title.toLowerCase().includes(this.postSearch.toLowerCase())
      });
    }
  },
  components: { Posts, Loading, PostSearch }
};
</script>

<style>
</style>

