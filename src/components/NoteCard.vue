<script setup lang="ts">
import BaseCard from './BaseCard.vue';
import type { Note } from '../types/note.ts';

interface Props {
    note: Note;
}
const props = defineProps<Props>();


const emits = defineEmits<{
    (event: "deleted", id: number): void
}>();

</script>

<template>
    <base-card>
        <template v-slot:header>                    <!--Einbettung in header-Slot von BaseCard-->
            <h2>{{ props.note.title }}</h2>
        </template>
        <template v-slot:default> 
            <p>{{ props.note.content }}</p>
            <ul>
                <li v-for="tag in props.note.tags" v-bind:key="tag">{{ tag }}</li>
            </ul>
            <button v-on:click="emits('deleted', props.note.id)">Löschen</button>
        </template>
    </base-card>
</template>

<style scoped>
.card {
    border: 0.25rem solid indigo;
    border-radius: 1rem;
    padding: 2rem;
}
</style>