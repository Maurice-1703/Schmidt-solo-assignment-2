<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">      <!-- $slots: eingebautes Objekt, in dem steht, welche Slots die Elternkomponente tatsächlich befüllt hat -->
      <slot name="header" />                            <!-- ist Slot nicht befüllt = undefined (umgebendes div wird nicht gerendert) -->
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>
