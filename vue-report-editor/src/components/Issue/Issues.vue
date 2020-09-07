<template>
    <div class="issues">
        <label for="issues-group">Select your issues for this <span>week</span> :</label>
        <div class="issues-group">
            <issue
                v-for="issue in userIssues"
                :issue="issue" :key="issue.id"></issue>
        </div>
    </div>
    
</template>

<script>
    import Issue from './Issue.vue';
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        components: {
            Issue
        },
        computed: {
            userIssues(){
                return this.$store.getters['issues/getIssuesByUserId'](this.$store.state.workers.selected.id)
            }
        },
        created () {
            this.$store.dispatch('issues/getAllIssues');
        }
    }
</script>

<style lang="scss" scoped>
    .issues-group{
        background: #f4f5f7;
        overflow-y: scroll;
        max-height: 350px;
    }
    span{
        color: #ff8f1c;
    }
</style>