<template>
  <div class="home">
    <v-breadcrumbs
        :items="items"
        large
    ></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: 'Impressum',
        disabled: true,
      }
    ]
  })
}
</script>