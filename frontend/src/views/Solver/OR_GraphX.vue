<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h1>OR Graph X 1.0</h1>
      <hr noshade size="1" />
      <div class="infoPics">
        <img src="@/assets/orgr.jpg" width="70%" />
      </div>
      <hr noshade size="1" />
      <h2>Beschreibung des Solvers:</h2>
      <p>
        OR GraphX ist eine Anwendung zur grafischen Veranschaulichung von
        zweidimensionalen Optimierungsproblemen durch direkte Eingabe von
        Restriktionen und Zielfunktionen. Restriktionen und Zielfunktionen
        dürfen nicht mehr als zwei Variablen besitzen. Zwischen Maximierung und
        Minimierung kann ausgewählt werden, sowie die Ganzzahligkeit
        eingeschalten, aber auch ausgeschalten werden. Ein Standardbeispiel
        steht Ihnen auch zur Verfügung.
      </p>
    </div>
    <div>
      <!-- <a href="">Zum Solver</a> TODO-->
      <router-link :to="{ path: '/DownloadCenter', hash: '#OR_GraphX' }"
        >Download</router-link
      >
    </div>
  </v-container>
</template>