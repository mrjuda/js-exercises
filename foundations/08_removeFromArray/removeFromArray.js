const removeFromArray = function(array, item) {
  let arrayLength = arguments[0].length;
  let itemsFromArray = arguments[0];
  console.log(`Items from array (${arrayLength}): [${arguments[0]}]`);
  let itemsLength = arguments.length - 1;
  // console.log(`Items to delete (${itemsLength}): ${arguments[0]}`);
  // console.log('Items Length: ' + itemsLength);
  
  let itemsToDelete = [];
    for (let i = 1; i <= itemsLength; i++) {
    itemsToDelete.push(arguments[i]);
  }
  // const items = [arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]];
  // items.forEach((element, index, array) => { showItems.push(array[index]); }); 
  // console.log(itemsToDelete);
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
          // console.log("Checking Item: " + itemToDelete + "... Deleting at index " + j);
          array.splice(j, 1);
          arrayLength--;
          j--;
          console.log(`New array: [${array}]`);
        } else {
          // console.log('Checking Item: ' + itemToCheck + '... !=');
          console.log(`Checking Item... ${itemToDelete} != ${itemToCheck}`)
        }
      }
    }
    console.log(`Final array: [${array}]`);
    // console.log("Final array: " + array);
  }
  
  // console.log(arguments[0][0]);
  // console.log(arguments[1]);
  // console.log(arguments[2]);

  return array;
  
};

// removeFromArray([1, 2, 3, 3, 4, 5], 2, 3);


// Do not edit below this line
module.exports = removeFromArray;
