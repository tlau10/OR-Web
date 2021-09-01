<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h1>Roundtrip 0.9</h1>

      <hr noshade size="1" />
      <div class="infoPics">
        <img src="@/assets/round1.gif" />
      </div>
      <hr noshade size="1" />

      <h2>Beschreibung der Methode:</h2>
      <p>
        Das Programm ermittelt den k&uuml;rzesten Weg zwischen den anzufahrenden
        St&auml;dten, mit graphischer Darstellung am Bildschirm. Die St&auml;dte
        sind mit x- und y-Position, wie im Koordinatensystem einzugeben. Zuerst
        ist die Anzahl der St&auml;dte anzugeben. Danach werden die Koordinaten
        eingegeben.
      </p>
      <b>Performance:</b>
      <p>Lauff&auml;hig bis 100 St&auml;dte</p>
      <div>
        <!-- <a href="">Zur Methode</a> TODO-->
        <router-link :to="{ path: '/DownloadCenter', hash: '#Roundtrip' }"
          >Download</router-link
        >
      </div>
    </div>
  </v-container>
</template>