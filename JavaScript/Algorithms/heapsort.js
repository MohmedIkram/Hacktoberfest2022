const heapSort = arr => {
    const a = [...arr];
    let len = a.length;
  
    const heapify = (a, i) => {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let max = i;
      if (left < len && a[left] > a[max]) max = left;
      if (right < len && a[right] > a[max]) max = right;
      if (max !== i) {
        [a[max], a[i]] = [a[i], a[max]];
        heapify(a, max);
      }
    }
  
    for (let i = Math.floor(len / 2); i >= 0; i -= 1) heapify(a, i);
    for (i = a.length - 1; i > 0; i--) {
      [a[0], a[i]] = [a[i], a[0]];
      len--;
      heapify(a, 0);
    }
    return a;
  }

//testing
let myArray = [8, 1, 3, 1, 7, 5, 1, 3, 2, 4];
heapSort(myArray);
