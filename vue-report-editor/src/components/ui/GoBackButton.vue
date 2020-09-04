<template>
    <span>
        <router-link to="selection" class="backLink">Back</router-link>  
    </span>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .backLink{
        color: #292929;
        background-color: #ff8f1c;
        font-size: 1.2rem;
        font-weight: 600;
        border: none;
        border-radius: 3px;
        padding: 8px 12px;
        text-decoration: none;
    }
    .backLink:hover{
        background-color: #ffa64a;
    }
</style>