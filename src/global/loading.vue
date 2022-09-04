<template>
    <transition name="transit">
      <div v-if="loading" id="loading">
        <teleport to="body">
          <div class="loading">
            <div class="obj"></div>
            <div class="obj"></div>
            <div class="obj"></div>
            <div class="obj"></div>
            <div class="obj"></div>
            <div class="obj"></div>
            <div class="obj"></div>
            <div class="obj"></div>
          </div>
          <div class="objects text" > 
            <b >{{text}}</b> 
          </div>
        </teleport>
      </div> 
    </transition>
</template>

<script>
import { computed, watch, onMounted, onUpdated, ref } from 'vue'
import { mapState, useStore } from 'vuex'
export default {
  name: 'loading',
  setup() {
    const store = useStore()
    const loading = computed(() => store.state[0].loading )
    const text = ref('読み込み中')
    onMounted(() => {
      console.log('マウントされた', loading.value)
    })
    watch(loading,(next, prev) => {
      console.log(next)
      if (next) {
        setTimeout(() => {
          store.dispatch('loading')
        }, 3000)
      }
    })
    return{
        loading,
        text
    }
  },
  computed: mapState(['globals'])

}
</script>

<style>
  /* ローディング画面 */
.loader {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1080;
}
#loading {
  width: 100vw;
  height: 100vh;
  transition: all 1s;
  background: rgba(0,0,0,0.5);
  position: absolute;
  left: 0;
  top: 0;
}
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 40px;
    display: flex;
    align-items: center;
}
.objects {
    position: absolute;
    bottom: 35%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: white;
    font-size: 30px;
    /* height: 40px; */
    /* display: flex;
    align-items: center; */
}
.obj{
    width: 5px;
    height: 40px;
    background: white;
    margin: 0 3px;
    border-radius: 10px;
    animation: loading 0.8s infinite;
}
.obj:nth-child(2){
    animation-delay: 0.1s;
}
.obj:nth-child(3){
    animation-delay: 0.2s;
}
.obj:nth-child(4){
    animation-delay: 0.3s;
}
.obj:nth-child(5){
    animation-delay: 0.4s;
}
.obj:nth-child(6){
    animation-delay: 0.5s;
}
.obj:nth-child(7){
    animation-delay: 0.6s;
}
.obj:nth-child(8){
    animation-delay: 0.7s;
}
@keyframes loading{
    0%{
        height: 0;
    }
    50%{
        height: 40px;
    }
    100%{
        height: 0;
    }
}
</style>