<template>
    <div class="feedback">
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="highlights">Your <span>Highlights</span> :</label>
                    <textarea class="form-control" :class="{'is-invalid': highLightHasError}" id="highlights" rows="3" placeholder="e.g: The presence of Philippe" v-model="highLight" required></textarea>
                    <div class="invalid-feedback">
                        Please provide your highlights.
                    </div>
                    <small class="form-text text-muted">Share what highlighted your week</small>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="lowlights">Your <span>Lowlights</span> :</label>
                    <textarea class="form-control" :class="{'is-invalid': lowLightHasError}" id="lowlights" rows="3" placeholder="e.g: I miss Philippe" v-model="lowLight" required></textarea>
                    <div class="invalid-feedback">
                        Please provide your lowlights.
                    </div>
                    <small class="form-text text-muted">Share what lowlighted your week</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters('report', [
                'highLightHasError',
                'lowLightHasError'
            ]),
            highLight: {
                get () {
                    return this.$store.state.report.highLight
                },
                set (value) {
                    this.$store.dispatch('report/updateHighLight', value)
                }
            },
            lowLight: {
                get () {
                    return this.$store.state.report.lowLight
                },
                set (value) {
                    this.$store.dispatch('report/updateLowLight', value)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-control{
        box-shadow: 0 0 1px 0 rgba(9, 30, 66, 0.31), 0 2px 4px -1px rgba(9, 30, 66, 0.25);
        border-radius: 2px;
    }
    span{
        color: #ff8f1c;
    }
</style>