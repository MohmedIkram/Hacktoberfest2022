<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit note..."
      label="Edit Note"
    >
      <template #buttons>
        <button class="button is-link is-light mr-3" @click="$router.back">
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useRoute, useRouter } from "vue-router";

//router

const route = useRoute();
const router = useRouter();
//store

const storeNotes = useStoreNotes();

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
