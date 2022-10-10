<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.getTotalNoteCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.getTotalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="likeApp"
      class="input"
      type="text"
      placeholder="Do you like our app?"
      v-autofocus
      maxlength="50"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import { vAutofocus } from "@/directives/vAutofocus.js";
import { useWatchCharacters } from "@/use/useWatchCharacters.js";

const storeNotes = useStoreNotes();
const likeApp = ref(null);

//watch

useWatchCharacters(likeApp, 50);

// like app data
</script>
