<template>
  <div class="admin">
    <header>
      <adminHeader />
    </header>
    <div>
      <adminContent />
    </div>
  </div>
</template>
<script>
import adminHeader from '../components/Admin/header'
import adminContent from '../components/Admin/content'
export default {
  components: {
    adminHeader,
    adminContent
  }
}
</script>
<style lang="less">
.admin {
  box-sizing: border-box;
}
</style>