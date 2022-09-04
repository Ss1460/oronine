<template>
    <div>
      <h1>ログインなり</h1>
      <div class="text-left">
        <label class="form-label">メールアドレス:</label>
        <input class="form-control" type="text">
        <label for="">パスワード:</label>
        <input type="text" class="form-control">
      </div>
      <button class="btn btn-primary" type="button">ログイン</button>
      <div class="m-5">
        <router-link :to="'/'" class="btn btn-success">TOP画面へ戻る</router-link>
      </div>
    </div>
</template>

<script>

</script>