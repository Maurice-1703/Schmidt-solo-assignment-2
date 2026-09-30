<script setup lang="ts">
import { useNotes } from './composables/useNotes.js'
import NoteCard from './components/NoteCard.vue';

const { notes, addNote, deleteNote } = useNotes();              // destructuring: useNotes gibt Objekt zurück, Teile werden direkt ausgepackt



</script>

<template>
  <button v-on:click="addNote({ title: 'Neue Notiz', content: 'Inhalt der Notiz', tags: ['test'] })">Notiz hinzufügen</button>
  <div>
    <note-card v-for="note in notes" v-bind:note="note" @deleted="deleteNote" v-bind:key="note.id"></note-card>
  </div>
</template>
