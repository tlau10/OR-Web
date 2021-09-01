<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h1>
        OP-Scheduling 2.3 - Auslastungsoptimierung von Operationss&auml;len
      </h1>

      <hr noshade size="1" />
      <div class="infoPics">
        <img src="@/assets/op_scheduling.gif" />
      </div>

      <hr noshade size="1" />

      <h2>Beschreibung der Methode:</h2>
      <p>
        OP-Scheduling befasst sich mit der Auslastungsoptimierung von
        Operationss&auml;len. Die Problematik ist vergleichbar mit der
        Auslastungsplanung von Maschinen.
      </p>
      <p>
        Umgesetzt ist die Optimierung nach der (gleichm&auml;&szlig;igen)
        minimalen Auslastung der OP-S&auml;le &uuml;ber die vorgegebenen
        Perioden. Hierbei wird versucht die Maximalbelegungsdauer eines Saales
        gering zu halten, sowie gleich hohe oder geringere Belegungsdauern
        f&uuml;r die anderen S&auml;le zu erreichen.
      </p>
    </div>
    <div>
      <!-- <a href="">Zur Methode</a> TODO-->
      <router-link :to="{ path: '/DownloadCenter', hash: '#OP_Scheduling' }"
        >Download</router-link
      >
    </div>
  </v-container>
</template>