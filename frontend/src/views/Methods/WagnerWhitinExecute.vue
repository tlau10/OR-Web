<template>
  <v-container class="spacing-playground pa-6" fluid>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=11" />

      <title>Wagner Whitin</title>
    </head>

    <body>
      <h1>Wagner Whitin 1.2 - Algorithmus</h1>
      <div>
        <label for="bestellkostensatz">Bestellkostensatz</label>
        <input
          id="bestellkostensatz"
          name="bestellkostensatz"
          type="number"
          min="1"
        />
        <span>GE</span> <br />
      </div>
      <div>
        <label for="anzPerioden">Anzahl der Perioden</label>
        <input id="anzPerioden" name="anzPerioden" type="number" /><span
          >Perioden</span
        >
      </div>
      <div>
        <label for="lagerkostensatz">Lagerkostensatz</label>
        <input id="lagerkostensatz" name="lagerkostensatz" type="number" /><span
          >GE pro ME pro ZE</span
        >
        <!-- TODO Kontrollkästchen variable kosten-->
      </div>
      <button id="btnCreateTbl">Erstelle Tabelle</button>
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

function createTable() {
  var tbl =
    "<div id=\"tbl\"><table><tr><th>Periode</th><th>Bedarf der Periode</th><th>Lagerkosten der Periode</th></tr>";
  var anzPerioden = document.getElementById("anzPerioden").value;
  var lagerkostensatz = document.getElementById("lagerkostensatz").value;
  console.log('erstelle tbody');
  var i = 1;
  for (i; i <= anzPerioden ; i++) {
    console.log(i);
    tbl +=
      "<tr><td>" +
      i +
      "</td><td><input id=\"bedarf"+i+"\" name=\"bedarf"+i+"\" type=\"number\" /></td><td>" +
      lagerkostensatz +
      "</td></tr>";
      console.log(i+". Runde: "+tbl)
  } 
  tbl += "</table></div>";
  var divTbl = document.getElementById("tbl");
  var create = document.createElement(divTbl); //TODO Error
  divTbl.replaceWith(create);

}

/**
 * Ruft init() Funktion auf, sobald die Seite geladen ist
 */
window.addEventListener("load", init, false);
</script>