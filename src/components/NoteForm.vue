<script setup lang="ts">
import { ref } from 'vue';
import type { Note } from '../types/note.ts';

type NoteWithoutId = Omit<Note, "id">                   // erzeugt Note ohne Id (wird über addNote() hinzugefügt)

const emits = defineEmits<{
    (event: "noteSubmitted", note: NoteWithoutId): void;
}>();


const tagInput = ref("");

const newNote = ref<NoteWithoutId>({
    title: "",
    content: "",
    tags: [],
});


function submitNote(): void {
    
    emits("noteSubmitted", {...newNote.value, tags: stringToArray(tagInput.value)});    // tags werden von string in Array umgewandelt, dann in der tags-property überschrieben

    tagInput.value = "";
    newNote.value = {
        title: "",
        content: "",
        tags: [],
    }
}

function stringToArray(input: string): string[] {
    let resultArray = input.split(",");                 // split() teilt string an jedem Komma in ein Array auf
    resultArray = resultArray.map(tag => tag.trim());   // trim() entfernt Leerzeichen am Anfang und Ende eines Strings, wird über map auf jedes Element angewendet
    return resultArray.filter(tag => tag !== "");       // filter() entfernt alle leeren Einträge
}

</script>

<template>
    <form v-on:submit.prevent = "submitNote">                                          <!-- prevent als Event-Modifier, damit Seite beim abschicken nicht neu geladen wird -->
        <label for="note-title">Titel:</label>
        <input id="note-title" type="text" v-model="newNote.title" required>
        
        <label for="note-content">Inhalt:</label>
        <textarea id="note-content" v-model="newNote.content" required></textarea>
        
        <label for="note-tags">Optionale Tags (mit Komma getrennt):</label>
        <input id="note-tags" type="text" v-model="tagInput">
        
        <button type="submit">Notiz hinzufügen</button>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: solid;
    border-width: 0.25rem;
    border-color: indigo;
    padding: 1rem;
    margin-bottom: 2rem;
}
</style>