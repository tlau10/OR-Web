<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <template>
          <v-container>
        <v-card>
           <div>
            <v-text-field v-model="search" label="Search" class="mx-4" single-line/>
          <v-data-table
            :headers="headers"
            :items="solver"
            :items-per-page="20"
            :search="search"
            sort-by="name"
            group-by="Kategorie"
            class="elevation-1"
            disable-pagination
            hide-default-footer
          >
            <template
              v-slot:[`group.header`]="{ group, headers, toggle, isOpen }"
            >
              <td
                :colspan="headers.length"
                @click="toggle"
                :ref="group"
                class="hover"
              >
                <v-btn small icon>
                  <v-icon v-if="isOpen">mdi-minus</v-icon>
                  <v-icon v-else>mdi-plus</v-icon>
                </v-btn>
                <span
                  class="mx-5 font-weight-bold"
                  @mouseover.native="hover = true"
                  @mouseleave.native="hover = false"
                >
                  {{ group }}
                </span>
              </td>
            </template>
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
          </div>
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
        text: "Solverübersicht",
        disabled: true,
      },
    ],
    search: "",
    headers: [
      { text: "Solvername", align: "start", value: "name", groupable: false },
      { text: "Kategorie", align: "left", value: "Kategorie" },
      { text: "Details", align: "center", value: "start", sortable: false },
      { text: "Download", align: "center", value: "download", sortable: false },
    ],
    solver: [
         {
            name: "LP-Solve Frontend",
            Kategorie: "Sonstige",
            start: "LPSolve",
            download: "DownloadCenter#LPSolve",
        },
        {
            name: "GLPK - GNU Linear Programming Kit GUI Frontend 1.0",
            Kategorie: "Sonstige",
            start: "GLPK",
            download: "DownloadCenter#GLPK",
        },
        {
            name: "Power LP 0.7.5",
            Kategorie: "Sonstige",
            start: "PowerLP",
            download: "DownloadCenter#PowerLP",
        },
        {
            name: "LiPS - Linear Program Solver",
            Kategorie: "Sonstige",
            start: "LiPS",
            download: "DownloadCenter#LiPS",
        },
        {
            name: "Dakin 2.0",
            Kategorie: "Sonstige",
            start: "Dakin",
            download: "DownloadCenter#Dakin",
        },
        {
            name: "Iterator 2.0",
            Kategorie: "Interaktive Solver",
            start: "Iterator2.0",
            download: "DownloadCenter#Iterator",
        },
        {
            name: "Sensibilitätsanalyse",
            Kategorie: "Interaktive Solver",
            start: "Sensibilitaetsanalyse",
            download: "DownloadCenter#Sensibilitaetsanalyse",
        },
        {
            name: "Primal Dual Wandler",
            Kategorie: "Interaktive Solver",
            start: "PrimalDualWandler",
            download: "DownloadCenter#PrimalDualWandler",
        },
        {
            name: "OR GraphX",
            Kategorie: "Grafische Solver",
            start: "OR_GraphX",
            download: "DownloadCenter#OR_GraphX",
        },
    ],
  }),
  hover:false,
};
</script>
<style lang="scss">
@import "@/assets/css/style.scss";
</style>