# Schmidt Solo Assignment 2


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

- Die Logik liegt in den Composables, weil die Komponenten


## Reflexionsfragen

1. Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löst ihr das stattdessen?
    - props nach unten, emits nach oben; die Entscheidung über die Liste liegt bei der Komponente, die sie besitzt
    - wenn NoteCard die Prop versucht direkt zu mutieren, warnt Vue in der Konsole + der Wert wird beim nächsten Rendern der Eltern wieder überschrieben
    - stattdessen sendet NoteCard per emit nach oben (App.vue), dass eine Karte gelöscht wurde; in App.vue wird darauf gehört und die entsprechende Funktion (deleteNote) aufgerufen

2. Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen - teilen sie sich die Notizen oder nicht?
    - zwei Komponenten teilen sich die Notizen nicht, weil jeder Aufruf ein unabhängiges ref erzeugt
    - useNotes() sollte nur einmal aufgerufen werden, da es sonst zu Konkurrenz beim Speichern  kommt (Notizen könnten überschrieben werden)
    - App.vue ruft useNotes() auf, die Kinder kommen über die props an die Daten

3. Wozu dient das Note-Interface, wenn der Code auch ohne liefe?
    - Fehler werden schon beim Kompilieren erkannt und nicht erst zur Laufzeit
    - defineProps<{ note: Note }>() verspricht, dass der Datenfluss zwischen den Komponenten geregelt ist in dem Sinne, dass jede Komponente genau weiß, welche Daten sie zu erwarten hat