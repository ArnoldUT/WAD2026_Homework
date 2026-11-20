import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        author: "Alice",
        title: "Welcome!",
        content: "Welcome to my first post!",
        likes: 0,
      },
      {
        id: 2,
        author: "John",
        title: "Technology",
        content: "Technology is changing our lives.",
        likes: 0,
      },
      {
        id: 3,
        author: "Emma",
        title: "Travel",
        content: "Exploring new places is amazing.",
        likes: 0,
      },
      {
        id: 4,
        author: "David",
        title: "Programming",
        content: "Vue.js makes frontend development fun.",
        likes: 0,
      },
      {
        id: 5,
        author: "Sophia",
        title: "Nature",
        content: "Enjoying a beautiful day outside.",
        likes: 0,
      },
      {
        id: 6,
        author: "Michael",
        title: "Music",
        content: "Music makes everything better.",
        likes: 0,
      },
      {
        id: 7,
        author: "Olivia",
        title: "Books",
        content: "Reading is a great way to learn.",
        likes: 0,
      },
      {
        id: 8,
        author: "James",
        title: "Sports",
        content: "Exercise keeps us healthy.",
        likes: 0,
      },
      {
        id: 9,
        author: "Isabella",
        title: "Food",
        content: "Trying a new recipe today!",
        likes: 0,
      },
      {
        id: 10,
        author: "William",
        title: "Life",
        content: "Enjoy every moment of life.",
        likes: 0,
      },
    ],
  },

  getters: {
    allPosts: (state) => state.posts,
  },

  mutations: {
    LIKE_POST(state, postId) {
      const post = state.posts.find((p) => p.id === postId);

      if (post) {
        post.likes++;
      }
    },

    RESET_LIKES(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },

  actions: {
    likePost({ commit }, postId) {
      commit("LIKE_POST", postId);
    },

    resetLikes({ commit }) {
      commit("RESET_LIKES");
    },
  },
});
