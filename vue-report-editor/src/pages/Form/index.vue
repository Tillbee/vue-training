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
            }
        }
    }
</script>