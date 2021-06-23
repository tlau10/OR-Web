<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <template>
      <v-container>
        <v-card>
          <v-data-table
            :headers="headers"
            :items="item"
            :items-per-page="30"
            sort-by="name"
            group-by="Art"
            class="elevation-1"            
            disable-pagination
            hide-default-footer
          >
            <template v-slot:[`item.name`]="{ item }">
              <v-btn
                :to="item.start"
                :id="item.start"
                depressed
                plain
                class="text-capitalize"
                >{{ item.name }}
              </v-btn>
            </template>
            <template v-slot:[`item.dokumentation`]="{ item }">
              <v-btn
                v-if="item.dokumentation != ''"
                text
                icon
                :href="item.dokumentation"
                download
              >
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </template>
            <template v-slot:[`item.handbuch`]="{ item }">
              <v-btn
                v-if="item.handbuch != ''"
                text
                icon
                :href="item.handbuch"
                download
              >
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </template>
            <template v-slot:[`item.download`]="{ item }">
              <v-btn text icon :href="item.download" download>
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-container>
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
        text: "DownloadCenter",
        disabled: true,
      },
    ],
    headers: [
      {
        text: "Name",
        align: "start",
        value: "name",
        groupable: false,
      },
      {
        text: "Art",
        align: "left",
        value: "Art",
      },
      {
        text: "technische Dokumentation",
        align: "center",
        value: "dokumentation",
        sortable: false,
      },
      {
        text: "Benutzerhandbuch",
        align: "center",
        value: "handbuch",
        sortable: false,
      },
      {
        text: "Download",
        align: "center",
        value: "download",
        sortable: false,
      },
    ],
    item: [
      {
        name: "Wagner-Whitin-LP 1.3",
        Art: "Methoden",
        Kategorie: "Bestellmengenplanung",
        start: "",
        dokumentation: "Methods/Wagner-WithinLP1.3_Dokumentation.pdf",
        handbuch: "Methods/Wagner-WithinLP1.3_Benutzerhandbuch.pdf",
        download: "Methods/WagnerWithinLP1.3_Programm.zip",
      },
      {
        name: "Wagner-Whitin 1.2",
        Art: "Methoden",
        Kategorie: "Bestellmengenplanung",
        start: "",
        Art: "Methoden",
        dokumentation: "Methods/Wagner-Whitin1.2_Dokumentation.pdf",
        handbuch: "Methods/Wagner-Whitin1.2_Benutzerhandbuch.pdf",
        download: "Methods/WagnerWithin1.2_Programm.zip",
      },
      {
        name: "TR-Optimizer 2.1",
        Art: "Methoden",
        Kategorie: "Transportplanung",
        start: "",
        dokumentation: "Methods/TR-Optimizer2.1_Dokumentation.pdf",
        handbuch: "Methods/TR-Optimizer2.1_Benutzerhandbuch.pdf",
        download: "Methods/TR-Optimizer2.1_Programm.zip",
      },
      {
        name: "PTSS - Paket Transport Simulation System 1.1",
        Art: "Methoden",
        Kategorie: "Transportplanung",
        start: "PTSS",
        dokumentation: "Methods/PTSS1.1_Dokumentation.pdf",
        handbuch: "Methods/PTSS1.1_Benutzerhandbuch.pdf",
        download: "Methods/PTSS1.1_Programm.zip",
      },
      {
        name: "BOP - Beladungsoptimierung 1.1",
        Art: "Methoden",
        Kategorie: "Transportplanung",
        start: "",
        dokumentation: "Methods/BOP1.1_Dokumentation.zip",
        handbuch: "Methods/BOP1.1_Benutzerhandbuch.pdf",
        download: "Methods/BOP1.1_Programm.zip",
      },
      {
        name: "Leitstand Pflegestation 1.1",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        start: "",
        dokumentation: "Methods/LeitstandPflegestation1.1_Dokumentation.pdf",
        handbuch: "Methods/LeitstandPflegestation1.1_Benutzerhandbuch.pdf",
        download: "Methods/LeitstandPflegestation1.1_Programm.zip",
      },
      {
        name: "Eisenstadt 1.4",
        Art: "Methoden",
        Kategorie: "Standortplanung",
        start: "",
        dokumentation: "Methods/Eisenstadt1.4_Dokumentation.pdf",
        handbuch: "Methods/Eisenstadt1.4_Benutzerhandbuch.pdf",
        download: "Eisenstadt1.4_Programm.zip",
      },
      {
        name: "innerbetriebliche Standortplanung 1.1",
        Art: "Methoden",
        Kategorie: "Standortplanung",
        start: "",
        dokumentation:
          "Methods/InnerbetrieblicheStandortplanung1.1_Dokumentation.pdf",
        handbuch:
          "Methods/InnerbetrieblicheStandortplanung1.1_Benutzerhandbuch.pdf",
        download: "Methods/InnerbetrieblicheStandortplanung1.1_Programm.zip",
      },
      {
        name: "Standortplanung 3.0",
        Art: "Methoden",
        Kategorie: "Standortplanung",
        start: "",
        dokumentation: "Standortplanung3.0_Dokumentation.pdf",
        handbuch: "Methods/Standortplanung3.0_Benutzerhandbuch.pdf",
        download: "Methods/Standortplanung3.0_Programm.zip",
      },
      {
        name: "Zuordnungsplanung 2.1",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        start: "",
        dokumentation: "Methods/Zuordnungsplanung2.1_Dokumentation.zip",
        handbuch: "Methods/Zuordnungsplanung2.1_Benutzerhandbuch.pdf",
        download: "",
      },
      {
        name: "Lineare Portfolio Optimierung 2.0",
        start: "",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        dokumentation:
          "Methods/LinearePortfolioOptimierung2.0_Dokumentation.pdf",
        handbuch: "Methods/LinearePortfolioOptimierung2.0_Benutzerhandbuch.pdf",
        download: "Methods/LinearePortfolioOptimierung2.0_Programm.zip",
      },
      {
        name: "Roundtrip 0.9",
        start: "",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        dokumentation: "Methods/Roundtrip0.9_Dokumentation.pdf",
        handbuch: "Methods/Roundtrip0.9_Benutzerhandbuch.pdf",
        download: "Methods/Roundtrip0.9_Programm.zip",
      },
      {
        name: "Job-Shop 2.2",
        start: "",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        dokumentation: "Methods/JobShop2.2_Dokumentation.pdf",
        handbuch: "Methods/JobShop2.2_Benutzerhandbuch.pdf",
        download: "Methods/JobShop2.2_Programm.zip",
      },
      {
        name: "Verkehrsplaner",
        start: "",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        dokumentation: "Methods/Verkehrsplaner_Dokumentation.zip",
        handbuch: "Methods/Verkehrsplaner_Benutzerhandbuch.pdf",
        download: "Methods/Verkehrsplaner_Programm.zip",
      },
      {
        name: "Maschinenbelegungsplanung 5.2",
        start: "",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        dokumentation: "Methods/Maschinenbelegungsplanung5.2_Dokumentation.zip",
        handbuch: "Methods/Maschinenbelegungsplanung5.2_Benutzerhandbuch.pdf",
        download: "Methods/Maschinenbelegungsplanung5.2_Programm.zip",
      },
      {
        name: "OP-Scheduling 2.3",
        start: "",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        dokumentation: "Methods/OP-Scheduling2.3_Dokumentation.pdf",
        handbuch: "Methods/OP-Scheduling2.3_Benutzerhandbuch.pdf",
        download: "Methods/OP-Scheduling2.3_Programm.zip",
      },
      {
        name: "Ernährungsplaner 2.0",
        start: "",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        dokumentation: "Methods/Ernährungsplaner2.0_Dokumentation.zip",
        handbuch: "Methods/Ernährungsplaner2.0_Benutzerhandbuch.pdf",
        download: "Methods/Ernährungsplaner2.0_Programm.zip",
      },
      {
        name: "Einkaufswagenoptimierung 1.0",
        start: "",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        dokumentation: "",
        handbuch: "Methods/Einkaufswagenoptimierung1.0_Benutzerhandbuch.pdf",
        download: "Methods/Einkaufswagenoptimierung1.0_Programm.zip",
      },
      {
        name: "Hotelmanager 5.0",
        start: "",
        Art: "Methoden",
        Kategorie: "Personalplanung",
        dokumentation: "",
        handbuch: "Methods/Hotelmanager5.0_Benutzerhandbuch.pdf",
        download: "Methods/Hotelmanager5.0_Programm.zip",
      },
      {
        name: "Iterator 1.0",
        start: "",
        Art: "Solver",
        Kategorie: "",
        dokumentation: "Solver/Iterator1.0_Dokumentation.pdf",
        handbuch: "Solver/Iterator1.0_Benutzerhandbuch.pdf",
        download: "Solver/Iterator1.0_Programm.zip",
      },
      {
        name: "Iterator 2.0",
        start: "",
        Art: "Solver",
        Kategorie: "",
        dokumentation: "Solver/Iterator2.0_Dokumentation.pdf",
        handbuch: "Solver/Iterator2.0_Benutzerhandbuch.pdf",
        download: "Solver/Iterator2.0_Programm.zip",
      },
      {
        name: "LP-Solve Frontend",
        start: "",
        Art: "Solver",
        Kategorie: "",
        dokumentation: "Solver/LP-SolveFrontend_Dokumentation.pdf",
        handbuch: "",
        download: "Solver/LPSolveFrontend_Programm.zip",
      },
      {
        name: "GLPK - GNU Linear Programming Kit GUI",
        start: "",
        Art: "Solver",
        Kategorie: "",
        dokumentation: "Solver/GLPKFrontend1.0_Dokumentation.pdf",
        handbuch: "Solver/GLPKFrontend1.0_Benutzerhandbuch.pdf",
        download: "Solver/GLPK_Frontend1.0_Programm.zip",
      },
      {
        name: "Power LP 2.0",
        start: "PowerLP",
        Kategorie: "",
        Art: "Solver",
        dokumentation: "",
        handbuch: "Solver/PowerLP2_Benutzerhandbuch.pdf",
        download: "",
      },
      {
        name: "LiPS - Linear Program Solver",
        start: "",
        Kategorie: "",
        Art: "Solver",
        dokumentation: "Solver/LiPS (in Russian)_Dokumentation.pdf",
        handbuch: "Solver/LiPS_Benutzerhandbuch.chm",
        download: "Solver/LiPS_Programm.zip",
      },
      {
        name: "Dakin 2.0",
        start: "",
        Art: "Solver",
        Kategorie: "",
        dokumentation: "Solver/Dakin2.0_Dokumentation.pdf",
        handbuch: "Solver/Dakin2.0_Benutzerhandbuch.pdf",
        download: "Solver/Dakin2.0_Programm.zip",
      },
      {
        name: "Sensibilitätsanalyse",
        start: "",
        Art: "Solver",
        Kategorie: "Interaktive Solver",
        dokumentation: "Solver/Sensibilitaetsanalyse1.1_Dokumentation.pdf",
        handbuch: "Solver/Sensibilitaetsanalyse1.1_Benutzerhandbuch.pdf",
        download: "Solver/Sensibilitätsanalyse1.1_Programm.zip",
      },
      {
        name: "Primal Dual Wandler",
        start: "",
        Art: "Solver",
        Kategorie: "Interaktive Solver",
        dokumentation: "Solver/PrimalDualWandler_Dokumentation.pdf",
        handbuch: "Solver/PrimalDualWandler_Benutzerhandbuch.pdf",
        download: "Solver/PrimeDualWandler_Programm.zip",
      },
      {
        name: "OR GraphX",
        start: "",
        Art: "Solver",
        Kategorie: "Grafische Solver",
        dokumentation: "Solver/ORGraphX_Dokumentation.pdf",
        handbuch: "",
        download: "Solver/ORGraphX_Programm.zip",
      },
    ],
  }),
};
</script>
<style lang="scss">
@import "@/assets/style.scss";
</style>