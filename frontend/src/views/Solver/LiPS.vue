<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>LiPS</title>
        </head>

        <body>
            <div class="content">
                <h1>LiPS-Solver</h1>
                <hr noshade size=1>
                <div class="infoPics">
                <img height="400px" src="@/assets/lips.png">
                </div>
                <hr noshade size=1>
                <h2>Beschreibung des Solvers:</h2>
                <p>
                    Der Linear Program Solver (LiPS) dient zur L&ouml;sung von linearen Programmierproblemen.
                    Die Software zeichnet sich durch eine grafische Oberfl&auml;che, sowie eine integrierte Sensibilit&auml;tsanalyse aus.
                    LiPS unterst&uuml;tzt die Dateiformate MPS und ein einfaches LP-Format.
                </p>
                <p>
                    Bei dieser Methode handelt es sich um eine externe Software.
                </p>
                <p>
                    <b>Wichtiger Hinweis:</b>
                    Externe Software: Hierbei handelt es sich um eine Freeware.
                </p>
            </div>
            <div>
                <!-- <a href="">Zum Solver</a> TODO-->
                <router-link :to="{ path: '/DownloadCenter', hash: '#LiPS'}">Download</router-link>
            </div>
        </body>
    </v-container>
</template>