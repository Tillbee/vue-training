<template>
    <div class="issue">

    </div>
</template>

<script>
    export default {
        props: ['issue'],
        methods: {
            issueSelected() {
                //serverBus.$emit('serverSelected', this.server);
            }
        }
    }
</script>