<template>
    <div class="composer">
        <!-- <input v-model="name" placeholder="name"/> -->
        <textarea v-model="content" placeholder="What's happening"/>
        <label >
            <input type="checkbox" v-model="anonymous">
            Post anonymously
        </label>
        <button @click="handlePost">Post</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {usePostsStore} from '../stores/posts'

const postsStore = usePostsStore()


const content = ref('')
const anonymous = ref(false)
// const name = ref('')

function handlePost(){
    if(!content.value.trim()) return

    postsStore.addPost(
        content.value,
        anonymous.value,
        // name.value
    )
    content.value = ''
    anonymous.value = false
    // name.value = ''
}
</script>

<style scoped>
.composer{
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
}
textarea{
    min-height: 120px;
    padding: 12px;
}
button{
    width: fit-content;
}
</style>