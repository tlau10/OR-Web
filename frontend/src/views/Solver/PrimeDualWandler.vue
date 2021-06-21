<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Primal-Dual-Wandler</title>
        </head>

        <body> 
            <div class="content">
                <h1>Primal-Dual-Wandler</h1>
                <hr noshade size=1>
                <div class="infoPics">
                <img height="450px" src="@/assets/primaldual1.jpg"/>
                </div>
                <hr noshade size=1>
                <h2>Beschreibung des Solvers:</h2>
                <p>
                Der Solver formt ein vom Benutzer eingegebenes Primal-Modell der Linearen Programmierung in das entsprechende Dualmodell um.
                Im ersten Schritt der Umformung wird das komplette Dualmodell angezeigt, im Anschluss daran kann per Button eine Vereinfachung dieses Modells durchgef&uuml;hrt werden. 
                Dazu verf&uuml;gt es &uuml;ber eine Wordanbindung zum Erstellen eines Word-L&ouml;sungsdokuments.
                </p>
                <p>
                    <b>Performance:</b>
                    <br>
                    Grenzen liegen bei 40 Variablen und 40 Restriktionen.
                </p>
            </div>
        </body>
    </v-container>
</template>