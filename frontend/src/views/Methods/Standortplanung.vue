<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h1>Standortplanung 3.0 (linear)</h1>

      <hr noshade size="1" />
      <div class="infoPics">
        <img src="@/assets/programmuebersicht.jpg" />
      </div>

      <hr noshade size="1" />

      <h2>Beschreibung der Methode:</h2>
      <p>
        Mit dem Programm Standortplanung v3.0 kann eine optimale
        Gebietsabdeckung durch Eingabe der Entfernung (verschiedene Einheiten
        wie sec, min, km, ...) errechnet werden. Als Ergebnis werden jene
        Standorte gezeigt, welche f&uuml;r eine optimale Gebietsabdeckung in
        Frage.
      </p>
      <p>Zur Berechnung wird der LP-Solve benutzt.</p>
      <p>
        Zu der Ausf&uuml;hrung des Tools wird eine Java Umgebung der Version 7
        oder h&ouml;her ben&ouml;tigt.
      </p>
    </div>
    <div>
      <!-- <a href="">Zur Methode</a> TODO-->
      <router-link :to="{ path: '/DownloadCenter', hash: '#Standortplanung' }"
        >Download</router-link
      >
    </div>
  </v-container>
</template>