<template>
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col">
                    <GoBackButton/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <Issues/>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <Feedback/>
                </div>
            </div>
            <div class="row mt-4 justify-content-center">
                <div class="col-auto">
                    <ValidationButton :onClick="checkReport"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import GoBackButton from '@/components/ui/GoBackButton'
    import ValidationButton from '@/components/ui/ValidationButton'
    import Issues from '@/components/Issue/Issues'
    import Feedback from '@/components/Feedback/Feedback'

    export default {
        components: {
            GoBackButton,
            ValidationButton,
            Issues,
            Feedback
        },
        methods: {
            checkReport(){
                this.$store.dispatch('report/cleanErrors')
                
                if(!this.$store.state.report.highLight){
                    this.$store.dispatch('report/addError', {
                        'id': 'highLight',
                        'message': 'Please provide your highlights'
                    })
                }
                if(!this.$store.state.report.lowLight){
                    this.$store.dispatch('report/addError', {
                        'id': 'lowLight',
                        'message': 'Please provide your lowlights'
                    })
                }

                if(this.$store.state.report.errors.length === 0){
                    let recepient = 'q.bricquir@criteo.com';
                    let date = new Date();
                    let fullDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
                    let subject = 'Weekly Report - ' + this.$store.getters['workers/fullName'] + ' - ' + fullDate;
                    let body = this.$store.state.workers.selected.firstName + '\r\r' 
                                + this.$store.state.issues.selectedIssues.map((issue) => {return this.$store.state.issues.baseHref + issue.key}).join('\r') + '\r\r' 
                                + 'Highlight: ' + this.$store.state.report.highLight +'\r' 
                                + 'Lowlight: ' + this.$store.state.report.lowLight;
                    location.href = 'mailto:' + recepient + '?subject=' + subject + '&body=' + encodeURIComponent(body);
                }
            }
        }
    }
</script>