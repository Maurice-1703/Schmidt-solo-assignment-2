<script setup lang="ts">
import BaseCard from './BaseCard.vue';
import type { Note } from '../types/note.ts';

//
interface Props {
    note: Note;
}
const props = defineProps<Props>();


const emits = defineEmits<{
    (event: "deleted", id: number): void
}>();

</script>

<template>
    <BaseCard>
        <template #header><h2>{{ props.note.title }}</h2></template>            <!--Einbettung in header-Slot von BaseCard-->
        <p>{{ props.note.content }}</p>
        <button v-on:click="emits('deleted', props.note.id)">Löschen</button>
        <ul>
            <li v-for="tag in props.note.tags">{{ tag }}</li>
        </ul>
    </BaseCard>
</template>