<template>
  <div class="row transition">
      <div class="col">
          <div class="row align-items-center">
            <div class="col-4">
                <img class="img-fluid" :src="require(`../../assets/${selectedWorker.avatar}`)" :alt="selectedWorker.alt">
            </div>
            <div class= "col-8">
                <div class="row">
                    <div class="col">
                        <h2>{{ selectedWorker.firstName}} <span>{{selectedWorker.lastName.toUpperCase()}}</span></h2>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <h2>PREPARE YOUR TASKS !!!</h2>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapState('workers', {
                selectedWorker: state => state.selected,
            })
        },
        mounted (){
            setTimeout(() => {
                this.$router.push('form')
            }, 2000)
        }
    }

</script>

<style lang="scss" scoped>
    .transition {
        h2 {
            color: #172b4d;
        }
        span{
            color: #ff8f1c;
        }
        img{
            border-radius: 25px;
            border: 5px solid white;
            -webkit-box-shadow: 10px 10px 20px -5px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 20px -5px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 20px -5px rgba(0,0,0,0.75);
        }
    }
</style>