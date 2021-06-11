<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
     <template>
    <v-data-table
      :headers="headers"
      :items="method"
      group-by="kategorie"
      class="elevation-1"
      show-group-by></v-data-table>
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
        text: "Methodenübersicht_V2",
        disabled: true,
      },
    ],
    headers: [
      { text: "Methodenname", align: "start", value: "method.name" },
      { text: "Kategorie", align: "left", value: "kategorie" },
      { text: "Details", align: "left", value: "start" },
      { text: "Download", align: "left", value: "download" },
    ],
    method: [
      {
        name: "Wagner-Whitin-LP 1.3",
        kategorie: "Bestellmengenplanung",
        start: "",
        download: "",
      },
      {
        name: "Wagner-Whitin 1.2",
        kategorie: "Bestellmengenplanung",
        start: "",
        download: "",
      },
      {
        name: "TR-Optimizer 2.1",
        kategorie: "Transportplanung",
        start: "",
        download: "",
      },
      {
        name: "PTSS - Paket Transport Simulation System 1.1",
        kategorie: "Transportplanung",
        start: "PTSS",
        download: "",
      },
      {
        name: "BOP - Beladungsoptimierung 1.1",
        kategorie: "Transportplanung",
        start: "",
        download: "",
      },
      {
        name: "Eisenstadt 1.4",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "innerbetriebliche Standortplanung 1.1",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Standortplanung 3.0",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Zuordnungsplanung 2.1",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Lineare Portfolio Optimierung 2.0",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Roundtrip 0.9",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Job Shop 2.2",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Verkehrsplaner",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Maschinenbelegungsplanung 5.2",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "OP-Scheduling 2.3",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Ernährungsplaner 2.0",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Einkaufswagenoptimierung 1.0",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Hotelmanager 5.0",
        kategorie: "Personalplanung",
        start: "",
        download: "",
      },
    ],
  }),
};
