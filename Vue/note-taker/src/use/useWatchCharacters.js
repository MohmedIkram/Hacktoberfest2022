import { watch } from "vue";

export function useWatchCharacters(valueToWatch, maxLength) {
  //watch characters in newNote

  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxLength) {
      alert(`max characters ${maxLength} reached`);
    }
  });
}
