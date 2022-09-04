<template>
    <div>
      <h1>メール送るところなり</h1>
        <div class="text-left">
          <label class="form-label">メールアドレス:</label>
          <input v-model="mail" class="form-control" type="text">
        </div>
      <button @click="submit" type="button" class="btn btn-primary">送信</button>
      <div class="m-5">
        <router-link :to="'/'" class="btn btn-success">TOP画面へ戻る</router-link>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'preRegist',
  setup() {
    const store = useStore()
    const mail = ref(null);
    const submit = () => {
        store.dispatch('loading')
    }
    return {
        mail,
        submit,
    }
  }
}
</script>
