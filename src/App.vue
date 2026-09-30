<script setup lang="ts">
import { ref, computed } from 'vue';
import { useNotes } from './composables/useNotes.js'
import SearchBar from './components/SearchBar.vue';
import NoteForm from './components/NoteForm.vue';
import NoteCard from './components/NoteCard.vue';


const { addNote, deleteNote, filteredNotes } = useNotes();              // destructuring: useNotes gibt Objekt zurück, Teile werden direkt ausgepackt
const searchTerm = ref<string>("");
const displayedNotes = ref(filteredNotes(searchTerm));

</script>

<template>
  <div class="main">
    <search-bar v-model="searchTerm"></search-bar>
    <note-form v-on:note-submitted="addNote($event)"></note-form>            <!-- Event-Listener für noteSubmitted ruft addNote auf, $event enthält Wert, den das Kind geschickt hat (NoteWithoutId)-->

    <div>
      <note-card v-for="note in displayedNotes" v-bind:note="note" v-on:deleted="deleteNote" v-bind:key="note.id"></note-card>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: burlywood;
  padding: 1rem;
}
</style>