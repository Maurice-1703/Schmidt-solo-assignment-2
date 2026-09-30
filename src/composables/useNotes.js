import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
 
export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])
 
  function addNote(note) {
    // neue Notiz mit eigener id an die Liste hängen
    const newId = Date.now();
    notes.value.push({ id: newId, ...note });
  }
 
  function deleteNote(idToDelete) {
    // Notiz mit dieser id entfernen
    const newNotes = notes.value.filter((note) => note.id !== idToDelete);
    notes.value = newNotes;
  }
 
  function filteredNotes(term) {
    // TODO: nach Titel, Text oder Tag filtern
    return computed(() => notes.value)
  }
 
  return { notes, addNote, deleteNote, filteredNotes }
}
