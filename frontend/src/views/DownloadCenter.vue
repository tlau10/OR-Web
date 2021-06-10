<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    </div>
    
    </template>

    <script>
export default {
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
      {
        text: "DownloadCenter",
        disabled: true,
      },
    ],
  }),
};
</script>