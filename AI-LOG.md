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

Prompt: Zwischenstand von NoteCard überprüfen lassen
Anwendung: setup Attribut im script-Tag einfügen, #header-Slot richtig benutzen, v-for Schleife für Tags noch ergänzen
Verstanden: BaseCard als generische Komponente definiert über slot Platzhalter, diese werde durch template-Tag mit entsprechender Id befüllt

Prompt: verhindern, dass Id bereits in NoteForm deklariert wird
Anwendung: Omit<note, "id"> nutzen
Verstanden: Omit nimmt bestehenden Typ und erzeugt daraus neuen Typ, (erster Parameter: Ausgangstyp, zweiter Parameter: Name der Eigenschaft, die wegfallen soll)

Prompt: wie man die Tags von einem string in ein Array umwandelt
Anwendung: Hinweis zu den Methoden split, map, trim und filter, um string in Array zu wandeln
Verstanden: tags zuerst im eigenen ref speichern und dann beim emit in ein Array umwandeln

Prompt: Hilfe bei der Filter Logik
Anwendung: Grundgerüst mit entsprechenden Hinweisen, welche Fälle abgedeckt werden sollten, filteredNotes über ein ref im Script und dann im Template anzeigen
Verstanden: refs werden im Template automatisch ausgepackt, deshalb im Script übergeben