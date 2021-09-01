<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Lineare Portfoliooptimierung 2.0</title>
        </head>

        <body>
            <div class="content">
                <h1>Lineare Portfoliooptimierung 2.0</h1>	

                <hr noshade size=1>
                <div class="infoPics">
                    <img src="@/assets/portfolio2.0.jpg">
                </div>
                <hr noshade size=1>
                
                <h2>Beschreibung der Methode:</h2>
                <p>
                    Die Lineare Portfoliooptimierung befasst sich mit der Zusammenstellung
                    optimaler Aktienportfolios, die vorgegebenen Zielkriterien gen&uuml;gen.
                    Die Zusammenstellung der Portfolios erfolgt auf Basis einer hinreichend
                    gro&szlig;en Anzahl von Kursdaten, ausgehend von der Idee, dass in der Zukunft 
                    nicht alles anders sein wird.
                </p>

                <p>
                    Auf der Basis dieser Kurswerte werden Durchschnittsrenditen der
                    einzelnen Aktien errechnet, sog. Renditeerwartungswerte. Diese
                    Renditeerwartungswerte stellen quasi gleitende Durchschnittswerte
                    dar, die sich aus den arithmetischen Mitteln aller Jahresrenditen auf
                    der Basis aller Handelstage errechnen. Von Renditeerwartungswerten
                    spricht man im &uuml;brigen, weil diese Ergebniswerte f&uuml;r die Zukunft nicht
                    gesichert sind.
                </p>	
                <p>
                    Mittels der Renditeerwartungswerte f&uuml;r die einzelnen Aktien lassen sich
                    nun LP-Ans&auml;tze aufstellen, die ein nach den vorgegebenen Zielkriterien
                    optimales Aktienportefeuilles errechnen. Grunds&auml;tzlich unterscheidet man
                    hierbei zwischen Renditemaximierern und Varianzminimierern. 
                    Einzuhaltende Bedingungen sind z.B. die Festlegung von Anteilsobergrenzen
                    f&uuml;r einzelen Aktien, die Vorgabe eines Mindestrenditewerts bei der
                    Varianzminimierung usw.
                </p>
                    <b>Performance:</b>
                <p>
                    Alle aufw&auml;ndigeren Berechnungen der Typen 1 und 4 in einer Schrittweise von 1 werden innerhalb von wenigen Minuten ausgerechnet.
                </p>
            </div>
            <div>
                <!-- <a href="">Zur Methode</a> TODO-->
                <router-link :to="{ path: '/DownloadCenter', hash: '#Portfolio_Optimierung'}">Download</router-link>
            </div>
        </body>
    </v-container>
</template>