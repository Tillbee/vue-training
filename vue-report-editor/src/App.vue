<template>
  <div class="mainContainer">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6">
        <worker-selection v-if="!$store.state.selectedWorker" :workers="$store.state.workers"></worker-selection>
        <transition></transition>
      </div>  
    </div>
  </div>
</template>

<script>
    import Issues from './components/Issues';
    import WorkerSelection from './components/WorkerSelection';
    import Transition from './components/Transition';

    export default {
        components: {
            Issues,
            WorkerSelection,
            Transition
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        height: 75%;
    }
</style>
