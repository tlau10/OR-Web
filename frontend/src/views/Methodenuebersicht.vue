<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
             <th class="text-center" style="border-bottom: 2px solid darkgrey;">
              Kategorie
            </th>
             <th class="text-left" style="border-bottom: 2px solid darkgrey;">
              Methodenname
            </th>
             <th class="text-center" style="border-bottom: 2px solid darkgrey;">
              Details
            </th>
             <th class="text-center" style="border-bottom: 2px solid darkgrey;">
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
            start: "",
            download: "",
          },
          {
            name: "Wagner-Whitin 1.2",
            start: "",
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
            download: "",
          },
          {
            name: "PTSS - Paket Transport Simulation System 1.1",
            start: "PTSS",
            download: "",
          },
          {
            name: "BOP - Beladungsoptimierung 1.1",
            start: "",
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
            download: "",
          },
          {
            name: "innerbetriebliche Standortplanung 1.1",
            start: "",
            download: "",
          },
          {
            name: "Standortplanung 3.0",
            start: "",
            download: "",
          },
          {
            name: "Zuordnungsplanung 2.1",
            start: "",
            download: "",
          },
          {
            name: "Lineare Portfolio Optimierung 2.0",
            start: "",
            download: "",
          },
          {
            name: "Roundtrip 0.9",
            start: "",
            download: "",
          },
          {
            name: "Job Shop 2.2",
            start: "",
            download: "",
          },
          {
            name: "Verkehrsplaner",
            start: "",
            download: "",
          },
          {
            name: "Maschinenbelegungsplanung 5.2",
            start: "",
            download: "",
          },
          {
            name: "OP-Scheduling 2.3",
            start: "",
            download: "",
          },
          {
            name: "Ernährungsplaner 2.0",
            start: "",
            download: "",
          },
          {
            name: "Einkaufswagenoptimierung 1.0",
            start: "",
            download: "",
          },
          {
            name: "Hotelmanager 5.0",
            start: "",
            download: "",
          },
        ],
      },
    ],
  }),
};
</script>