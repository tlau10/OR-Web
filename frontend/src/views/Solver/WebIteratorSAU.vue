<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Web Iterator</title>
        </head>
        
        <body>
            <div class="content">
                <h1>Web-Iterator</h1>
                <hr noshade size=1>
                <div class="infoPics"> 
                    <img width="500px" src="@/assets/simplex Iterator.png"/>
                </div>
                <hr noshade size=1>
                <h2>Beschreibung des Solvers:</h2>
                <p>
                    Der Simplex Iterator dient dazu einen Einblick in die Arbeitsweise des Simplex-Algorithmus zu vermitteln.
                    Die letzte Zeile der Eingabematrix repräsentiert die Zielfunktion und die darüber liegenden Zeilen die Matrix an Restriktionen Ax=b.
                    Der Lösungprozess kann entweder über die automatische oder die manuelle Wahl des Pivot-Elements beeinflusst werden.
                    Zusätzlich können die einzelnen Iterations-Schritte manuell ausgeführt werden
                </p>
                <p>
                    Es können Dateien im .mps exportiert sowie importiert werden. 
                </p>
                <p>
                    <b>Folgende Grundfunktionen stehen zur Verfügung:</b>
                </p>
                <p>
                    <b>Pivot:</b> 
                    <br>
                    Ermittelt anhand der Pivotspalten- und Zeilenkriterien die zu pivotierende Zelle. Diese wird über Auswahl der entsprechenden Zelle visualisiert. 
                </p>
                <p>
                    <b>Iteration:</b> 
                    <br>
                    Führt das Gauss'sche Eliminationsverfahren für die gewählte Zelle aus.
                </p>
                <p>
                    <b>Optimierung:</b> 
                    <br>
                    Wiederholt führt die Iteration über gefundene Pivotelemente solange aus, bis kein Pivotelement mehr gefunden werden kann. 
                </p>
            </div>
            <div>
                <!-- <a href="">Zum Solver</a> TODO-->
                <!--<router-link :to="{ path: '/DownloadCenter', hash: '#...'}">Download</router-link> TODO-->
            </div>
        </body>
    </v-container>
</template>