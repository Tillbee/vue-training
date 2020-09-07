<template>
  <div class="row selection">
      <div class="col">
         <div class="row">
            <div class= "col">
                <h1>Choose your <span>character</span> :</h1>
            </div>
         </div>
        <div class="row mt-4">
            <worker
                    v-for="worker in workers"
                    :worker="worker" :key="worker.id"></worker>
        </div>
      </div> 
  </div>
</template>

<script>
    import Worker from '@/components/Worker/Worker'
    import { mapState, mapActions } from 'vuex'

    export default {
        components: {
            Worker
        },
        computed: {
            ...mapState('workers', {
                workers: 'all'
            })
        },
        created () {
            this.$store.dispatch('workers/resetSelectedWorker')
            this.$store.dispatch('workers/getAllWorkers')
        }
    }

</script>
<style lang="scss" scoped>
    .selection {
        h2 {
            color: #172b4d;
        }
        span{
            color: #ff8f1c;
        }
    }
</style>