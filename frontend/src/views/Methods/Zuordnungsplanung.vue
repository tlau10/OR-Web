<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=11"/>
        <title>Zuordnungsplanung</title>
        </head>

        <body>
            <div class="content">
                <h1>Zuordnungsplanung 2.1</h1>	
                
                <hr noshade size=1>
                <div class="infoPics">
                    <img src="@/assets/zurodnung2004_neu.jpg">
                </div>
                <hr noshade size=1>
                <h2>Beschreibung der Methode:</h2>
                <p>
                    Im Personalbereich st&ouml;&szlig;t man immer wieder auf das Zuordnungsproblem, wenn bestimmte Stellen mit 
                    den daf&uuml;r am besten geeigneten Bewerbern zu besetzen sind. Mit 
                    diesem Tool zur Zuordnungsplanung 
                    k&ouml;nnen solche Probleme komfortabel gel&ouml;st werden. 
                </p>
                <p>
                    Die in Java implementierte Software verwendet neben den Solvern LP und MOPS auch einen selbst 
                    entwickelten Enumerationsalgorithmus um die optimale L&ouml;sung zu 
                    jedem Zuordnungsproblem zu 
                    finden. Die L&ouml;sungszeiten werden bei der L&ouml;sung immer mit ausgegeben. So kann auch die 
                    Performance der unterschiedlichen Solver bzw. Algorithmen ermittelt werden. Au&szlig;erdem ist das 
                    Programm so gestaltet, dass auch beliebige andere Zuordnungsprobleme tabellarisch beschrieben und 
                    gel&ouml;st werden k&ouml;nnen. 
                </p>
                <p>
                    <b>Performance:</b>
                    Grenze bei LP bei 18 Zeilen und 18 Spalten.
                    Bei Enumeration liegt die Grenze bei 8 Zeilen und 8 Spalten.
                </p>
            </div>
            <div>
                <!-- <a href="">Zur Methode</a> TODO-->
                <!--<a href="">Download</a> TODO -->
            </div>
        </body>
    </v-container>
</template>