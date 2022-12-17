<script>

// 1. Create a 2 page site with Vue.js
// 2. On the home page list out posts from https://jsonplaceholder.typicode.com/
// 3. Each post should link to a dedicated page for just that post (just like a blog)
// 4. Include an edit button and form on the dedicated post page that allows admins to edit it (not actual possible to edit post resource on https://jsonplaceholder.typicode.com/) but you can fake it however you'd like
// 5. Use the Options API at least once (but also feel free to use CAPI if desired)
// 6. Feel free to work directly in this StackBlitz project or start your own project locally and share it via Github

import PostTable from './components/PostTable.vue'
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      dataRecieved: null,
      blogData: null,
      commentData: null,
      albumData: null,
      photoData: null,
      userData: null,
      todoData: null,
    }
  },
  components: { PostTable },
  beforeCreate() {
    this.loading = true;
  },
  async created() {
    //All data on page create
    //Get Post
    await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (
        this.blogData = response.data));

    //Get Comments
    await axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => (
        this.commentData = response.data));

    //Get Albums
    await axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => (
        this.albumData = response.data));


    //Get Photos
    await axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => (
        this.photoData = response.data));


    //Get Users
    await axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => (
        this.userData = response.data));

    //Get Todos
    await axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => (
        this.todoData = response.data,
        this.loading = false,
        this.dataRecieved = true));
  },
}
</script>

<template>
  <header>

  </header>
  <main>
    <div v-if="loading" class="loading">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="loadingCircle">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
      Loading....
    </div>
    <PostTable v-if="dataRecieved" class="content" 
    :blogData="blogData" 
    :commentData="commentData"
    :albumData="albumData"
    :photoData="photoData"
    :userData="userData"
    :todoData="todoData"
    />
  </main>
</template>

<style scoped>

</style>
