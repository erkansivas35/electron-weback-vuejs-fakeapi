<template>
  <div class="post-search">
    <input type="text" placeholder="Post Search" v-model="postSearch" @keyup.prevent="search()">
  </div>  
</template>

<script>
export default {
  data() {""
    return {
      postSearch: ''
    }
  },
  methods: {
    search() {
      this.$emit('postSearching', this.postSearch)
    }
  }
}
</script>

<style>
.post-search {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
}
.post-search input::placeholder {
  font-size: 16px;
  font-weight: 500;
}
.post-search input {
  appearance: none;
  width: 100%;
  max-width: 400px;
  height: 30px;
  border: 1px solid #ccc;
  padding: 5px 15px;
  color: #333;
  font-size: 20px;
  font-weight: 700;
  transition: box-shadow .3s;
  outline: 0
}
.post-search input:hover, .post-search input:focus {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 490px) {
  .post-search input {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
