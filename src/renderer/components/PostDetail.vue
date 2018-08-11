<template>
  <div class="post-detail-page">
    <Loading v-if="isLoading" />
    <router-link to="/">Back to Home</router-link>
    <hr>

    <DetailPost :postDetail="postDetail" />

    <h3 style="text-align: center; margin:15px 0 5px 0;">Comments</h3>
    <Comments :comments="comments" />
  </div>
</template>

<script>
import axios from 'axios';
//
import Loading from './Home/Loading.vue'
import DetailPost from './PostDetail/DetailPost.vue'
import Comments from './PostDetail/Comments.vue'

export default {
  name: 'PostDetail',
  data() {
    return {
      isLoading: true,
      postDetail: {},
      comments: []
    }
  },
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}`)
      .then(res => {
        if (res.status == 200) {
          this.postDetail = res.data;
          this.isLoading = false;
          console.log('axios.get success!');
        }
      })
      .catch(e => {
        this.isLoading = false;
        console.log(`Error: ${e}`);
      })

    axios.get(`http://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}/comments`)
      .then(res => {
        if (res.status == 200) {
          this.comments = res.data;
          this.isLoading = false;
          console.log('axios.get success!');
        }
      })
      .catch(e => {
        this.isLoading = false;
        console.log(`Error: ${e}`);
      })      
  },
  components: { Loading, DetailPost, Comments }
}
</script>

<style>
.post-detail-page {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.post-detail-page a {
  color: #333;
  text-decoration: none;
  transition: 0.3s;
  margin: 50px 0 15px 10px;
}

.post-detail-page a:hover {
  color: #000;
  text-decoration: underline;
}
</style>


