arr = []

function mean() {
    let total = 0;
    let count = 0;

   array.forEach(function(item, index) {
    total += item;
    count++;
   });
   return total / count;
}

function median(arr) {
    if(arr.length == 0) {
        return;
    }
    arr.sort((a,b) => a-b);
    const midpoint = Math.floor(arr.length / 2);
    const median = arr.length % 2 == 1 ?
    arr[midpoint] : 
    (arr[midpoint - 1] = arr[midpoint]) / 2;
    return median;
}

function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }

function mode(arr) {
    let obj = {};

    for(leti = 0; i < arr.length; i++) {
        if(obj[arr[i]]) {
            obj[arr[i]] += 1
        }else {
            obj[arr[i]] = 1
        }
    }


let bigVal = -1;
let bigValKey = -1

Object.keys(obj).forEach(key => {
    let val = obj[key]
    if(val > bigVal) {
        bigVal = val
        bigValKey = key
    }
})
return bigValKey;
}

export {mean};
export {median};
export {mode};
export {convertAndValidateNumsArray};