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
  methods: {
    getPost(url, type){
      axios.get(url)
      .then(res => {
        if (res.status == 200) {          
          switch (type) {
            case 'postDetail':
              this.postDetail = res.data;
              break;
            case 'comments':
              this.comments = res.data;
              break;
          }
          this.isLoading = false;
          console.log('axios.get success! -', type);
        }
      })
      .catch(e => {
        this.isLoading = false;
        console.log(`Error: ${e}`);
      })
    }
  },
  created() {
    const postDetailUrl = `http://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}`
    this.getPost(postDetailUrl, 'postDetail')
  
    const postCommentUrl = `http://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}/comments`
    this.getPost(postCommentUrl, 'comments')      
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


