<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div class="content">
      <h2 align="left">Job Shop 2.2</h2>
      <hr color="ffffff" noshade size="1" />
      <h3 align="left">Eingabematrix:</h3>
      <br />
      <img src="@/assets/jobShop2.2_01.png" />
      <br />
      <h3 align="left">Lösung:</h3>
      <br />
      <img src="@/assets/jobShop2.2_02.png" />
      <br />
      <h3 align="left">Aufgabe des Programmes:</h3>
      <p>
        Die Aufgabe des Programmes besteht darin, eine vorgegebene Zahl von
        Produkten hinsichtlich einer optimalen, kürzesten Gesamtdurchlaufzeit
        auf einer unterschiedlichen Anzahl an Maschinen einzuplanen.
      </p>
      <h3 align="left">Prämissen des Modells:</h3>
      <p>Für das Programm gibt es die folgenden Beschränkungen:</p>
      <ul>
        <p>• maximal 16 Produkte/Maschinen</p>
        <p>
          • maximale Bearbeitungsdauer von 99 Zeiteinheiten eines Produkts auf
          einer Maschine
        </p>
        <p>• unterstütz nur Natürliche Zahlen</p>
        <p>• Nutzung des lpSolve</p>
        <p>• Fertigstellungszeiträume werden nicht berücksichtigt</p>
      </ul>
      <br />
      <p>
        <b
          >JobShop 2.2 wird in einer 32- und 64-Bit Version zur Verfügung
          gestellt. Der Start des Programmes erfolgt über die entsprechende
          Batch- oder Exe-Datei.</b
        >
      </p>
    </div>
    <div>
      <!-- <a href="">Zur Methode</a> TODO-->
      <router-link :to="{ path: '/DownloadCenter', hash: '#JobShop' }"
        >Download</router-link
      >
    </div>
  </v-container>
</template>