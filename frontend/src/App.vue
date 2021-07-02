node --version<template>
  <v-app id="inspire">
    <!--Navigation-->
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> OR-Web </v-list-item-title>
          <v-list-item-subtitle> SS2021 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          @click="drawer = !drawer"
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--App bar 009a93  80cdc9-->
    <v-card class="overflow-hidden">
      <v-app-bar dark prominent src="..\public\orwebBanner.png" app>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          color="#009a93"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
      </v-app-bar>
    </v-card>

    <v-main>
      <router-view></router-view>
    </v-main>

    <!--Footer-->
    <v-footer
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="teal darken-1 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="fItem in fItems"
            :key="fItem.icon"
            :to="fItem.to"
            class="mx-4"
            icon
            color="white"
          >
            <v-icon size="24px">
              {{ fItem.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-view-dashboard", to: "/Home" },
      { title: "Methoden", icon: "mdi-debug-step-over", to: "/methoden" },
      { title: "Solver", icon: "mdi-check-bold", to: "/solver" },
      { title: "Handbuch", icon: "mdi-book-open-variant", to: "/handbuch" },
      { title: "Methodenübersicht", icon: "mdi-function-variant", to: "/methodenuebersicht"},
      { title: "Solverübersicht", icon: "mdi-function-variant", to: "/solveruebersicht"},
      { title: "Impressum", icon: "mdi-alpha-i-circle", to: "/Impressum" },
      { title: "DownloadCenter", icon: "mdi-archive-arrow-down", to: "/DownloadCenter"}
    ],
    fItems: [
        {icon:'mdi-home',  to:"/"},
        {icon: 'mdi-github', to:"/Github"},
        {icon: 'mdi-book-open-variant', to:"/Impressum"},
        {icon: 'mdi-email', to:""},
      ],
      padless: false,
      variant: 'default',
  }),
};
</script>