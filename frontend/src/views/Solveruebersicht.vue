<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <template>
      <v-container>
        <v-card> 
      <v-data-table
        :headers="headers"
        :items="solver"
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
        text: "Solverübersicht",
        disabled: true,
      },
    ],
    headers: [
      { text: "Solvername", align: "start", value: "name", groupable: false },
      { text: "Kategorie", align: "left", value: "Kategorie" },
      { text: "Details", align: "center", value: "start", sortable: false },
      { text: "Download", align: "center", value: "download", sortable: false },
    ],
    solver: [
         {
            name: "LP-Solve Frontend",
            Kategorie: "",
            start: "LP-Solve Frontend",
            download: "DownloadCenter#LP-Solve Frontend",
        },
        {
            name: "Iterator 1.0",
            Kategorie: "",
            start: "Iterator 1.0",
            download: "DownloadCenter#Iterator 1.0",
        },
        {
            name: "Iterator 2.0",
            Kategorie: "",
            start: "Iterator 2.0",
            download: "DownloadCenter#Iterator 2.0",
        },
        {
            name: "GLPK - GNU Linear Programming Kit GUI",
            Kategorie: "",
            start: "GLPK - GNU Linear Programming Kit GUI",
            download: "DownloadCenter#GLPK - GNU Linear Programming Kit GUI",
        },
        {
            name: "Power LP 2.0",
            Kategorie: "",
            start: "Power LP 2.0",
            download: "DownloadCenter#Power LP 2.0",
        },
        {
            name: "LiPS - Linear Program Solver",
            Kategorie: "",
            start: "LiPS - Linear Program Solver",
            download: "DownloadCenter#LiPS - Linear Program Solver",
        },
        {
            name: "Dakin 2.0",
            Kategorie: "",
            start: "Dakin 2.0",
            download: "DownloadCenter#Dakin 2.0",
        },
        {
            name: "Iterator 2.0",
            Kategorie: "Interaktive Solver",
            start: "Iterator 2.0",
            download: "DownloadCenter#",
        },
        {
            name: "Sensibilitätsanalyse",
            Kategorie: "Interaktive Solver",
            start: "Sensibilitätsanalyse",
            download: "DownloadCenter#Sensibilitätsanalyse",
        },
        {
            name: "Primal Dual Wandler",
            Kategorie: "Interaktive Solver",
            start: "Primal Dual Wandler",
            download: "DownloadCenter#Primal Dual Wandler",
        },
        {
            name: "OR GraphX",
            Kategorie: "Grafische Solver",
            start: "POR GraphX",
            download: "DownloadCenter#OR GraphX",
        },
    ],
  }),
};
</script>
<style lang="scss">
@import "@/assets/style.scss";
</style>