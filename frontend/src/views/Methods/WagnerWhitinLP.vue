<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Wagner-Whitin mit LP 1.3</title>
        </head>

        <body >
            <div class="content">
                <h1>Wagner-Within mit LP 1.3</h1>
                <p><b>Periodenorientierte Lagerhaltungs-Optimierung [POLO]</b></p>
                <hr noshade size=1>
                <img src="@/assets/wagwhit_polo.gif" height="350px">
                <hr noshade size=1>
                <br>
                <h2>Beschreibung der Methode:</h2>
                <p>
                <br>Der Wagner-Whitin LP ist ein Periodenorientierte Lagerhaltungs-Optimierung (POLO). Mit dieser Methode bestimmt man, wie die Kosten minimal gehalten werden, bei ausgew&auml;hlten Lagerbest&auml;nden. 
                    Die Berechnung der optimalen Bestellmenge und der optimalen Periode f&uuml;r die Lagerverwaltung beruht auf Basis des Wagner-Whitin-Verfahrens.
                </p>
                <p><b>Performance:</b>
                <br> Max. 99 Nachfragen
                </p>
            </div>
            <div>
                <!-- <a href="">Zur Methode</a> TODO-->
                <router-link :to="{ path: '/DownloadCenter', hash: '#WagnerWhitinLP'}">Download</router-link>
            </div>
        </body>
 </v-container>
</template>