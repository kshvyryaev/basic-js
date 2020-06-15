const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';

module.exports = function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error();
  }
  
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];   
    if (element === DISCARD_NEXT) {
      if (index + 1 <= array.length - 1) {
        index++;
      }
    } else if(element === DISCARD_PREV) {
      if (index - 1 >= 0 && (index - 2 >= 0 && array[index - 2] !== DISCARD_NEXT)) {
        newArray.pop();
      }
    } else if(element === DOUBLE_NEXT) {
      if (index + 1 <= array.length - 1) {
        const nextElement = array[index + 1];
        newArray.push(nextElement);
      }
    } else if(element === DOUBLE_PREV) {
      if (index - 1 >= 0 && (index - 2 >= 0 && array[index - 2] !== DISCARD_NEXT)) {
        const prevElement = array[index - 1];
        newArray.push(prevElement);
      }
    } else {
      newArray.push(element);
    }
  }

  return newArray;
};