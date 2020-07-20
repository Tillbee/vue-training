<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h2>QUOTE</h2>
                   <p>A wonderful Quote !</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteVue from './components/Quote.vue'

    export default {
        components:{
            appQuote: QuoteVue
        }
    }
</script>

<style>
</style>
