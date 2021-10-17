const merge = (left, right) => {
    let array = [];
    
    while (left.length && right.length) {
        if (left[0] < right[0]) array.push(left.shift());
         else array.push(right.shift());
    } 

    return [...array, ...left, ...right];
}

const mergeSort = (array) => {
    const half = array.length / 2;

    if (array.length < 2) return array;
    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}

//testing

myArray = [7, 3, 4, 7, 9, 5, 2, 5, 6, 7, 2, 3, 1, 6, 8];
mergeSort(myArray);
