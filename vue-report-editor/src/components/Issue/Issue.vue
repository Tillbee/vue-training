<template>
    <div class="row issue" :class="{'issue-selected': isSelected}" @click="toggleSelect(issue)">
        <div class="col">
            <div class="row">
                <a class="issue-key col-auto" target="_blank" :href="issueHref">
                    {{issue.key}}
                </a>
            </div>
            <div class="row">
                <div class="issue-summary col">
                    {{issue.summary}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isSelected: false,
                processing: false
            }
        },
        props: {
            issue: Object
        },
        computed: {
            issueHref(){
                return this.$store.state.issues.baseHref + this.issue.key
            }
        },
        methods: {
            toggleSelect(issue) {
                if(!event.target.classList.contains("issue-key") || !!this.processing){
                    this.processing = true
                    this.$store.dispatch('issues/toggleSelectedIssue', issue).then((wasSelected) => {
                        this.isSelected = !wasSelected
                        this.processing = false
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .issue{
        background: #fff;
        color: #172b4d;
        cursor: pointer;
        display: block;
        font-size: 14px;
        line-height: 1.42857143;
        position: relative;
        box-shadow: 0 0 1px 0 rgba(9,30,66,0.31), 0 2px 4px -1px rgba(9,30,66,0.25);
        border-radius: 2px;
        margin: 5px;
        padding: 10px;
    }
    .issue:first-child{
        margin-top: 0px
    }
    .issue:last-child{
        margin-bottom: 0px
    }
    .issue-key{
        color: #5e6c84;
        font-size: 12px;
        font-weight: 600;
        line-height: 1.66666667;
        letter-spacing: 0;
        outline: 0;
        text-transform: none;
        display: flex;
        flex-wrap: nowrap;
    }
    .issue-summary{
        display: block;
        line-height: 1.1em;
        max-height: 3.3em;
        padding-bottom: 1px;
        overflow: hidden;
        word-wrap: break-word;
    }
    .issue-selected{
        background: rgba(81, 221, 57, 0.7)
    }
</style>