<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Iterator</title>
        </head>

        <body bgproperties="fixed">
            <div class="content">
                <h1>Iterator 1.0</h1>
                <hr noshade size=1>
                <div class="infoPics">
                    <img src="@/assets/iterator.gif">	
                </div>
                <hr noshade size=1>
                <h2>Beschreibung des Solvers:</h2>
                <p>
                    Mit dem Operations Research Iterator k&ouml;nnen LP-Modelle in Tableauform nach dem Gauss'schen Algorithmus iteriert werden.
                    <br>
                    Zun&auml;chst muss ein Tableau eingegeben oder geladen werden. Dieses Tableau ist im Normalfall das Ausgangstableau.
                    Im Datenverzeichnis des Laufwerks ist das Ausgangstableau f&uuml;r unser OR-Standardmodell enthalten. 
                </p>
                <h2>Beispiel:</h2>
                <p>
                    3x1 + 2x2 = 12
                    <br> 	
                    x1 + 3x2 = 9

                    ZF: x1 + 2x2 --> Maximum 

                    NNB: x1, x2 = 0
                </p>
                <p>
                    Die Eingabewerte k&ouml;nnen Zahlenwerte sein (Ganz- oder Real-). Realzahlwerte werden automatisch in  gek&uuml;rzte Br&uuml;che umgewandelt. 
                    Zus&auml;tzlich k&ouml;nnen die Werte auch sofort als Br&uuml;che angegeben  werden. Andere Eingaben f&uuml;hren zu einer Fehlermeldung. 
                    Die Zeilen- und Spaltenanzahl kann in den entsprechenden Feldern ge&auml;ndert werden (max. 99).  
                </p>
                <p>
                <b>Folgende Grundfunktionen stehen zur Verfügung:</b>
                </p>
                <p>
                    <b>Pivot:</b> <br>
                    Ermittelt anhand der Pivotspalten- und Zeilenkriterien die zu pivotierende Zelle. Diese wird &uuml;ber Auswahl der entsprechenden Zelle visualisiert. 
                </p>
                <p>
                    <b>Iteration:</b> 
                    <br>
                    F&uuml;hrt das Gauss'sche Eliminationsverfahren f&uuml;r die gew&aumlhlte Zelle aus. 
                </p>
                <p>
                    <b>Optimierung:</b> 
                    <br>
                    Wiederholt f&uuml;hrt die Iteration &uuml;ber gefundene Pivotelemente solange aus, bis kein Pivotelement mehr gefunden werden kann.
                </p>
                <p>
                    <b>Performance:</b> <br>
                    Grenzen liegen bei 99 Zeilen und 99 Spalten.
                </p>
            </div>
            <div>
            <a href="DownloadCenter#Iterator">Download</a>
            </div>
        </body>
    </v-container>
</template>