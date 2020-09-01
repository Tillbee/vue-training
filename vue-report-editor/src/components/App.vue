<template>
  <div class="mainContainer">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6">
        <component :is="activeComponent"></component>
      </div>  
    </div>
  </div>
</template>

<script>
    import Form from './Form/Form';
    import WorkerSelection from './Worker/WorkerSelection';
    import Transition from './Transition/Transition';
    import { mapState, mapActions } from 'vuex'

    export default {
        components: {
            Form,
            WorkerSelection,
            Transition
        },
        computed: {
            ...mapState({
                activeComponent: state => state.global.activeComponent,
            })
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        height: 75%;
    }
</style>
