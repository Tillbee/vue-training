<template>
    <div class="custom-issue">
        <a class="custom-issue-key" target="_blank" :href="customIssueHref">
            CCDI-{{customIssue}}
        </a>
        <span @click="removeCustomIssue(customIssue)" class="closeIssue" aria-label="Close">
           x
        </span>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        customIssue: String
    },
    methods: {
        ...mapActions('issues', ['removeCustomIssue'])
    },
    computed: {
        customIssueHref(){
            return this.$store.state.issues.baseHref + this.customIssue
        }
    }
}
</script>

<style lang="scss" scoped>
    .custom-issue{
        background: #fff;
        box-shadow: 0 0 1px 0 rgba(9,30,66,0.31), 0 2px 4px -1px rgba(9,30,66,0.25);
        border-radius: 2px;
        margin: 0px 5px 0px 0px;
        padding: 7px;
        display: inline-block;
        position: relative;
    }
    .custom-issue:last-child{
        margin: 0px;
    }
    .custom-issue-key{
        color: #5e6c84;
        font-size: 12px;
        font-weight: 600;
        line-height: 1.66666667;
        letter-spacing: 0;
        outline: 0;
        text-transform: none;
        flex-wrap: nowrap;
    }
    .closeIssue{
        position: absolute;
        cursor: pointer;
        color: red;
        background: #f4f5f7;
        top: 0px;
        right: -5px;
        width: 15px;
        height: 15px;
        z-index: 9;
        font-size: 12px;
        font-weight: 700;
        text-align: center;
    }
</style>