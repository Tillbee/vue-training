<template>
   <div class="col-sm-4 col-md-4 col-lg-2 col-2" @click="selectWorker">
       <div class="row">
           <div class="col-12">
               <img :src="require(`../assets/${worker.avatar}`)" :alt="worker.alt">
           </div>
           <div v-if="isWorkerSelected" class="col-6">
               <div class="row">
                    <div class="col-12">
                        <h3>{{worker.firstName}} <span>{{worker.lastName.toUpperCase()}}</span></h3>
                    </div>
               </div>
               <div class="row">
                    <div class="col-12">
                        <p>Prepare your tasks  !!!</p>
                    </div>
               </div>
           </div>
       </div>
       
   </div>
</template>

<script>
    export default {
        data: function(){
            return {
                isWorkerSelected: false
            }
        },
        props: ['worker'],
        methods: {
            selectWorker: function(){
                this.isWorkerSelected = true;
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