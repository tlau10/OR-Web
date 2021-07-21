<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Verkehrsplaner</title>
        </head>

        <body>
            <div class="content">
                <h1>Verkehrsplaner (Simulation)</h1>
            
                <hr noshade size=1>
                <div class="infoPics">
                    <img src="@/assets/fabeplan.gif">
                </div>
                    
                <hr noshade size=1>
                
                <h2>Beschreibung der Methode:</h2>
                <p>
                    Der Verkehrsplaner ist ein Simulationsprogramm, 
                    dass in erster Linie als Unterstützung für Verkehrsnetze dient. 
                    Dieses Tool ermöglicht es, ein individuelles Verkehrsaufkommen 
                    zu generieren und diese zu simulieren. Die durchgeführte Simulation 
                    liefert ein Ergebnis, welches dem Nutzer z.B. zeigt, an welcher Stelle 
                    im Straßenverlauf Staus entstehen können.
                </p>
                <p>
                    <b>Performancetest:</b><br>
                     Fallbeispiel 1; Dauer 10 000 sek. auf 100.0X Schnelligkeit : 1,41 min
                     Fallbeispiel 1; Dauer 10 000 sek. auf 1.0X Schnelligkeit : 50 min
                    Fallbeispiel 1; Dauer 100 000 sek. auf 100.0X Schnelligkeit : 20 min
                </p>
            </div>
            <div>
                <!-- <a href="">Zur Methode</a> TODO-->
                <a href="DownloadCenter#Verkehrsplaner">Download</a>
            </div>
        </body>
    </v-container>
</template>