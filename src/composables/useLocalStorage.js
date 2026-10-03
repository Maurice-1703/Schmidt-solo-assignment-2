import { ref, watch } from 'vue'
 
// Liest einen Wert beim Start aus localStorage und schreibt ihn bei jeder Änderung zurück.
export function useLocalStorage(key, initialValue) {
  const stored = localStorage.getItem(key)                        // Liest den gespeicherten Wert aus localStorage als string (return null, wenn der key nicht existiert)
  const value = ref(stored ? JSON.parse(stored) : initialValue)   // string wird in Array umgewandelt, falls vorhanden, ansonsten wird initialValue verwendet
 
  watch(value, (newValue) => {                                    
    localStorage.setItem(key, JSON.stringify(newValue))           // bei jeder Änderung von value: Array in string umwandeln und in localStorage speichern
  }, { deep: true })                                              // Option, damit auch Änderungen innerhalb von Objekten/Arrays beobachtet werden (damit auch .push() erkannt wird)
  
  return value           
}
