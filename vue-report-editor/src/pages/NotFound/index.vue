<template>
    <div class="row notFound">
        <div class="col">
            <div class="row">
                <div class="col">
                    <GoBackButton/>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <h2>Ooooooops ! It seems you're tying to access to the <span>secret area</span></h2>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import GoBackButton from '@/components/ui/GoBackButton'

    export default {
        components: {
            GoBackButton
        }
    }
</script>

<style lang="scss" scoped>
    .notFound {
        h2 {
            color: #172b4d;
        }
        span{
            color: #ff8f1c;
        }
    }
</style>