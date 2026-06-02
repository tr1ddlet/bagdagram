<template>
    <div class="post-card"> 
        <h3>{{ username }}</h3>

        <p>
            {{ content }}
        </p>

        <div class="actions">
            ❤️ 67
            📩
        </div>
    </div>
</template>

<script setup>
defineProps({
    username: String,
    content:String
})
</script>
<style scoped>
.post-card{
    border:1px solid #333;
    border-radius: 12px;
    padding: 16px;
    margin:16px 0;
}
.actions{
    margin-top: 12px;
    display:flex;
    gap:12px;
}
</style>