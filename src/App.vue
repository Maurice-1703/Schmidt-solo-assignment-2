<script setup lang="ts">
import { useNotes } from './composables/useNotes.js'

const { notes, addNote, deleteNote } = useNotes();              // destructuring: useNotes gibt Objekt zurück, Teile werden direkt ausgepackt

</script>

<template>
  <button v-on:click="addNote({ title: 'Neue Notiz', content: 'Inhalt der Notiz', tags: ['test'] })">Notiz hinzufügen</button>
  <ul>
    <li v-for="note in notes" v-bind:key="note.id">
        {{ note }}
        <button v-on:click="deleteNote(note.id)">Löschen</button>
    </li>
  </ul>
</template>
