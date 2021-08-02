<template>
  <v-container class="spacing-playground pa-6" fluid>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=11" />
      <title>Wagner Whitin</title>
    </head>

    <body onload="init()">
      <h1>Wagner Whitin 1.2 - Algorithmus</h1>
      <!-- <form method="POST"> -->
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
      <button onclick="getValues()">Speichern</button>
      <!--  </form> -->
      <div id="output"></div>
    </body>
  </v-container>
</template>
<script language="javascript" type="text/javascript">
   var wsUri = "ws://localhost:8080/web-socket";
    var output;
  var message;

  function init()
  {
    output = document.getElementById("output");
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
  //  websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
  }

  function onOpen(evt)
  {
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks");
  }

  function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt)
  {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
    websocket.close();
  }

  function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

  function doSend(message)
  {
    writeToScreen("SENT: " + message);
    websocket.send(message);
  }

function getValues(){
  var ruestkosten= document.getElementById("ruestkosten").value;
  var anzPerioden=document.getElementById("anzPerioden").value;
  var lagerkosten=document.getElementById("lagerkosten").value;
  
  message = ruestkosten +" " +anzPerioden+" "+ lagerkosten;
  console.log(message);
  doSend(message);
  
}
  function writeToScreen(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
  }
  window.addEventListener("load", init, false);
</script>