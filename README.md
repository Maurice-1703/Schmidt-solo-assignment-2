# Schmidt-solo-assignment-2

## Reflexionsfragen

Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löst ihr das stattdessen?
-> props nach unten, emits nach oben; die Entscheidung über die Liste liegt bei der Komponente, die sie besitzt

Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen - teilen sie sich die Notizen oder nicht?
-> zwei Komponenten teilen sich die Notizen nicht, weil jeder Aufruf ein unabhängiges ref erzeugt
-> useNotes() sollte nur einmal aufgerufen werden, da es sonst zu Konkurrenz beim Speichern  kommt (Notizen könnten überschrieben werden)

Wozu dient das Note-Interface, wenn der Code auch ohne liefe?
-> 