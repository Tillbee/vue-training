<template>
  <div class="mainContainer">
    <div class="row content align-items-center justify-content-center">
      <div class="col-lg-6">
        <div class="row">
          <div class="col">
            <transition name="slide" mode="out-in">
              <router-view/>
            </transition>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
    }
</script>

<style lang="scss" scoped>
    .row.content {
        height: 75%;
    }
    .slide-enter-active,
    .slide-leave-active{
      transition: opacity 1s, transform 1s;
    }
    .slide-enter,
    .slide-leave-to{
      opacity: 0;
      transform: translateX(-30%)
    }
</style>
