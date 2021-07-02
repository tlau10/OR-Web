<template>
    <v-container
        class="spacing-playground pa-6"
        fluid
    >
		<head>
		<meta charset="UTF-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=11"/>
		<title>Power-LP 0.7.5</title>
		</head>

		<body>
			<div class="content">
				<h1>Power-LP 0.7.5</h1>
				<hr noshade size=1>
				<div class="infoPics">
					<img height="400px" src="@/assets/powerLP075.jpg">
				</div>
				<hr noshade size=1>
				<h2>Beschreibung des Solvers:</h2>
				<p>
					Das Programm ist ein modernes 32-Bit Programm und unterst&uuml;tzt lange Dateinamen und das Multiple Document Interface, welches das parallele &ouml;ffnen mehrerer Dateien im selben 
					Programmfenster erm&ouml;glicht.Au&szlig;erdem wird durch die moderne Verzeichnisstruktur das Navigieren im Datei-Browser wesentlich vereinfacht. 
					Befehle k&ouml;nnen mittels Symbolleisten schneller ausgef&uuml;hrt werden und beim &ouml;ffnen/Speichern einer Datei gelangt man automatisch in das zuletzt ge&ouml;ffnete Verzeichnis.
					Letztendlich reagieren auch die Zellen, in die das LP-Modell eingetragen wird, vergleichbar mit den Zellen einer Excel-Tabelle.
				</p>
				<p>
					Ein unbeabsichtigtes Entfernen von Variablen und Restriktionen ist nicht m&ouml;glich, da diese durch einfaches Hinzuf&uuml;gen der zuvor versehentlich verringerten Variablen bzw. 
					Restriktionenanzahl wieder in das Modell aufgenommen werden.
				</p>
				<p> 
					Durch ein ausgefeiltes Fehlerhandling wird der Benutzer fr&uuml;hzeitig durch aussagekr&auml;ftige Warnungen auf Probleme hingewiesen. 
					Bei Eingabe ung&uuml;ltiger Zahlen wird beispielsweise eine entsprechende Fehlermeldung ausgegeben und die Ausf&uuml;hrung gestoppt. 
					Zus&auml;tzlich wird es m&ouml;glich mit sehr gro&szlig;en und sehr kleinen Zahlen zu rechnen.Das Programm dient nicht nur als Schnittstelle vom Benutzer zu den Solvern, 
					sondern hat eine Vielzahl zus&auml;tzlicher Funktionen integriert.
				</p>
				<p>
					<b>Performance:</b>
					<br>
					Berechnungsdauer f&uuml;r 400 Variablen und 400 Restriktionen - 14 Sekunden
				</p>
			</div>
		</body>
    </v-container>
</template>