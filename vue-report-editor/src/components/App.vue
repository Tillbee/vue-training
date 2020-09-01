<template>
  <div class="mainContainer">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6">
        <worker-selection v-if="!selectedWorker"></worker-selection>
        <transition v-else></transition>
      </div>  
    </div>
  </div>
</template>

<script>
    import Issues from './Issue/Issues';
    import WorkerSelection from './Worker/WorkerSelection';
    import Transition from './Transition/Transition';
    import { mapState, mapActions } from 'vuex'

    export default {
        components: {
            Issues,
            WorkerSelection,
            Transition
        },
        computed: {
            ...mapState({
                selectedWorker: state => state.workers.selected,
            })
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        height: 75%;
    }
</style>
