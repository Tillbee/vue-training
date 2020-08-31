<template>
    <div class="issues-group">
            <app-issue
                v-for="issue in issues"
                :issue="issue" :key="issue"></app-issue>
    </div>
</template>

<script>
    import Issue from './Issue.vue';

    export default {
        components: {
            appIssue: Issue
        }
    }
</script>