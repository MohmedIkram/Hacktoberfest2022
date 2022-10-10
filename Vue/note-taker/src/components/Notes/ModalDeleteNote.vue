<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="deleteNote">Delete</button>
      </footer>
    </div>
  </div>
</template>
<script setup>
//imports
import { onClickOutside } from "@vueuse/core";
import { ref, onMounted, onUnmounted } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

//store
const storeNotes = useStoreNotes();

//props

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  note: {
    type: Object,
    required: true,
  },
});

//emits

const emits = defineEmits(["update:modelValue"]);

//close modal

const closeModal = () => {
  emits("update:modelValue", false);
};

//click outside to close

const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal, {
  // ignore: [navbarBurgerRef],
});

//delete note

const deleteNote = () => {
  storeNotes.deleteNote(props.note.id);
  closeModal();
};

//keyboard control

const handleKeyboard = (e) => {
  if (e.key === "Escape") closeModal();
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyboard);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyboard);
});
</script>
<style scoped></style>
