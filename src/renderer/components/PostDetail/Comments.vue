<template>
  <div class="comments">
    <div class="comment-item" v-for="comment in comments" v-bind:key="comment.id">
      <div class="name"><p><b>Name:</b> {{ comment.name }}</p></div>
      <div class="mail"><p><b>E-mail:</b> {{ comment.email | lowercaseText }}</p></div>
      <div class="message"><p><b>Message:</b> <br> {{ comment.body }}</p></div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Comments',
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  filters: {
    lowercaseText(mail) {
      return mail.toLowerCase()
    }
  }
}
</script>

<style>
.comments {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 14px;
}

.comment-item {
  border: 1px solid #ccc;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
}
</style>
