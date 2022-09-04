<template>
  <div>
    <router-view></router-view>
    <loadingVue></loadingVue>
  </div>
</template>

<script>
import loadingVue from './global/loading.vue';
export default {
  name: 'App',
  components: {
    loadingVue,
  }
}
</script>
