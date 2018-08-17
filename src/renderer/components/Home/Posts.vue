<template>
  <div class="post-item">
    <div class="post-item-con">
      <div class="post-item-title">
        <h3>{{ mainPost.title | toUpperCaseTransform }}</h3>
      </div>
      <div class="post-item-content">
        <p>{{ mainPost.body }}</p>
      </div>      
    </div>
    <div class="post-detail">
      <router-link :to="postDetailLink(mainPost.id)">Post Detail</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    mainPost: {
      type: Object,
      required: true
    }
  },
  methods: {
    postDetailLink(id) {
      return `/post-detail/${id}`
    }
  },
  filters: {
    toUpperCaseTransform(title) {
      return title.toUpperCase(); 
    }
  }
}
</script>

<style>
.posts {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.post-item {
  width: calc(33.3333% - 30px);
  border: 1px solid #ccc;
  margin-right: 15px;
  margin-bottom: 15px;
  transition: box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
}

.post-item:hover {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
}
.post-item-title,
.post-item-content {
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}

.post-detail {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
}

.post-detail a {
  color: #333;
  text-decoration: none;
  font-weight: 700;
  transition: .3s;
}

.post-item:hover a {
  color: #000;
  text-decoration: underline;
}

@media only screen and (max-width: 690px) {
  .post-item {
    width: calc(50% - 30px);
  }
}

@media only screen and (max-width: 490px) {
  .post-item {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
