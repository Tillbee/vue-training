<template>
    <div class="issue">

    </div>
</template>

<script>
    //import { serverBus } from '../../main';

    export default {
        props: ['issue'],
        methods: {
            issueSelected() {
                //serverBus.$emit('serverSelected', this.server);
            }
        }
    }
</script>