<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="columns is-mobile characters">
        <small class="column"> {{ dateFormatted }} </small>
        <small class="column has-text-right">
          {{ characterLength }}
          {{ characterLength - 1 ? "characters" : "character" }}
        </small>
      </div>
    </div>
    <footer class="card-footer">
      <!-- :to="`/editNote/${note.id}`" -->
      <RouterLink
        :to="{ name: 'edit-note', params: { id: note.id } }"
        @click.prevent=""
        href="#"
        class="card-footer-item"
        >Edit</RouterLink
      >
      <!-- @click.prevent="storeNotes.deleteNote(note.id)" -->
      <a
        @click.prevent="modals.deleteNote = true"
        href="#"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
    <ModalDeleteNoteVue
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :modelValue="modelValue"
      :note="note"
    />
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import ModalDeleteNoteVue from "./ModalDeleteNote.vue";
import { useDateFormat } from "@vueuse/core";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date));
  return useDateFormat(date, "DD-MM-YYYY HH:mm").value;
});

// const emits = defineEmits(["deleteClicked"]);

//character length

const characterLength = computed(() => {
  return props.note.content.length;
});

//modals

const modals = reactive({
  deleteNote: false,
});
</script>
