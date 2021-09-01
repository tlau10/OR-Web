<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Wochenschichtplanung</title>
        </head>

        <body>
            <div class="content">
                <h1>Wochenschichtplanung</h1>
                <hr noshade size=1>

                <div class="infoPics">
                <img src="@/assets/wochenschichtplanung.jpg">
                </div>

                <hr noshade size=1>
                    <h2>Beschreibung der Methode:</h2>
                <p>
                Mit dem Wochenschichtplaner kann der optimale Personaleinsatz innerhalb einer Woche bestimmt werden.
                Die optimale L&ouml;sung wird mit dem Solver MOPS berechnet.
                Zu Beginn muss ein Bedarfsplan, sowie ein Schichtmusterplan erstellt werden.
                </p>
                <b>Wichtiger Hinweis:</b>
                <p>
                Es muss eine komplette Woche geplant werden.

                Bei der Modellbildung bitte beachten !

                Diese Methode ist nur aus dem VPN der Hochschule Konstanz erreichbar.
                </p>
            </div>
            <div>
                <!-- <a href="">Zur Methode</a> TODO-->
                <!--<router-link :to="{ path: '/DownloadCenter', hash: '#'}">Download</router-link> TODO -->
            </div>
        </body>
    </v-container>
</template>