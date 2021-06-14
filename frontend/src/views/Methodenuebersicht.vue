<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center" id="th">Kategorie</th>
            <th class="text-left">Methodenname</th>
            <th class="text-center">Details</th>
            <th class="text-center">Download</th>
          </tr>
        </thead>
        <tbody v-for="kategorie in kategorie" :key="kategorie.name">
          <tr v-for="method in kategorie.method" :key="method.name">
            <td class="text-center">{{ kategorie.name }}</td>
            <td class="text-left">
              <v-btn
                :to="method.start"
                depressed
                plain
                class="text-capitalize"
                >{{ method.name }}</v-btn
              >
            </td>
            <td class="text-center">
              <v-btn text icon :to="method.start">
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon :to="method.download">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
        text: "Methodenübersicht",
        disabled: true,
      },
    ],
    kategorie: [
      {
        name: "Bestellmengenplanung",
        method: [
          {
            name: "Wagner-Whitin-LP 1.3",
            start: "Wagner-Whitin-LP",
            download: "DownloadCenter#Wagner-Whitin-LP",
          },
          {
            name: "Wagner-Whitin 1.2",
            start: "Wagner-Whitin",
            download: "DownloadCenter#Wagner-Whitin",
          },
        ],
      },
      {
        name: "Transportplanung",
        method: [
          {
            name: "TR-Optimizer 2.1",
            start: "TR-Optimizer",
            download: "DownloadCenter#TR-Optimizer",
          },
          {
            name: "PTSS - Paket Transport Simulation System 1.1",
            start: "PTSS",
            download: "DownloadCenter#PTSS",
          },
          {
            name: "BOP - Beladungsoptimierung 1.1",
            start: "BOP",
            download: "DownloadCenter#BOP",
          },
        ],
      },
      {
        name: "Personalplanung",
        method: [
          {
            name: "Eisenstadt 1.4",
            start: "Eisenstadt",
            download: "DownloadCenter#Eisenstadt",
          },
          {
            name: "innerbetriebliche Standortplanung 1.1",
            start: "innerbetrieblicheStandortplanung",
            download: "DownloadCenter#innerbetrieblicheStandortplanung",
          },
          {
            name: "Standortplanung 3.0",
            start: "Standortplanung",
            download: "DownloadCenter#Standortplanung",
          },
          {
            name: "Zuordnungsplanung 2.1",
            start: "Zuordnungsplanung",
            download: "DownloadCenter#Zuordnungsplanung",
          },
          {
            name: "Lineare Portfolio Optimierung 2.0",
            start: "Portfolio",
            download: "DownloadCenter#Portfolio",
          },
          {
            name: "Roundtrip 0.9",
            start: "Roundtrip",
            download: "DownloadCenter#Roundtrip",
          },
          {
            name: "Job Shop 2.2",
            start: "JobShop",
            download: "DownloadCenter#JobShop",
          },
          {
            name: "Verkehrsplaner",
            start: "Verkehrsplaner",
            download: "DownloadCenter#Verkehrsplaner",
          },
          {
            name: "Maschinenbelegungsplanung 5.2",
            start: "Maschinenbelegungsplanung",
            download: "DownloadCenter#Maschinenbelegungsplanung",
          },
          {
            name: "OP-Scheduling 2.3",
            start: "OP-Scheduling",
            download: "DownloadCenter#OP-Scheduling",
          },
          {
            name: "Ernährungsplaner 2.0",
            start: "Ernährungsplaner",
            download: "DownloadCenter#Ernährungsplaner",
          },
          {
            name: "Einkaufswagenoptimierung 1.0",
            start: "Einkaufswagenoptimierung",
            download: "DownloadCenter#Einkaufswagenoptimierung",
          },
          {
            name: "Hotelmanager 5.0",
            start: "Hotelmanager",
            download: "DownloadCenter#Hotelmanager",
          },
        ],
      },
    ],
  }),
};
</script>
<style lang="scss">
@import "@/assets/style.scss";
</style>