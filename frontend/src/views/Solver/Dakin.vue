<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h1>Dakin 2.0</h1>
      <hr noshade size="1" />
      <div class="infoPics">
        <img height="300px" src="@/assets/uebersicht.jpg" />
      </div>
      <hr noshade size="1" />
      <h2>Beschreibung des Solvers:</h2>
      <p>
        Mit dieser Methode kann aus einem ganzzahligem Optimierungsproblem eine
        ganzzahlige L&ouml;sung berechnet werden. Die L&ouml;sung des
        Optemierungsproblems wird in einem L&ouml;sungsbaum dargestellt und kann
        auch grafisch dargestellt werden.
      </p>
      <p>
        <b>Performance:</b>
        <br />
        Das Standardbeispiel funktioniert, jedoch kann es zu Fehlern kommen bei
        der graphischen L&ouml;sung. Dies ist ein Prototyp!
      </p>
    </div>
    <div>
      <!-- <a href="">Zum Solver</a> TODO-->
      <router-link :to="{ path: '/DownloadCenter', hash: '#Dakin' }"
        >Download</router-link
      >
    </div>
  </v-container>
</template>