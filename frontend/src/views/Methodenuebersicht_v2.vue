<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
     <template>
    <v-data-table :headers="headers"
      :items="method"
      :items-per-page="20"
      sort-by="name"
      group-by="Kategorie"
      class="elevation-1"
      >
      <template v-slot:[`item.name`]="{ item }">
 <v-btn
                :to="item.start"
                depressed
                plain
                class="text-capitalize"
                >{{ item.name }}</v-btn
              >
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
      { text: "Methodenname", align: "start", value: "name" , groupable: false, },
      { text: "Kategorie", align: "left", value: "Kategorie" },
      { text: "Details", align: "left", value: "start" },
      { text: "Download", align: "left", value: "download" },
    ],
    method: [
      {
        name: "Wagner-Whitin-LP 1.3",
        Kategorie: "Bestellmengenplanung",
        start: "",
        download: "",
      },
      {
        name: "Wagner-Whitin 1.2",
        Kategorie: "Bestellmengenplanung",
        start: "",
        download: "",
      },
      {
        name: "TR-Optimizer 2.1",
        Kategorie: "Transportplanung",
        start: "",
        download: "",
      },
      {
        name: "PTSS - Paket Transport Simulation System 1.1",
        Kategorie: "Transportplanung",
        start: "PTSS",
        download: "",
      },
      {
        name: "BOP - Beladungsoptimierung 1.1",
        Kategorie: "Transportplanung",
        start: "",
        download: "",
      },
      {
        name: "Eisenstadt 1.4",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "innerbetriebliche Standortplanung 1.1",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Standortplanung 3.0",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Zuordnungsplanung 2.1",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Lineare Portfolio Optimierung 2.0",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Roundtrip 0.9",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Job Shop 2.2",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Verkehrsplaner",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Maschinenbelegungsplanung 5.2",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "OP-Scheduling 2.3",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Ernährungsplaner 2.0",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Einkaufswagenoptimierung 1.0",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
      {
        name: "Hotelmanager 5.0",
        Kategorie: "Personalplanung",
        start: "",
        download: "",
      },
    ],
  }),
};
</script>