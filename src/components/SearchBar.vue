<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
 
<template>
  <input
    v-bind:value="modelValue"
    v-on:input="$emit('update:modelValue', $event.target.value)"
    placeholder="Suchen ..."
  >
</template>

<style scoped>
input {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-width: 0.25rem;
  border-color:indigo;
}
</style>
