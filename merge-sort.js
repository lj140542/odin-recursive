
const mergeSort = (tab) => {
  if (tab.length == 1) { return tab; }
  else if (tab.length <= 2) { return tab[0] > tab[1] ? [tab[1], tab[0]] : [tab[0], tab[1]]; }
  else {
    let ret = [];
    let sortedArray1 = mergeSort(tab.slice(0, Math.floor(tab.length / 2)));
    let sortedArray2 = mergeSort(tab.slice(Math.floor(tab.length / 2)));
    while (sortedArray1.length > 0 && sortedArray2.length > 0) {
      sortedArray1[0] < sortedArray2[0] ? ret.push(sortedArray1.shift()) : ret.push(sortedArray2.shift())
    }
    return sortedArray1.length > 0 ? ret.concat(sortedArray1) : ret.concat(sortedArray2);
  }
};

console.log(mergeSort([24, 345, 1, 43, 3235, 512, 54]));