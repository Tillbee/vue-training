<template>
    <div class="issues">
        <label for="issues-group">Select your issues for this week :</label>
        <div class="issues-group">
            <!-- <issue
                v-for="issue in issues"
                :issue="issue" :key="issue"></issue> -->
        </div>
    </div>
    
</template>

<script>
    import Issue from './Issue.vue';
    import { mapState, mapActions } from 'vuex'

    export default {
        components: {
            Issue
        },
        computed: {
            ...mapState({
                issues: state => state.issues.all
            })
        },
        created () {
            this.$store.dispatch('issues/getAllIssues')
        }
    }
</script>