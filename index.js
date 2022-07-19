//Array.prototype.filter()


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

function isBigEnough(value) {
    return value >= 10;
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

  
  let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  let invalidEntries = 0;
  
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
  }
  
  function filterByID(obj) {
    if (isNumber(obj.id) && obj.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
  }
  
  let arrByID = arr.filter(filterByID);
  
  console.log('Filtered Array', arrByID);
  // Filtered Array
  
  console.log('Number of Invalid Entries = ', invalidEntries);
  


