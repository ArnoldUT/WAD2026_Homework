
<template>
  <main class="home">
    <div class="page-heading">
      <h1>Latest Posts</h1>

      <button class="reset-button" @click="resetLikes">
        Reset All Likes
      </button>
    </div>

    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post-id="post.id"
    />
  </main>
</template>

<script>
import PostItem from '../components/PostItem.vue'

export default {
  components: {
    PostItem
  },

  computed: {
    posts() {
      return this.$store.getters.allPosts
    }
  },

  methods: {
    resetLikes() {
      this.$store.dispatch('resetLikes')
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 850px;
  margin: 40px auto;
  padding: 0 20px;
}

.page-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.page-heading h1 {
  color: #263449;
}

.reset-button {
  background: #34495e;
  color: white;
  border: none;
  padding: 11px 18px;
  border-radius: 6px;
  cursor: pointer;
}

.reset-button:hover {
  background: #1c2833;
}
</style>
