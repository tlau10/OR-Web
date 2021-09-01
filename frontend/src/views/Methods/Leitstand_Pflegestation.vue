<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h1>Leitstand Pflegestation 1.1</h1>

      <hr noshade size="1" />

      <div class="infoPics">
        <img src="@/assets/leitstand_Pflegestation.gif" />
      </div>
      <hr noshade size="1" />

      <h2>Beschreibung der Methode:</h2>

      <p>
        In einer Pflegestation sollen Patienten mit minimalem Personalaufwand
        optimal versorgt werden. Für jeden Patienten wird der Pflegebedarf
        individuell festgelegt. Bestimmte Versorgungen haben in einem sehr engen
        Zeitfenster zu erfolgen (Mahlzeiten, Medikament X ist unmittelbar nach
        dem Essen zu verabreichen etc.). Andere Versorgungen können z.B.
        zwischen den Mahlzeiten erfolgen.
      </p>
      <p>
        Das Programm beherrscht zwei Modi. Dies sind das einfache Aufsummieren
        aller Versorgungszeiten, sowie das Glätten von Zeitspitzen mit einem
        abgewandelten Maschinenbelegungsalgorithmus. Als Ergebnis erhält man die
        leistenden Versorgungszeiten in jeder Periode. (Bsp. 70 Min. in Periode
        12 bedeutet, dass in dieser Periode 3 Pflegekräfte benötigt werden, da
        die Einteilung in 30 Min.-Perioden erfolgt.)
      </p>
    </div>
    <div>
      <!-- <a href="">Zur Methode</a> TODO-->
      <router-link
        :to="{ path: '/DownloadCenter', hash: '#Leitstand_Pflegestation' }"
        >Download</router-link
      >
    </div>
  </v-container>
</template>