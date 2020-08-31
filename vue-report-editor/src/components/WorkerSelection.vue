<template>
  <div class="selection">
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
</template>

<script>
    import Worker from './Worker'

    export default {
        components: {
            Worker
        },
        computed: {
            workers(){
                return this.$store.state.workers
            }
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