const removeFromArray = function(array, item) {
  let arrayLength = arguments[0].length;
  let itemsFromArray = arguments[0];
  console.log(`Items from array (${arrayLength}): [${arguments[0]}]`);

  let itemsLength = arguments.length - 1;
  let itemsToDelete = [];
    for (let i = 1; i <= itemsLength; i++) {
    itemsToDelete.push(arguments[i]);
  }
  console.log(`Items to delete (${itemsLength}): [${itemsToDelete}]`);

  if (itemsLength === 0) {
    return arguments[0];
  } else if (itemsLength < 0){
    return [];
  } else {
    for (i = 1; i <= itemsLength; i++) {
      let itemToDelete = arguments[i];
      console.log('Item to delete: ' + itemToDelete);
      for(let j = 0; j < arrayLength; j++) {
        let itemToCheck = array[j];
        if(array[j] === itemToDelete) {
          console.log(`Checking Item... ${itemToDelete} = ${itemToCheck} ... Deleting`);
          array.splice(j, 1);
          arrayLength--;
          j--;
          console.log(`New array: [${array}]`);
        } else {
          console.log(`Checking Item... ${itemToDelete} != ${itemToCheck}`)
        }
      }
    }
    console.log(`Final array: [${array}]`);
  }
  
  return array;
  
};


// Do not edit below this line
module.exports = removeFromArray;
