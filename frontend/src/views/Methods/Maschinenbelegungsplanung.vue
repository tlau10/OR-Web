<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Maschinenbelegungsplanung 5.2</title>
        </head>
        <body>
            <div class="content">
                <h1>Maschinenbelegungsplanung 5.2</h1>
            
                <hr noshade size=1>
                <div class="infoPics">
                    <img src="@/assets/mbp2003.gif">
                    </div>
                    
                <hr noshade size=1>
                
                <h2>Beschreibung der Methode:</h2>
                <p>
                    Die Maschinenbelegungsplanung wird dann eingesetzt, wenn eine 
                    festgelegte Anzahl von Aufträgen mit entsprechenden Produktionszeiten 
                    in vorgegebenen Perioden abgearbeitet werden soll. Den einzelnen Perioden 
                    werden Kapazitäten in Form von Maschinen unterschiedlicher Typen zugeordnet.
                    <br>
                    Die Aufgabe besteht nun darin, die Aufträge so auf die Perioden zu 
                    verteilen, dass die Auslastung der Maschinen über die Perioden (gleichmäßig) 
                    minimal ist. Weitere Optimierungsfälle sind denkbar, z.B. die möglichst 
                    frühe Abarbeitung der Aufträge, evtl. unter Einhaltung bestimmter 
                    Bedingungen, wie dem Freihalten festgelegter Kapazitäten usw.
                </p>
            </div>
            <div>
                <!-- <a href="">Zur Methode</a> TODO-->
                <router-link :to="{ path: '/DownloadCenter', hash: '#Maschinenbelegungsplanung'}">Download</router-link>
            </div>
        </body>
    </v-container>
</template>