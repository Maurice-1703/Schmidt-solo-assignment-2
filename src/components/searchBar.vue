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
