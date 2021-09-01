<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h1>LP-Solve Frontend</h1>
      <hr noshade size="1" />
      <div class="infoPics">
        <img height="400px" src="@/assets/lpsolve_ide.jpg" />
      </div>
      <hr noshade size="1" />
      <h2>Beschreibung des Solvers:</h2>
      <p>
        LP-Solve IDE ist ein Frontend f&uuml;r den Batch-Solver LP-Solve. Er
        basiert auf der Revised-Simplex Methode und der Branch-and-bound Methode
        f&uuml;r Integer. Es k&ouml;nnen Dateien des Formats .lp und .mps
        hochgeladen werden.
      </p>

      <p>
        <b>Wichtiger Hinweis:</b>
        Externe Software: Hierbei handelt es sich um eine Freeware.
      </p>
    </div>
    <div>
      <!-- <a href="">Zum Solver</a> TODO-->
      <router-link :to="{ path: '/DownloadCenter', hash: '#LPSolve' }"
        >Download</router-link
      >
    </div>
  </v-container>
</template>