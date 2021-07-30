<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Wagner Whitin</title>
        </head>

        <body>
            <div class="content">
                <h1 align="left">Wagner Whitin 1.2</h1>
                <hr noshade size=1>	
                    
                <img src="@/assets/eingabeProPeriode.jpg" height="400px">			
                <hr noshade size=1>
                <p>
                    Dies ist ein Programm, welches optimale Losgr&ouml;&szlig;en f&uuml;r Produkte, mit einer immer wieder &auml;ndernden Nachfrage, bei einstufiger Fertigung und ohne das Ber&uuml;cksichtigen vorhandener Kapazit&auml;ten, errechnet. Das geschieht auf Basis des Wagner Whitin Algorithmus.
                </p>
                <ul>
                    <p>Eingegeben werden k&ouml;nnen die R&uuml;stkosten, die Anzahl der Perioden und die Lagerkosten, sowie den Bedarf pro Periode durch einen Klick auf den &quotWeiter&quot-Button.</p>
                    <p>Klickt man nun auf &quotBerechnen&quot so wird das Kostenminimum errechnet. Zus&auml;tzlich wird eine Tabelle mit den Perioden, deren Bedarfsmengen, deren Bestellmengen, f&uuml;r welche Anzahl von Perioden in einer Periode bestellt wird und der Lagerbestand der Periode angezeigt.</p>
                </ul>
                <p>
                    Mehr Informationen zur Funktionsweise des Wagner Whitin Algorithmus, finden Sie im Programmordner der Methodendatenbank unter \WagnerWhitin\DOC\BESF-WagnerWhitin.docx
                </p>
                </div>
                <div>
                    <p><a href="http://localhost:8080/api/hello">Zur Methode</a></p>
                
                    <p><a href="DownloadCenter#WagnerWhitin">Download</a></p>
                    <p>{{ msg }}</p>
                </div>
            </body>
    </v-container>
</template>

<script>
  export default {
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        fetch("http://localhost:8080/api/hello")
        .then((response) => response.text())
        .then((data) => {
            this.msg = data;
        });
    }
  }
</script>