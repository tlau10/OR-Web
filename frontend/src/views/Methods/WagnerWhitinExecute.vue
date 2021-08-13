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
            <input id="letiableLagerkosten" type="checkbox" />
            <label for="letiableLagerkosten">variable Lagerkosten</label>
          </v-col>
        </v-row>
      </v-container>
      <div>
        <v-btn id="weiter" depressed>Weiter</v-btn>
        <v-btn id="berechnung" depressed>Berechnung</v-btn>
        <v-btn id="reset" depressed>Reset</v-btn>
      </div>
      <div id="tbl"></div>
      
      <div id="output"></div>
    </body>
  </v-container>
</template>
<script  type = "text/javascript" >
var berechnung;
var output;
var weiter;
var resetbtn;
/**
 * init() wird aufgerufen, sobald die Seite geladen ist, weist den Variablen die ID zu und setzt den EventListener auf den Button mit der ID "start"
 */
function init() {
  berechnung = document.getElementById("berechnung");
  output = document.getElementById("output");
  weiter = document.getElementById("weiter");
  resetbtn = document.getElementById("reset");
  //Sobald der Button mit der ID "start" angeklickt wird, wird die Funktion socket() aufgerufen
  berechnung.addEventListener("click", socket, false);
  weiter.addEventListener("click", createTable, false);
  resetbtn.addEventListener("click", reset, false);
}
/**
 * socket() erstellt eine Verbindung zum WebSocket, holt Daten aus den input-Feldern und leitet diese an den WebSocket weiter
 */
function socket() {
  let wsUri = "ws://localhost:8080/web-socket";
  let message = createMessage();
  let websocket = new WebSocket(wsUri);
  //onopen-Funktion wird erst ausgeführt, sobald eine WebSocket Verbindung verfügbar ist
  websocket.onopen = function () {
    websocket.send(message);
  };
  websocket.onmessage = function (responseMsg) {
    writeToScreen(responseMsg);
  };
 websocket.onclose = function () {
    websocket.close();
  };
}
/**
 * writeToScreen(message) - erstellt Tabelle für das Ergebnis
 */
function writeToScreen(message) {
  let response = message.data
  let lines = response.split("--")

  let kostenminimum = document.createElement("p");
  kostenminimum.innerHTML = "Kostenminimum: "+lines[lines.length-1]+" GE";
  output.appendChild(kostenminimum);

  let tbl = 
    "<table><tr><th>Periode</th><th>Bedarfsmenge</th><th>Bestellmenge</th><th>Anzahl Perioden</th><th>Lagerbestand</th>"+
    "<th>Lagerkosten</th></tr>";

  let length_without_kostenminimum = lines.length-1
  for (let i = 0; i < length_without_kostenminimum; i++){
    let columns = lines[i].split(" ");
    tbl+="<tr>";
    for (let j = 0; j < columns.length; j++){
      tbl+="<td>"+columns[j]+"</td>";
    }
    tbl+="</tr>";
  }
  tbl+="</table>";

  let table = document.createElement("p");
  table.innerHTML = tbl;
  output.appendChild(table);
}

function reset(){
  while(output.lastChild){
    output.removeChild(output.lastChild);
  }

  let tbl=document.getElementById("tbl");
  while(tbl.lastChild){
    tbl.removeChild(tbl.lastChild);
  }

  document.getElementById("anzPerioden").value="";
  document.getElementById("lagerkostensatz").value="";
  document.getElementById("bestellkostensatz").value="";
}

function createTable() {
  let tbl =
    "<table><tr><th>Periode</th><th>Bedarf der Periode</th><th>Lagerkosten der Periode</th></tr>";
  let anzPerioden = document.getElementById("anzPerioden").value;
  let lagerkostensatz = document.getElementById("lagerkostensatz").value;
  let bestellkostensatz = document.getElementById("bestellkostensatz").value;

  //überprüfe ob input eingetragen
  if(anzPerioden == "" || lagerkostensatz == "" || bestellkostensatz == "")
    return

  let i = 1;
  if (document.getElementById("letiableLagerkosten").checked == true) {
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
  let divTbl = document.getElementById("tbl");
  divTbl.innerHTML = tbl;
}

function createMessage() {
  let anzPerioden = document.getElementById("anzPerioden").value;
  let bestellkostensatz = document.getElementById("bestellkostensatz").value; // = Rüstkosten

  let msg = anzPerioden + ";" + bestellkostensatz + ";";
  for (let i=1; i <= anzPerioden; i++) {
    let bedarf = document.getElementById("bedarf" + i).value;
    if(bedarf == "")
      bedarf = "0";
    
    msg += bedarf+" ";
  }
  msg += ";";
  if (document.getElementById("letiableLagerkosten").checked == true) {
    for (let i=1; i <= anzPerioden; i++) {
      let lagerkosten = document.getElementById("lagerkostensatz" + i).value;
      if(lagerkosten == "")
        lagerkosten = "0";
      msg += lagerkosten+" ";
    }
  } else {
    msg += document.getElementById("lagerkostensatz").value;
  }
  return msg;
}

/**
 * Ruft init() Funktion auf, sobald die Seite geladen ist
 */
window.addEventListener("load", init, false);
</script>