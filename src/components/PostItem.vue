<template>
  <div class="post">
    <h3>{{ post.author }}</h3>

    <h4>{{ post.title }}</h4>

    <p>{{ post.content }}</p>

    <div class="post-actions">
      <button @click="likePost">
        ❤️ Like
      </button>

      <span>{{ post.likes }} Likes</span>
    </div>
  </div>
</template>

<script>
// This component gets its content from Vuex using the post ID.
// It also includes a Like button and the number of likes.
export default {
  props: {
    postId: {
      type: Number,
      required: true
    }
  },

  // Notice that the component gets the post information from the global Vuex store.
  computed: {
    post() {
      return this.$store.state.posts.find(
        p => p.id === this.postId
      )
    }
  },

  methods: {
    likePost() {
      this.$store.dispatch('likePost', this.postId)
    }
  }
}
</script>

<style scoped>
.post {
  background: white;
  padding: 22px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.post h3 {
  color: #263449;
}

.post h4 {
  margin-bottom: 10px;
}

.post-actions {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
}

button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 9px 18px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #c0392b;
}
</style>
