<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Jahresplanung</title>
        </head>

        <body>
            <div class="content">
                <h1>Jahresplanung</h1>	
                
                <hr noshade size=1>
                <div class="infoPics">
                    <img src="@/assets/jahresplanung.jpg">
                </div>
                <hr noshade size=1>
                <h2>Beschreibung der Methode:</h2>

                <p>
                    Mit der Jahresplanung kann der optimale Personaleinsatz innerhalb eines Jahres bestimmt werden.
                    Die optimale L&ouml;sung wird mit dem Solver MOPS berechnet.
                    Zu Beginn muss ein Bedarfsplan, sowie ein Schichtmusterplan erstellt werden.
                </p>
                <b>Wichtiger Hinweis:</b>
                <p>
                    Es muss ein komplettes Jahr geplant werden.
                    Bei der Modellbildung bitte beachten !
                    Diese Methode ist nur aus dem VPN der Hochschule Konstanz erreichbar.
                </p>
            </div>
            <div>
                <!-- <a href="">Zur Methode</a> TODO-->
                <!-- <a href="DownloadCenter#Jahresplanung">Download</a>-->
            </div>
        </body>
    
    </v-container>
</template>