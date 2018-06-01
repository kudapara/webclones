<template>
  <div>
    <div class="bg-cover w-full shadow bg-pink-darker text-white p-6 flex items-center mb-6" style="background-image: url(static/cool-background.png)">
      <div class="">
        <p class="text-5xl font-bold">WebClones</p>
        <p class="text-lg">A clone of some of the popular websites for my sheer pleasure</p>
      </div>
    </div>

    <div class="px-6 flex flex-wrap justify-start">

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" v-for="(clone, i) in clones" :key="i">
        <div class="mb-4 mr-4 bg-white rounded shadow">
          <div :style="{ 'background-image': `${clone.imageUrl}` }" class="h-48 bg-cover border-b-2" :class="{[`border-${clone.themeColor}`]: true, [`bg-${clone.themeColor}-lighter`]: true}"></div>
          <div class="p-6 flex items-center justify-between">
            <a class="text-grey-darkest no-underline" :href="clone.originalUrl">{{ clone.name }}</a>
            <button  @click="$router.push(clone.cloneUrl)" :class="{ [`bg-${clone.themeColor}-dark`]: true, [`hover:bg-${clone.themeColor}`]: true }" class="inline-flex items-center shadow rounded-sm text-white py-2 px-4">Checkout <i class="material-icons ml-2">arrow_forward</i></button>
          </div>
        </div>
      </div>      

    </div>  
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      clones: [
        {
          imageUrl: "url(static/images/coinbase.png)",
          name: 'coinbase.com',
          originalUrl: 'https://coinbase.com',
          cloneUrl: '/coinbase',
          themeColor: 'blue'
        },
        {
          imageUrl: "url(static/images/gmail.png)",
          name: 'gmail.com',
          originalUrl: 'https://gmail.com',
          cloneUrl: '/gmail',
          themeColor: 'red'
        }
      ]
    }
  }
}
</script>

<style>
  .bg-cover {
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat
  }
</style>
