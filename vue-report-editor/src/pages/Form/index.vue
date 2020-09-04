<template>
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col">
                    <GoBackButton/>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <issues></issues>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import GoBackButton from '@/components/ui/GoBackButton'
    import Issues from '@/components/Issue/Issues'

    export default {
        components: {
            GoBackButton,
            Issues
        }
    }
</script>