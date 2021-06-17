<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <template>
      <v-container>
        <v-card> 
      <v-data-table
        :headers="headers"
        :items="method"
        :items-per-page="20"
        sort-by="name"
        group-by="Kategorie"
        class="elevation-1"
      >
        <template v-slot:[`item.name`]="{ item }">
          <v-btn :to="item.start" depressed plain class="text-capitalize">{{
            item.name
          }}</v-btn>
        </template>
        <template v-slot:[`item.start`]="{ item }">
          <v-btn text icon :to="item.start">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </template>
        <template v-slot:[`item.download`]="{ item }">
          <v-btn text icon :to="item.download">
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </template>
      </v-data-table>
        </v-card></v-container>
    </template>
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
    headers: [
      { text: "Methodenname", align: "start", value: "name", groupable: false },
      { text: "Kategorie", align: "left", value: "Kategorie" },
      { text: "Details", align: "center", value: "start", sortable: false },
      { text: "Download", align: "center", value: "download", sortable: false },
    ],
    method: [
      {
        name: "Wagner-Whitin-LP 1.3",
        Kategorie: "Bestellmengenplanung",
        start: "Wagner-Whitin-LP",
        download: "DownloadCenter#Wagner-Whitin-LP",
      },
      {
        name: "Wagner-Whitin 1.2",
        Kategorie: "Bestellmengenplanung",
        start: "Wagner-Whitin",
        download: "Methodenuebersicht#Wagner-Whitin",
      },
      {
        name: "TR-Optimizer 2.1",
        Kategorie: "Transportplanung",
        start: "TR-Optimizer",
        download: "DownloadCenter#TR-Optimizer",
      },
      {
        name: "PTSS - Paket Transport Simulation System 1.1",
        Kategorie: "Transportplanung",
        start: "PTSS",
        download: "DownloadCenter#PTSS",
      },
      {
        name: "BOP - Beladungsoptimierung 1.1",
        Kategorie: "Transportplanung",
        start: "BOP",
        download: "DownloadCenter#BOP",
      },
      {
        name: "Eisenstadt 1.4",
        Kategorie: "Standortplanung",
        start: "Eisenstadt",
        download: "DownloadCenter#Eisenstadt",
      },
      {
        name: "innerbetriebliche Standortplanung 1.1",
        Kategorie: "Standortplanung",
        start: "innerbetrieblicheStandortplanung",
        download: "DownloadCenter#innerbetrieblicheStandortplanung",
      },
      {
        name: "Standortplanung 3.0",
        Kategorie: "Standortplanung",
        start: "Standortplanung",
        download: "DownloadCenter#Standortplanung",
      },
      {
        name: "Zuordnungsplanung 2.1",
        Kategorie: "Personalplanung",
        start: "Zuordnungsplanung",
        download: "DownloadCenter#Zuordnungsplanung",
      },
      {
        name: "Lineare Portfolio Optimierung 2.0",
        Kategorie: "Personalplanung",
        start: "Portfolio",
        download: "DownloadCenter#Portfolio",
      },
      {
        name: "Roundtrip 0.9",
        Kategorie: "Personalplanung",
        start: "Roundtrip",
        download: "DownloadCenter#Roundtrip",
      },
      {
        name: "Job Shop 2.2",
        Kategorie: "Personalplanung",
        start: "JobShop",
        download: "DownloadCenter#JobShop",
      },
      {
        name: "Verkehrsplaner",
        Kategorie: "Personalplanung",
        start: "Verkehrsplaner",
        download: "DownloadCenter#Verkehrsplaner",
      },
      {
        name: "Maschinenbelegungsplanung 5.2",
        Kategorie: "Personalplanung",
        start: "Maschinenbelegungsplanung",
        download: "DownloadCenter#Maschinenbelegungsplanung",
      },
      {
        name: "OP-Scheduling 2.3",
        Kategorie: "Personalplanung",
        start: "OP-Scheduling",
        download: "DownloadCenter#OP-Scheduling",
      },
      {
        name: "Ernährungsplaner 2.0",
        Kategorie: "Personalplanung",
        start: "Ernährungsplaner",
        download: "DownloadCenter#Ernährungsplaner",
      },
      {
        name: "Einkaufswagenoptimierung 1.0",
        Kategorie: "Personalplanung",
        start: "Einkaufswagenoptimierung",
        download: "DownloadCenter#Einkaufswagenoptimierung",
      },
      {
        name: "Hotelmanager 5.0",
        Kategorie: "Personalplanung",
        start: "Hotelmanager",
        download: "DownloadCenter#Hotelmanager",
      },
    ],
  }),
};
</script>
<style lang="scss">
@import "@/assets/style.scss";
</style>