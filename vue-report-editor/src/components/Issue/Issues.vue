<template>
    <div class="issues">
        <div class="row">
            <div class="col">
                <label for="issues-group">Select your issues for this <span>week</span> :</label>
                <div class="issues-background">
                    <div class="issues-group">
                        <issue
                            v-for="issue in userIssues"
                            :issue="issue" :key="issue.id"></issue>
                    </div>
                </div>
            </div>
        </div>
        <div class="row custom">
            <div class="col">
                <div class="row">
                    <div class="col-auto">
                        <div class="input-group input-group-sm">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">CCDI-</span>
                            </div>
                            <input @keyup.enter="addCustomIssue" type="number" class="form-control" placeholder="e.g: 976" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <small class="form-text text-muted">If issue's missing, add it !</small>
                    </div>
                    <div class="col-auto">
                        <div class="issues-background">
                            <custom-issue v-for="customIssue in customIssues" :customIssue="customIssue" :key="customIssue"></custom-issue>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Issue from './Issue.vue';
    import CustomIssue from './CustomIssue.vue';
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        components: {
            Issue,
            CustomIssue
        },
        methods: {
            addCustomIssue(event){
                let customIssueValue = event.target.value
                if(customIssueValue !== ''){
                    this.$store.dispatch('issues/addCustomIssue', customIssueValue);
                }
            }
        },
        computed: {
            customIssues(){
                return this.$store.state.issues.customIssues
            },
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
    .issues-background{
        position: relative;
        background: #f4f5f7;
        padding: 5px 0px;
    }
    .custom .issues-background{
        padding: 0px 5px 5px 5px;
    }
    .issues-group{
        max-height: 340px;
        overflow-y: scroll;
    }
    span{
        color: #ff8f1c;
    }
</style>