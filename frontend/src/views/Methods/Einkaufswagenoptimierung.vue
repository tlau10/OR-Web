<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h1>Einkaufswagenoptimierung 1.0</h1>

      <hr noshade size="1" />

      <hr noshade size="1" />
      <div class="infoPics">
        <img src="@/assets/einkaufswagen2.gif" />
      </div>
      <hr noshade size="1" />
      <h2>Beschreibung der Methode:</h2>

      <p>
        Die Einkaufswagenoptimierung beschreibt eine Rucksackproblemstellung
        bzgl. der Aufteilung der im Einkaufswagen liegenden Waren auf
        verschiedene Taschen.
        <br />
        Unterstützt werden im weitesten Sinne Problemstellungen der Art:
        "Aufteilung eines vorhandenen Bestandes von Elementen unterschiedlichen
        Gewichts auf eine Menge von Behältern mit unterschiedlicher Tragkraft".
      </p>
    </div>
    <div>
      <!-- <a href="">Zur Methode</a> TODO-->
      <router-link :to="{ path: '/DownloadCenter', hash: '#Einkaufswagen' }"
        >Download</router-link
      >
    </div>
  </v-container>
</template>