<template>
  <div id="app" class="text-grey-darker">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  @import "tailwindcss/dist/tailwind.css"
</style>
