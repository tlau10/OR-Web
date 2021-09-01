<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title> Eisenstadt </title>
        </head>

        <body>
            <div class="content">
                <h1>Eisenstadt 1.4 (Haltestellenzuordnung und Simulation)</h1>
                <hr noshade size=1>
                
                <div class="infoPics">
                    <img src="@/assets/einsen5.jpg">
                </div>
                
                <hr noshade size=1>
               
                    <h2>Beschreibung der Methode:</h2>
                     <p>
                    Dieses Tool ist in erster Linie als Unterst&uuml;tzung f&uuml;r einen St&auml;dteplaner gedacht. 
                    Der Planer hat die M&ouml;glichkeit ein individuelles Bushaltestellennetz zu erstellen 
                    und zu optimieren. Nach der Definition von Buslinien kann das Model simuliert werden. 
                    Zur Erstellung steht ein Editor zur Verf&uuml;gung, f&uuml;r die Optimierung ein Modell aus dem Bereich 
                    Operations Research, f&uuml;r die Simulation eine grafische Animation und eine Auswertung dieser. 
                    Der Planer hat sofort einen guten Überblick &uuml;ber sein erstelltes System und kann jederzeit 
                    individuell &uuml;ber den Editor manuelle Änderungen vornehmen. 
                    Ferner hat er die M&ouml;glichkeit, s&auml;mtliche Landkarten zur Unterst&uuml;tzung zu laden, 
                    um m&ouml;glichst nah an der Realit&auml;t bleiben zu k&ouml;nnen.
                </p>
                <p>
                <b>Performance:</b>
                    <br>Max. 15 Ziele bei der Optimierung, deshalb immer im Sekundenbereich 
                    <br>Simulation: 1h 28min 51sec | 7 Haltestellen, 4 Linien, 2 Streckenabschnitte | 06:00 bis 18:00 | Geschwindigkeit langsam 
                    <br>Bei gleicher Einstellung mit Geschwindigkeit Mittel 22m 15s 
                    <br>Bei gleicher Einstellung mit Geschwindigkeit Schnell 1m 32s
                </p>
            </div>
            <div>
                <!-- <a href="">Zur Methode</a> TODO-->
                <router-link :to="{ path: '/DownloadCenter', hash: '#Eisenstadt'}">Download</router-link>
            </div>
        </body>
    </v-container>
</template>