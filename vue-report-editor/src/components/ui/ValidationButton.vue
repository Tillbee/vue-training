<template>
    <button class="validation" @click="onClick">Mail the report >></button>
</template>

<script>
export default {
    props: ['onClick']
}
</script>

<style lang="scss" scoped>
    .validation{
        color: #292929;
        background-color: #ff8f1c;
        font-size: 1.2rem;
        font-weight: 600;
        border: none;
        border-radius: 3px;
        padding: 8px 12px;
        text-decoration: none;
    }
    .validation:hover{
        background-color: #ffa64a;
    }
</style>