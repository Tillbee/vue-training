<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name : {{ switchName() }}</p>
        <p>User Age : {{ userAge }}</p>
        <button @click="resetName()">Reset my name !</button>
        <button @click="resetFn()">Reset my name !</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        resetFn: {
            type: Function
        },
        userAge: Number
    },
    methods:{
        switchName(){
            return this.name.split("").reverse().join("")
        },
        resetName(){
            this.name = "Quentin";
            this.$emit("myNameWasChanged", this.name)
        }
    },
    created() {
        eventBus.$on('ageHasChanged', (age) => {
            this.userAge = age
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
