Prompt: useLocalStorage.js erklären
Anwendung: erklärende Kommentare hinzugefügt 
Verstanden: deep watch nötig für .push(), Speichern zentral im watch statt in jeder Funktion (jede Datei hat eigene Aufgabe, Logik kapseln: useLocalStorage wiederverwendbar und nicht auf Notizen beschränkt)

Prompt: wieso der Import-Pfad bei .js-files in VS-Code als fehlerhaft markiert wird
Anwendung: "allowJs: true" in tsconfig.app.json
Verstanden: durch "lang='ts'" weigert sich die Datei .js-files zu lesen

Prompt: Zwischenstand von addNote() und deleteNote() überprüfen lassen
Anwendung: let newId zu konst geswitcht, Id über Date.now() definiert
Verstanden: Id einmalig, wird nicht mehr verändert also konstant; erhält durch Date.now() einmaligen Wert

Prompt: $slot.header in BaseCard erklären lassen
Anwendung: erklärende Kommentare hinzugefügt
Verstanden: sorgt dafür, dass die BaseCard auch ohne Header korrekt angezeigt wird (slot nicht befüllt, durch if-Abfrage kein Rendern)

Prompt: Zwischenstand von NoteCard.vue überprüfen lassen
Anwendung: setup Attribut im script-Tag einfügen, #header-Slot richtig benutzen, v-for Schleife für Tags noch ergänzen
Verstanden: BaseCard als generische Komponente definiert über slot Platzhalter, diese werde durch template-Tag mit entsprechender Id befüllt