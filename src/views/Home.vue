<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Homepage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Homepage from '@/components/homepage';
export default {
  name: 'Home',
  components: {
    Homepage
  }
}
</script>
