<template>
   <div class="col-sm-4 col-md-4 col-lg-2 col-2" @click="selectWorker(worker)">
       <div class="row">
           <div class="col-12">
               <img class="img-fluid" :src="require(`../../assets/${worker.avatar}`)" :alt="worker.alt">
           </div>
       </div>     
   </div>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        props: {
            worker: Object
        },
        methods: {
            selectWorker(worker){
                this.$store.dispatch('workers/selectWorker', worker)
                this.$router.push('transition');
            }
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
        border-radius: 25px;
        border: 5px solid white;
        -webkit-box-shadow: 10px 10px 20px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 20px -5px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 20px -5px rgba(0,0,0,0.75);
    }
    img:hover{
        border-color: #ff8f1c
    }
    span{
        color: #ff8f1c;
    }
    h3 {
        color: #172b4d;
    }
</style>