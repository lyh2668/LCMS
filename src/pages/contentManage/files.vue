<template lang="html">
  <div class="cm-files">
    <div v-for="i in 1000">这是文件页面</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CMFiles'
}
</script>

<style lang="scss" scoped>
.cm-files {
  background: red;
  margin: 20px;
}
</style>
