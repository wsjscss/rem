<template>
  <div>
    <code>{{Store.state.users.map(v => v.name)}}</code>
  </div>
</template>

<script>
  export default {
    inject: ['Store'],
    created() {
      console.log(this.Store);
    }
  }
</script>
