<template>
<div class="post-detail">
  <div class="post-item-title">
    <h3>{{ postDetail.title }}</h3>
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
  }
}
</script>

<style>

</style>
