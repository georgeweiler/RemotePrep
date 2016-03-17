// **************** indexOf(array, value) **************** 
// returns the index of a target in a given array
// returns -1 if no target is found
var indexOf = function(arr, target){
  for(var i = 0; i<arr.length; i++){
    if(target === arr[i]){
      return i;
    }
  }
  return -1;
}


// testing floobits, yeah!
// this is awesome!


// **************** slice(array, [begin], [end]) **************** 
// The slice() method returns a shallow copy of a portion of an array into a new array object.
var slice = function(arr,begin,end){
  var result = [];
  if (!begin) {
    begin = 0;
  }
  if (!end) {
    end = arr.length;
  }
  for (var i = begin; i<arr[end]; i++){
    result.push(arr[i]);
  }
  return result;
};







// **************** splice(array, start, deleteCount, [newItem]) // assume only one new item can be added optionally **************** 
// splice will mutate the original array by removing existing elements or adding elements
// deleteCount = integer deciding how many elements to be deleted AFTER the start val
// can be provided items to be added
var mySplice = function(arr, start, del){
  var resultArr = [];
  if(start>0){
    for (var i=0; i < start;i++){
       resultArr.push(arr[i]);
    }
  }
  if(arguments.length>3){
    for(var k = 3; k<arguments.length; k++){
      resultArr.push(arguments[k]);
    }
  }    
  for(var j = start + del; j<arr.length; j++){
    resultArr.push(arr[j]);
  }
   return resultArr;
}

var arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(mySplice(arr, 0, 3, 11, 12, 13));


// **************** reverse(array) // note -- this reverses an array ​*in place*​ -- ie, it mutates the input **************** 
var reverse = function(array){
  for(var i = array.length -1; i>=0; i--){
    array.push(array[i]);
    console.log(array);
  }
  return mySplice(array, 0, array.length / 2);
}
console.log(reverse(arr));



// **************** forEach(collection, callback) // make this work for both arrays and objects **************** 
// applies callback function to each element in the collection (array or object). DOESN'T RETURN ANYTHING.
var each = function(col,callback){
  if (Array.isArray(col)) {
    for (var i=0;i<col.length;i++){
      callback(col[i], i, col);
    }
  } else {
    for (var key in col){
      callback(col[key], key, col);
    }
  }
};

// **************** map(array, callback) **************** 
// The map() method creates a new array with the results of calling a provided function on every element in this array. Returns an array of results after applying the callback to each element.
var map = function(col, callback){
  var results = [];
  each(col, function(item){
    results.push(callback(item));
  });
  return result;
}


// **************** filter(array, callback) **************** 
// return all the items that pass a predicate

var filter = function(array, predicate){
  var results = [];
  each(array, function(item){
   if(predicate(item)){
      results.push(item);
   }
  })
  return results;
}

var isEven = function(num){
  return num % 2 === 0;
}

var evenArr = (filter(arr, isEven));


// **************** reject(array, predicate) **************
var reject = function(array, predicate){
  return filter(array, function(item){
    return !predicate(item)
  })
}


// **************** every(array, callback) **************** 
// Tests if all elements pass a predicate
// A gignatic AND statment
var every = function(arr, predicate){
  var result = true;
  each(arr, function(item){
    if (!predicate(item)){
      result = false;
    }
  })
  return result;
}

console.log(every(evenArr, isEven));
evenArr.push(3);
console.log(every(evenArr, isEven));

// **************** some(array, callback) **************** 
// a gignatic OR statement
var some = function(arr, predicate){
  every(arr, function(item){
    
  })
}








// **************** reduce(array, iterator(accumulator, item, index, array), [accumulator]) **************** 


