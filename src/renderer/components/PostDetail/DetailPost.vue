<template>
<div class="post-detail">
  <div class="post-item-title">
    <h3>{{ postDetail.title | toUpperCaseTransform }}</h3>
  </div>
  <div class="post-item-content">
    <p> {{ postDetail.body }}</p>
  </div>
</div>  
</template>

<script>
export default {
  name: 'DetailPost',
  props: {
    postDetail: {
      type: Object,
      required: true
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

</style>
