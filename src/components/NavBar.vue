<template>
    <nav class="navbar">
        <RouterLink to="/">Feed</RouterLink>
        <RouterLink to="/create">Create</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/bookmarks">Bookmarks</RouterLink>
    </nav>
</template>

<style scoped>
.navbar{
    display: flex;
    gap: 20px;
    padding: 20px;
    border-bottom: 1px solid #330;
}
a{
    color: rgb(0, 0, 0);
    text-decoration: none;
}
</style>