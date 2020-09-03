<template>
    <span class="goBack">
        <button @click="goBack">Back</button>
    </span>
</template>

<script>
export default {
    methods: {
        goBack(){
            this.$router.push('/selection')
        }
    }
}
</script>

<style lang="scss" scoped>
    button{
        color: #292929;
        background-color: #ff8f1c;
        font-size: 1.2rem;
        font-weight: 600;
        border: none;
        border-radius: 3px;
        padding: 2px 12px;
    }
    button:hover{
        background-color: #ffa64a;
    }
</style>