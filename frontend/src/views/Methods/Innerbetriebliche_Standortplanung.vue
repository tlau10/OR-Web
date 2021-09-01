<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h1>Innerbetriebliche Standortplanung 1.1 (quadratisch)</h1>

      <hr noshade size="1" />
      <div class="infoPics">
        <img src="@/assets/stand_i2.gif" height="285px" />
        <img src="@/assets/stand_i23.gif" height="285px" />
      </div>

      <hr noshade size="1" />

      <p></p>
      <h2>Beschreibung der Methode:</h2>

      Die innerbetriebliche Standortplanung behandelt die Zuordnung von
      Fertigungseinheiten auf m&ouml;gliche Standorte. Mathematisch gesehen
      behandelt es das Zuordnungsmodell. Die Fertigungseinheiten sind so zu
      platzieren, dass der Transportaufwand, der zwischen den
      Fertigungseinheiten zu transportierenden Mengen, minimiert wird. Der
      Transportaufwand (TAW) ist die Summe aller mathemaischen Produkte, die
      sich aus den transportierenden Mengen zwischen paarweise zugeordneten
      Fertigungszellen und den betreffenden Entfernungen ergeben.

      <h3>Berechnungsart:</h3>

      <p>
        <b>Enumeration:</b>
      </p>

      Die vollst&auml;ndige Enumeration bezeichnet das Vorgehen, bei welchem
      alle zul&auml;ssigen L&ouml;sungen berechnet werden und daraus die
      Kombination mit dem geringsten Zielfunktionswert ausgesucht wird. Die
      m&ouml;glichen Fehler durch das &uuml;bersehen von Kombinationen werden
      verringert, indem die L&ouml;sungssuche nach einer bestimmten logischen
      Weise strukturiert wird.

      <p>
        <b>Entscheidungsbaumverfahren:</b>
      </p>

      Das Entscheidungsbaumverfahren zeigt die Organisation der
      L&ouml;sungsschritte, mit denen das Modell solange manipuliert wird, bis
      der gesuchte maximale oder minimale L&ouml;sungswert gefunden ist. Es gibt
      immer n! zul&auml;ssige L&ouml;sungen.

      <p>
        <b>Performancetest:</b>
      </p>
      <p>
        Bei 10/10 Zeilen - Dauer 11,48 min. 10 ist das vorgegebne Limit in den
        Einstellungen. Bei h&ouml;heren Werten werden die Zeiten exponentiell
        gr&ouml;&szlig;er. (Bsp.: Bei 15/15 nach 36 min. immer noch bei 0%
        Berechnung) Detaillierte Ausgabe des Entscheidungsbaums funktioniert
        nicht. Prozentanzeige funktioniert bei gr&ouml;&szlig;eren Berechnungen
        nicht.
      </p>
    </div>
    <div>
      <!-- <a href="">Zur Methode</a> TODO-->
      <router-link
        :to="{ path: '/DownloadCenter', hash: '#IB_Standortplanung' }"
        >Download</router-link
      >
    </div>
  </v-container>
</template>