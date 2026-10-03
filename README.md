# Schmidt Solo Assignment 2

Quicknotes: Notiz-App mit Tags, Suche und Persistenz


## Setup (Vue 3 + TypeScript + Vite)

1. Repository klonen:
```bash
git clone https://github.com/Maurice-1703/Schmidt-solo-assignment-2.git
cd Schmidt-solo-assignment-2
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

4. Im Browser öffnen (Konsole zeigt lokale URL an)


## Struktur

- Die Logik liegt in den Composables, weil die (Kind-) Komponenten für die Darstellung verantwortlich sind. Sie wissen nichts über den State der Notizliste bzw. des localStorage, sondern senden Änderungen lediglich per emit nach oben.
- Der localStorage-Code liegt nur in der entsprechenden Composable und auf diesen wird nur über useNotes zugegriffen. Das verhindert Probleme bei Speicherzugriffen. Das Speichern passiert an genau einer Stelle (nämlich im watch in useLocalStorage), daher kann keine Funktion es vergessen.
- Außerdem kann man zukünftig localStorage z.B. durch eine Datenbank ersetzen und muss nicht die Architektur des Projekts ändern.


## Reflexionsfragen

1. Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löst ihr das stattdessen?
    - Regel: props nach unten, emits nach oben; die Entscheidung über die Liste liegt bei der Komponente, die sie besitzt. Dieser Ein-Weg-Datenfluss macht Anwendungen vorhersehbar, weil man immer weiß, wo ein Zustand verändert wird
    - Wenn NoteCard die Prop versucht direkt zu mutieren, warnt Vue in der Konsole + der Wert wird beim nächsten Rendern der Eltern wieder überschrieben
    - Stattdessen sendet NoteCard per emit nach oben (App.vue), dass eine Notiz gelöscht werden soll und schickt als Payload die ID der Notiz; in App.vue wird darauf gehört und die entsprechende Funktion (deleteNote) aufgerufen, um die Notiz zu löschen

2. Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen - teilen sie sich die Notizen oder nicht? 
    - Zwei Komponenten teilen sich die Notizen nicht, weil jeder Aufruf ein unabhängiges ref erzeugt
    - useNotes() sollte nur einmal aufgerufen werden, da es sonst zu Konkurrenz beim Speichern  kommt: Jede Komponente speichert ihre eigene Kopie, sodass die zuletzt speichernde Komponente die Notizen der anderen Komponente überschreibt
    - App.vue ruft useNotes() auf, die Kinder kommen über die props an die Daten und melden Änderungen per emit

3. Wozu dient das Note-Interface, wenn der Code auch ohne liefe?
    - Fehler werden schon beim Kompilieren erkannt und nicht erst zur Laufzeit (z.B. man vertippt sich und schreibt note.tag anstatt note.tags)
    - das Interface ist ein Vertrag zwischen Komponenten und legt fest, welche Daten zu erwarten sind