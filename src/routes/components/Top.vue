<template>
  <div>
    <h1>top画面なり！</h1> 
    <h3>オロナイン掲示板</h3>
    <div class="row buttons">
    <router-link :to="'/login'" class="btn btn-success">ログインはこちらなり</router-link>
    <router-link :to="'/preRegist'" class="btn btn-primary">新規会員登録はこちらアルよ～</router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: '',
    setup() {
        
    }
  }
</script>