# Schmidt-solo-assignment-2

## Reflexionsfragen

Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen - teilen sie sich die Notizen oder nicht?
-> zwei Komponenten teilen sich die Notizen nicht, weil jeder Aufruf ein unabhängiges ref erzeugt
-> useNotes() sollte nur einmal aufgerufen werden, da es sonst zu Konkurrenz beim Speichern  kommt (Notizen könnten überschrieben werden)

Wozu dient das Note-Interface, wenn der Code auch ohne liefe?
-> 