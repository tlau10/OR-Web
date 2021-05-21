<template>
  <div class="home">
    <v-breadcrumbs
        :items="items"
        large
    ></v-breadcrumbs>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () => ({
      items: [
        {
          text: 'Home',
          disabled: true,
          href: '/',
        }
      ]
  })
}
</script>