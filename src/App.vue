<template>
  <div>
  <MainMenu />          
  <router-view></router-view>

  </div>
</template>

<script>
import MainMenu from './components/Menu/MainMenu.vue';

export default {
  name: 'App',
  components: {MainMenu}
}
</script>

<style>

</style>
