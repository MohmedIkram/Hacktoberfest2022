// stores/counter.js
import { defineStore } from "pinia";
import { db } from "@/js/firebase";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { useStoreAuth } from "@/stores/storeAuth";

let notesCollectionRef = null;
let notesCollectionQuery = null;
let getNotesSnapshot = null;

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
      notesLoaded: false,
    };
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth();
      notesCollectionRef = collection(db, "users", storeAuth.user.id, "notes");
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
      this.getNotes();
    },
    async getNotes() {
      const q = notesCollectionQuery;
      this.notesLoaded = false;

      getNotesSnapshot = onSnapshot(q, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };
          notes.push(note);
        });

        this.notes = notes;
        this.notesLoaded = true;
      });
    },
    clearNotes() {
      this.notes = [];
      if (getNotesSnapshot) getNotesSnapshot();
      // we trigger unsubscribe if we got the snapshot
      // setting onSnapshot to a variable and triggering it unsubscribes
    },

    async addNote(newNoteContent) {
      let newDate = new Date().getTime();
      let date = newDate.toString();

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date,
      });
    },

    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },

    async updateNote(idToUpdate, newContent) {
      await updateDoc(doc(notesCollectionRef, idToUpdate), {
        content: newContent,
      });
    },
  },

  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.find((note) => note.id === id).content;
      };
    },
    getTotalNoteCount: (state) => {
      return state.notes.length;
    },
    getTotalCharacterCount: (state) => {
      let total = 0;
      state.notes.forEach((note) => {
        total += note.content.length;
      });
      return total;
    },
  },
});
