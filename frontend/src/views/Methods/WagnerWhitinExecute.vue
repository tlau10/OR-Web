<template>
  <v-container class="spacing-playground pa-6" fluid>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=11" />

      <title>Wagner Whitin</title>
    </head>

    <body>
      <h1>Wagner Whitin 1.2 - Algorithmus</h1>
      <v-container>
        <v-row>
          <v-col cols="2">
            <label for="bestellkostensatz">Bestellkostensatz</label>
          </v-col>
          <v-col cols="2">
            <input
              id="bestellkostensatz"
              class="text-right"
              name="bestellkostensatz"
              type="number"
              min="1"
            />
          </v-col>
          <v-col cols="2"> <span>GE</span></v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <label for="anzPerioden">Anzahl der Perioden</label>
          </v-col>
          <v-col cols="2">
            <input
              id="anzPerioden"
              class="text-right"
              name="anzPerioden"
              type="number"
            />
          </v-col>
          <v-col cols="2">
            <span>Perioden</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <label for="lagerkostensatz">Lagerkostensatz</label>
          </v-col>
          <v-col cols="2">
            <input
              id="lagerkostensatz"
              class="text-right"
              name="lagerkostensatz"
              type="number"
            />
          </v-col>
          <v-col cols="2">
            <span>GE pro ME pro ZE</span>
          </v-col>
          <v-col cols="4">
            <input id="variableLagerkosten" type="checkbox" />
            <label for="variableLagerkosten">variable Lagerkosten</label>
          </v-col>
        </v-row>
      </v-container>
      <v-btn id="btnCreateTbl" depressed>Erstelle Tabelle</v-btn>
      <div id="tbl"></div>

      <input id="start" type="button" value="Speichern" />
      <div id="output"></div>
    </body>
  </v-container>
</template>
<script  type = "text/javascript" >
var start;
var output;
var createTbl;
/**
 * init() wird aufgerufen, sobald die Seite geladen ist, weist den Variablen die ID zu und setzt den EventListener auf den Button mit der ID "start"
 */
function init() {
  start = document.getElementById("start");
  output = document.getElementById("output");
  createTbl = document.getElementById("btnCreateTbl");
  //Sobald der Button mit der ID "start" angeklickt wird, wird die Funktion socket() aufgerufen
  start.addEventListener("click", socket, false);
  createTbl.addEventListener("click", createTable, false);
}
/**
 * socket() erstellt eine Verbindung zum WebSocket, holt Daten aus den input-Feldern und leitet diese an den WebSocket weiter
 */
function socket() {
  var wsUri = "ws://localhost:8080/web-socket";
  var message = createMessage();
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

function createTable() {
  var tbl =
    "<table><tr><th>Periode</th><th>Bedarf der Periode</th><th>Lagerkosten der Periode</th></tr>";
  var anzPerioden = document.getElementById("anzPerioden").value;
  var lagerkostensatz = document.getElementById("lagerkostensatz").value;
  var i = 1;
  if (document.getElementById("variableLagerkosten").checked  == true) {
    for (i; i <= anzPerioden; i++) {
      tbl +=
        "<tr><td>" +
        i +
        '</td><td><input id="bedarf' +
        i +
        '" name="bedarf' +
        i +
        '" type="number" /></td><td>' +
        '</td><td><input id="lagerkostensatz' +
        i +
        '" name="lagerkostensatz' +
        i +
        '" type="number" /> ' +
        "</td></tr>";
    }
  } else {
    for (i; i <= anzPerioden; i++) {
      tbl +=
        "<tr><td>" +
        i +
        '</td><td><input id="bedarf' +
        i +
        '" name="bedarf' +
        i +
        '" type="number" /></td><td>' +
        lagerkostensatz +
        "</td></tr>";
    }
  }
  tbl += "</table>";
  var divTbl = document.getElementById("tbl");
  divTbl.innerHTML = tbl;
}

function createMessage() {
  var anzPerioden = document.getElementById("anzPerioden").value;
  var bestellkostensatz = document.getElementById("bestellkostensatz").value; // = Rüstkosten

  var msg = anzPerioden + ";" + bestellkostensatz + ";";
  var i = 1;
  for (i; i <= anzPerioden; i++) {
    msg += document.getElementById("bedarf" + i).value + " ";
  }
  msg += ";";
  if (document.getElementById("variableLagerkosten").checked  == true) {
    for (i; i <= anzPerioden; i++) {
      msg += document.getElementById("variableLagerkosten" + i).value + " ";
    }
  } else {
    msg += document.getElementById("lagerkostensatz").value;
  }
  console.log(msg);
  return msg;
}

/**
 * Ruft init() Funktion auf, sobald die Seite geladen ist
 */
window.addEventListener("load", init, false);
</script>