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
                    location.href = 'mailto:' + recepient + '?subject=' + subject;
                    //mailto:nullepart@mozilla.org?subject=Demande%20inscription%20newsletter&body=Inscrivez-moi%20%C3%A0%20votre%20newsletter%20%21%0D%0A%0D%0ANom%20complet%20%3A%0D%0A%0D%0AO%C3%B9%20avez-vous%20entendu%20parler%20de%20nous%20%3F
                }
            }
        }
    }
</script>