import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
 
export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])
 
  function addNote(note) {
    // neue Notiz mit eigener id an die Liste hängen
    const newId = Date.now();
    notes.value.push({ ...note, id: newId });
  }
 
  function deleteNote(idToDelete) {
    // Notiz mit dieser id entfernen
    const newNotes = notes.value.filter((note) => note.id !== idToDelete);
    notes.value = newNotes;
  }
 
  function filteredNotes(term) {
    // nach Titel, Text oder Tag filtern
    return computed(() => {
      // Suchbegriff holen und klein schreiben
      const searchInput = term.value.toLowerCase();

      return notes.value.filter((note) => {
        if (note.title.toLowerCase().includes(searchInput)) return true;
        if (note.content.toLowerCase().includes(searchInput)) return true;
        if (note.tags.some((tag) => tag.toLowerCase().includes(searchInput))) return true;
        return false;
      })
    })
  }
 
  return { notes, addNote, deleteNote, filteredNotes }
}
