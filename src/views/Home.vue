<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" id="logo">
    <PEPChecker />
  </div>
</template>

<script>
// @ is an alias to /src
import PEPChecker from '@/components/PEPChecker.vue'

export default {
  name: 'Home',
  components: {
    PEPChecker
  }
}
</script>


<style scoped>
#logo{
  width: 220px;
  height: 140px;
}
</style>
