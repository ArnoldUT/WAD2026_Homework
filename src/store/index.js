import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        author: "Alice",
        title: "Welcome!",
        content: "Welcome to my first post!",
        imageUrl:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "People collaborating around a table",
        likes: 0,
      },
      {
        id: 2,
        author: "John",
        title: "Technology",
        content: "Technology is changing our lives.",
        imageUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Laptop displaying code on a desk",
        likes: 0,
      },
      {
        id: 3,
        author: "Emma",
        title: "Travel",
        content: "Exploring new places is amazing.",
        imageUrl:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Scenic landscape beneath a wide sky",
        likes: 0,
      },
      {
        id: 4,
        author: "David",
        title: "Programming",
        content: "Vue.js makes frontend development fun.",
        imageUrl:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Code displayed on a computer screen",
        likes: 0,
      },
      {
        id: 5,
        author: "Sophia",
        title: "Nature",
        content: "Enjoying a beautiful day outside.",
        imageUrl:
          "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Sunlight filtering through a green forest",
        likes: 0,
      },
      {
        id: 6,
        author: "Michael",
        title: "Music",
        content: "Music makes everything better.",
        imageUrl:
          "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Musician performing on stage",
        likes: 0,
      },
      {
        id: 7,
        author: "Olivia",
        title: "Books",
        content: "Reading is a great way to learn.",
        imageUrl:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Open book and a stack of books",
        likes: 0,
      },
      {
        id: 8,
        author: "James",
        title: "Sports",
        content: "Exercise keeps us healthy.",
        imageUrl:
          "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Runner training on a track",
        likes: 0,
      },
      {
        id: 9,
        author: "Isabella",
        title: "Food",
        content: "Trying a new recipe today!",
        imageUrl:
          "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Fresh ingredients prepared for cooking",
        likes: 0,
      },
      {
        id: 10,
        author: "William",
        title: "Life",
        content: "Enjoy every moment of life.",
        imageUrl:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Peaceful mountain lake at sunrise",
        likes: 0,
      },
    ],
  },

  getters: {
    allPosts: (state) => state.posts,
    postById: (state) => (postId) =>
      state.posts.find((post) => post.id === postId),
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
