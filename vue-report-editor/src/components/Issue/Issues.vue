<template>
    <div class="issues">
        <label for="issues-group">Select your issues for this week :</label>
        <div class="issues-group">
            <issue
                v-for="issue in issues"
                :issue="issue" :key="issue"></issue>
        </div>
    </div>
    
</template>

<script>
    import Issue from './Issue.vue';

    export default {
        components: {
            Issue
        }
    }
</script>