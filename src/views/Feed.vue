<template>
    <NavBar />
    <h1>Feed</h1>
    <PostCard v-for="post in postsStore.posts" :key="post.id" :username="post.author" :content="post.content" />
</template>


<script setup>
import NavBar from '../components/NavBar.vue'
import PostCard from '../components/PostCard.vue'
import { usePostsStore } from '../stores/posts.ts'
const postsStore = usePostsStore()
</script>
