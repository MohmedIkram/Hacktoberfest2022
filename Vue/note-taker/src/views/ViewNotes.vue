<template>
  <div class="notes" v-auto-animate>
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a new note..."
      label="Add Note"
    >
      <template #buttons>
        <button
          @click="addNote"
          class="button is-link has-background-success is-rounded"
          :disabled="!newNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-medium is-success"
      max="100"
    />

    <template v-if="storeNotes.notesLoaded">
      <Note
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
        v-auto-animate
      />
    </template>
    <div
      v-if="!storeNotes.notes.length"
      class="py-6 is-size-4 has-text-centered has-text-grey-light is-family-monospace"
    >
      No notes yet.
    </div>
  </div>
</template>

<script setup>
//imports
import { ref } from "vue";
import Note from "@/components/Notes/TheNote.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useWatchCharacters } from "@/use/useWatchCharacters";

//store

const storeNotes = useStoreNotes();

//notes

const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextArea();
};

// watch char

useWatchCharacters(newNote, 100);
</script>
