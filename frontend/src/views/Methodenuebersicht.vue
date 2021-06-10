<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" style="border-bottom: 2px solid darkgrey">
              Kategorie
            </th>
            <th class="text-left" style="border-bottom: 2px solid darkgrey">
              Methodenname
            </th>
            <th class="text-center" style="border-bottom: 2px solid darkgrey">
              technische Dokumentation
            </th>
            <th class="text-center" style="border-bottom: 2px solid darkgrey">
              Benutzerhandbuch
            </th>
            <th class="text-center" style="border-bottom: 2px solid darkgrey">
              Download
            </th>
          </tr>
        </thead>
        <tbody v-for="kategorie in kategorie" :key="kategorie.name">
          <!-- TODO Links für :to ergänzen  -->
          <!-- TODO style auslagern in CSS style="border-top: 2px solid darkgrey;" -->
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
              <v-btn text icon :to="method.dokumentation">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon :to="method.handbuch">
                <v-icon>mdi-file-account-outline</v-icon>
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
            name: "Wagner-Whitin-LP",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Wagner-Whitin",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
        ],
      },
      {
        name: "Transportplanung",
        method: [
          {
            name: "TR-Optimizer 2.1",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "PTSS - Paket Transport Simulation System 1.1",
            start: "PTSS",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "BOP - Beladungsoptimierung 1.1",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
        ],
      },
      {
        name: "Personalplanung",
        method: [
          {
            name: "Eisenstadt 1.4",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "innerbetriebliche Standortplanung 1.1",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Standortplanung 3.0",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Zuordnungsplanung 2.1",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Lineare Portfolio Optimierung 2.0",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Roundtrip 0.9",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Job Shop 2.2",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Verkehrsplaner",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Maschinenbelegungsplanung 5.2",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "OP-Scheduling 2.3",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Ernährungsplaner 2.0",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Einkaufswagen",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
          {
            name: "Hotelmanager 5.0",
            start: "",
            dokumentation: "",
            handbuch: "",
            download: "",
          },
        ],
      },
    ],
  }),
};
</script>