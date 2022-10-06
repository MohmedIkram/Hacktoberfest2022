const pivot = (array, start = 0, end = array.length + 1) => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

    let pivot = array[start]
    let pointer = start;

    for (let i = start; i < array.length; i++) {
        if (array[i] < pivot) {
            pointer++;
            swap(array, pointer, i);
        }
    }
    swap(array, start, pointer);

    return pointer;
}

const quickSort = (array, start = 0, end = array.length) => {
    let pivotIndex = pivot(array, start, end);

    if (start >= end) {
        return array;
    }

    quickSort(array, start, pivotIndex);
    quickSort(array, pivotIndex + 1, end);

    return array;
}


//testing
let unsortedArray = [13, 16, 17, 32, 4, 21, 19, 33, 12, 83, 92, 26, 8, 67];

quickSort(unsortedArray);