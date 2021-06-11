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
              Name
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
          <tr v-for="item in kategorie.item" :key="item.name">
            <td class="text-center">{{ kategorie.name }}</td>
            <td class="text-left">
            <v-btn
                :to="item.start"
                depressed
                plain
                class="text-capitalize"
                >{{ item.name }}</v-btn>
            </td>
            <td class="text-center">
              <div id="app">
              <v-btn text icon :href="item.dokumentation" download>
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
              </div>
            </td>
            <td class="text-center">
              <v-btn text icon :href="item.handbuch" download>
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon :href="item.download" download>
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
        text: "DownloadCenter",
        disabled: true,
      },
    ],
    kategorie: [
      {
        name: "Methoden",
        item: [
          {
            name: "Wagner-Whitin-LP 1.3",
            start: "",
            dokumentation: "Methods/Wagner-WithinLP1.3_Dokumentation.pdf",
            handbuch: "Methods/Wagner-WithinLP1.3_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Wagner-Whitin 1.2",
            start: "",
            dokumentation: "Methods/Wagner-Whitin1.2_Dokumentation.pdf",
            handbuch: "Methods/Wagner-Whitin1.2_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "TR-Optimizer 2.1",
            start: "",
            dokumentation: "Methods/TR-Optimizer2.1_Benutzerhandbuch.pdf",
            handbuch: "",
            download: "",
          },
          {
            name: "PTSS - Paket Transport Simulation System 1.1",
            start: "PTSS",
            dokumentation: "Methods/PTSS_Dokumentation.pdf",
            handbuch: "Methods/PTSS_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "BOP - Beladungsoptimierung 1.1",
            start: "",
            dokumentation: "Methods/BOP1.1_Dokumentation.pdf",
            handbuch: "Methods/BOP1.1_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Eisenstadt 1.4",
            start: "",
            dokumentation: "",
            handbuch: "Methods/Eisenstadt1.4_Benutzerhandbuch.pdf",
            download: "Methods/Eisenstadt1.4_Dokumentation.pdf",
          },
          {
            name: "innerbetriebliche Standortplanung 1.1",
            start: "",
            dokumentation: "Methods/InnerbetrieblicheStandortplanung1.1_Dokumentation.pdf",
            handbuch: "Methods/InnerbetrieblicheStandortplanung1.1_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Standortplanung 3.0",
            start: "",
            dokumentation: "Standortplanung3.0_Dokumentation.pdf",
            handbuch: "Methods/Standortplanung3.0_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Zuordnungsplanung 2.1",
            start: "",
            dokumentation: "Methods/Zuordnungsplanung2.1_Dokumentation.pdf",
            handbuch: "Methods/Zuordnungsplanung2.1_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Lineare Portfolio Optimierung 2.0",
            start: "",
            dokumentation: "Methods/LinearePortfoliooptimierung2.0_Dokumentation.pdf",
            handbuch: "Methods/LinearePortfoliooptimierung2.0_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Roundtrip 0.9",
            start: "",
            dokumentation: "Methods/Roundtrip0.9_Dokumentation.pdf",
            handbuch: "Methods/Roundtrip0.9_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Job-Shop 2.2",
            start: "",
            dokumentation: "Methods/JobShop 2.2_Dokumentation.pdf",
            handbuch: "Methods/JobShop 2.2_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Verkehrsplaner",
            start: "",
            dokumentation: "Methods/Verkehrsplaner_Dokumentation.pdf",
            handbuch: "Methods/Verkehrsplaner_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Maschinenbelegungsplanung 5.2",
            start: "",
            dokumentation: "Methods/Maschinenbelegungsplanung5.2_Dokumentation.pdf",
            handbuch: "Methods/Maschinenbelegungsplanung5.2_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "OP-Scheduling 2.3",
            start: "",
            dokumentation: "Methods/OP-Scheduling2.3_Dokumentation.pdf",
            handbuch: "Methods/OP-Scheduling2.3_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Ernährungsplaner 2.0",
            start: "",
            dokumentation: "Methods/Ernährungsplaner2.0_Dokumentation.pdf",
            handbuch: "Methods/Ernährungsplaner2.0_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Einkaufswagenoptimierung 1.0",
            start: "",
            dokumentation: "",
            handbuch: "Methods/Einkaufswagenoptimierung_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Hotelmanager 5.0",
            start: "",
            dokumentation: "",
            handbuch: "Methods/Hotelmanager5.0_Benutzerhandbuch.pdf",
            download: "",
          },
        ],
      },
      {
        name: "Solver",
        item: [
          {
            name: "Iterator 1.0",
            start: "",
            dokumentation: "Solver/Iterator1.0_Dokumentation.pdf",
            handbuch: "Solver/Iterator1.0_Benutzerhandbuch.pdf",
            download: "",
          },
           {
            name: "Iterator 2.0",
            start: "",
            dokumentation: "Solver/Iterator2.0_Dokumentation.pdf",
            handbuch: "Solver/Iterator2.0_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "LP-Solve Frontend",
            start: "",
            dokumentation: "Solver/LP-SolveFrontend_Dokumentation.pdf",
            handbuch: "",
            download: "",
          },
          {
            name: "GLPK - GNU Linear Programming Kit GUI",
            start: "",
            dokumentation: "Solver/GLPKFrontend1.0_Dokumentation.pdf",
            handbuch: "Solver/GLPKFrontend1.0_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Power LP 2.0",
            start: "PowerLP",
            dokumentation: "",
            handbuch: "Solver/PowerLP2_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "LiPS - Linear Program Solver",
            start: "",
            dokumentation: "Solver/LiPS (in Russian)_Dokumentation.pdf", 
            handbuch: "Solver/LiPS_Benutzerhandbuch.chm",
            download: "",
          },
          {
            name: "Dakin 2.0",
            start: "",
            dokumentation: "Solver/Dakin2.0_Dokumentation.pdf",
            handbuch: "Solver/Dakin2.0_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Sensibilitätsanalyse",
            start: "",
            dokumentation: "Solver/Sensibilitaetsanalyse_Dokumentation.pdf",
            handbuch: "Solver/Sensibilitaetsanalyse_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "Primal Dual Wandler",
            start: "",
            dokumentation: "Solver/PrimalDualWandler_Dokumentation.pdf",
            handbuch: "Solver/PrimalDualWandler_Benutzerhandbuch.pdf",
            download: "",
          },
          {
            name: "OR GraphX",
            start: "",
            dokumentation: "Solver/ORGraphX_Dokumentation.pdf",
            handbuch: "",
            download: "",
          },
        ],
      },
    ],
  }),
};
</script>