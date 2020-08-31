<template>
  <div class="mainContainer">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6">
        <app-worker-selection></app-worker-selection>
      </div>  
    </div>
  </div>
</template>

<script>
    import Issues from './components/Issues.vue';
    import WorkerSelection from './components/WorkerSelection.vue';

    export default {
        components: {
            appIssues: Issues,
            appWorkerSelection: WorkerSelection
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        height: 75%;
    }
</style>
