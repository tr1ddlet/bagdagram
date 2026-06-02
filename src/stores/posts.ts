import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', () => {
    const posts = ref([
        {
            id:1,
            author: '@gaia',
            anonymous: false,
            content: 'some msg',
            likes: 0
        },
        {
            id:2,
            author: '@akumaqqe',
            anonymous: false,
            content: 'some msg',
            likes: 0
        },
        {
            id:3,
            author: 'Anonymous',
            anonymous: true,
            content: 'some msg',
            likes: 0
        }
    ])

    function addPost(content: string, anonymous: boolean, name: string){
        posts.value.unshift({
            id:Date.now(),
            author: anonymous ? "Anonymous" : "@gaya",
            content,
            anonymous,
            likes:0
        })
    }
    return {
        posts,
        addPost
    }
})
