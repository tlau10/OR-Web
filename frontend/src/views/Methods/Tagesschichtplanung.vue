<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Tagesschichtplanung</title>
        </head>

        <body>
            <div class="content">
                <h1>Tagesschichtplanung</h1>	
    
                <hr noshade size=1>
                    <div class="infoPics">
                        <img src="@/assets/tagesschichtplanung.jpg">
                    </div>
                <hr noshade size=1>
                    <h2>Beschreibung der Methode:</h2>
                <p>	
                    Mit dem Tagesschichtplaner kann der optimale Personaleinsatz innerhalb eines Tages bestimmt werden.
                    Die optimale L&ouml;sung wird mit dem Solver XA berechnet.
                    Zu Beginn muss ein Bedarfsplan, sowie ein Schichtmusterplan erstellt werden.
                </p>
                <b>Wichtiger Hinweis:</b></br>
                <p>
                    Es muss ein kompletter Tag geplant werden.

                    Bei der Modellbildung bitte beachten !

                    Diese Methode ist nur aus dem VPN der Hochschule Konstanz erreichbar.
                </p>
            </div>
            <div>
                <!-- <a href="">Zur Methode</a> TODO-->
                <!--<a href="">Download</a> TODO-->
            </div>
        </body>
    </v-container>
</template>