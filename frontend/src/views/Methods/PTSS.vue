<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h1>PTSS - Paket Transport Simulation System</h1>

      <hr noshade size="1" />

      <div class="infoPics">
        <img src="@/assets/ptss.gif" />
      </div>

      <hr noshade size="1" />
      <h2>Beschreibung der Methode:</h2>
      <p>
        Die Methode „Paket Transport Simulation System“ ist ein Werkzeug für die
        Modellierung und Simulation von Routen. Sie dient zur Ermittlung der
        Route und den Kosten einer beliebigen Strecke. Die optimale Strecke mit
        den niedrigsten Kosten wird von der Methode als Ergebnis angezeigt.
        Falls alle Routen berechnet werden sollen, werden alle Möglichkeiten mit
        den jeweiligen Kosten als Ergebnis angezeigt.
      </p>

      <b>Performance Test:</b>
      <p>
        200 Knoten und 380 Grenzen eingegeben. Keine Begrenzung bis dahin.
        <br />
        Eine Route wird direkt berechnet. Alle Routen gehen nicht. Das Programm
        hängt sich auf. <br />
        2. Versuch mit 20 Knoten und 40 Kanten. Programm hängt sich auf bei alle
        Routen berechnen. Es wird auch kein Fortschritt angezeigt <br />
        3. Versuch mit 10 Knoten und 20 Kanten funktioniert. <br />
        4. Versuch mit 12 Knoten und 25 Kanten. 15 Sekunden <br />
        5. Versuch mit 15 Knoten und 30 Kanten. 1min 20 Sekunden <br />
        6. Versuch mit 17 Knoten und 35 Kanten. Das Programm hängt sich auf.
        <br />
        7. Versuch mit 16 Knoten und 33 Kanten. 3min 20 Sekunden <br />
        8. Versuch mit 17 Knoten und 34 Kanten. 8min 28 Sekunden <br />
        9. Versuch mit 17 Knoten und 35 Kanten. 3min 11 Sekunden <br />
        10. Versuch mit 18 Knoten und 38 Kanten. 14min 44 Sekunden <br />
        11. Versuch mit 19 Knoten und 40 Kanten. Nach 22 Minuten noch nicht
        fertig
      </p>
    </div>
    <div>
      <!-- <a href="">Zur Methode</a> TODO-->
      <router-link :to="{ path: '/DownloadCenter', hash: '#PTSS' }"
        >Download</router-link
      >
    </div>
  </v-container>
</template>