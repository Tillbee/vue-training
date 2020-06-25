<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedTemplate = 'app-blue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedTemplate = 'app-green'" class="btn btn-success">Load Green Template</button>
                <button @click="selectedTemplate = 'app-red'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="selectedTemplate">
                    <h1 v-if="selectedTemplate === 'app-blue'">Bakayaro Konoyaro</h1>
                    <h1 v-else-if="selectedTemplate === 'app-green'">Perrita</h1>
                    <h1 v-else>Cacacaca</h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data(){
            return{
                selectedTemplate: 'app-blue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
