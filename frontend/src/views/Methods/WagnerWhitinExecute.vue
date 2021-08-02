<template>
  <v-container class="spacing-playground pa-6" fluid>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=11" />

      <title>Wagner Whitin</title>
    </head>

    <body>
      <h1>Wagner Whitin 1.2 - Algorithmus</h1>
      <label for="ruestkosten">Rüstkosten</label>
      <input id="ruestkosten" name="ruestkosten" type="number" min="1" />
      <label for="anzPerioden">Anzahl der Perioden</label>
      <input id="anzPerioden" name="anzPerioden" type="number" />

      <table>
        <tr>
          <th>Periode</th>
          <th>Bedarf</th>
          <th>Lagerkosten</th>
        </tr>
        <tr>
          <td><input id="period" name="period" type="number" min="1" /></td>
          <td><input id="bedarf" name="bedarf" type="number" /></td>
          <td><input id="lagerkosten" name="lagerkosten" type="number" /></td>
        </tr>
      </table>
      <input id="start" type="button" value="Speichern" />
      <div id="output"></div>
    </body>
  </v-container>
</template>
<script  type = "text/javascript" >
var start;
var output;
/**
 * init() wird aufgerufen, sobald die Seite geladen ist, weist den Variablen die ID zu und setzt den EventListener auf den Button mit der ID "start"
 */
function init() {
  start = document.getElementById("start");
  output = document.getElementById("output");
  //Sobald der Button mit der ID "start" angeklickt wird, wird die Funktion socket() aufgerufen
  start.addEventListener("click", socket, false);
}
/**
 * socket() erstellt eine Verbindung zum WebSocket, holt Daten aus den input-Feldern und leitet diese an den WebSocket weiter
 */
function socket() {
  var wsUri = "ws://localhost:8080/web-socket";
  var ruestkosten = document.getElementById("ruestkosten").value;
  var anzPerioden = document.getElementById("anzPerioden").value;
  var lagerkosten = document.getElementById("lagerkosten").value;
  var message = ruestkosten + " " + anzPerioden + " " + lagerkosten;
  var websocket = new WebSocket(wsUri);
  //onopen-Funktion wird erst ausgeführt, sobald eine WebSocket Verbindung verfügbar ist
  websocket.onopen = function () {
    websocket.send(message);
    writeToScreen(message);
    websocket.close();
  };
}
/**
 * writeToScreen(message) - Test-Funktion
 */
function writeToScreen(message) {
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}
/**
 * Ruft init() Funktion auf, sobald die Seite geladen ist
 */
window.addEventListener("load", init, false);
</script>