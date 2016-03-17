var products = [
  {
    name: "Go Set a Watchman",
    category: "books",
    selling_points: ["Controversial", "Publicity Bonanza", "Released by rapacious publishers against the wishes of senile author"],
    price: 25,
    picture_url: "https://upload.wikimedia.org/wikipedia/en/4/4e/US_cover_of_Go_Set_a_Watchman.jpg"
  },
  {
    name: "Twilight",
    category: "books",
    selling_points: ["Doesn't make you think to hard", "Reinforces traditional gender-roles", "Doesn't make you think to hard"],
    price: 9.99,
    picture_url: "http://image.slidesharecdn.com/book-1-twilight-1231022548425199-1/95/book-1-twilight-1-728.jpg"
  },
  {
    name: "How to Win Friends & Influence People",
    category: "books",
    selling_points: ["Timeless practical advice", "Actually useful and relevant to your life"],
    price: 8,
    picture_url: "http://htmlgiant.com/wp-content/uploads/2013/11/HowtoWinFriendsandInfluencePeopleCover.jpg"
  },
  {
    name: "Dark Side of the Moon",
    category: "music",
    selling_points: ["Collector's Edition", "Trippy", "Good for late night existential crises"],
    price: 100,
    picture_url: "http://i.kinja-img.com/gawker-media/image/upload/s--9N1Ijk1t--/c_fit,fl_progressive,q_80,w_636/1940ob66cyu2ljpg.jpg"
  },
  {
    name: "Thriller",
    category: "music",
    selling_points: ["Classic MJ", "The 80's greatest contribution to human progress"],
    price: 19,
    picture_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0000/677/MI0000677650.jpg"
  },
  {
    name: "Ella & Luis",
    category: "music",
    selling_points: ["How could you not?", "Seriously, though..."],
    price: 110,
    picture_url: "http://ecx.images-amazon.com/images/I/51713fx1VdL._SY300_.jpg"
  }
]


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

//console.log([1,2,3,4,5,6,7].slice(-3,-1))
// **************** slice(array, [begin], [end]) **************** 
// The slice() method returns a shallow copy of a portion of an array into a new array object.
var slice = function(array,begin,end){
  
  var resultsArr = [];
  
    if (begin === end){
      //console.log('equals')
      return resultsArr;
    }
    
    if(end > array.length){
      //console.log('end greater than array');
      end = array.length;
    }  
    // -BEGIN, +END 
    if(begin<0 && end >= 0){
      //console.log("-BEGIN, +END")
      begin = array.length + begin;
    }
    //BOTH NEGATIVE
    if (end < 0 && begin <0){
      //console.log("-BEGIN, -END")
      // console.log("end before: " +end)
      end = array.length + end;
      begin = array.length + begin;
      console.log("end after:  " + end )
      console.log("begin after: " + begin)
    }
      

    // +BEGIN , -END
    //decrementing loop
    if(end<0 && begin>=0){
      //console.log("+BEGIN, -END")
      for(var i = array.length - 1 + end; i>= begin; i--){
        resultsArr.unshift(array[i]);
      }
    }


    //BOTH POSITIVE
    if (begin >= 0 && end >= 0){
      //console.log("+BEGIN, +END")
      for(i = begin; i<end; i++){
        resultsArr.push(array[i]);
      }
    }
    return resultsArr;
  };


//TESTS!!!!
// console.log("++")
// console.log(slice([1,2,3,4,5], 1,3))
// console.log([1,2,3,4,5].slice(1,3))
// console.log("**************")
// console.log("--")
// console.log(slice([1,2,3,4,5], -3,-1))
// console.log([1,2,3,4,5].slice(-3,-1))
// console.log("**************")
// console.log("+-")
// console.log(slice([1,2,3,4,5], 2,-1))
// console.log([1,2,3,4,5].slice(2,-1))
// console.log("**************")
// console.log("-+")
// console.log(slice([1,2,3,4,5], -3,1))
// console.log([1,2,3,4,5].slice(-3,1))
// console.log("**************")
// console.log("==")
// console.log(slice([1,2,3,4,5], -3,-3))
// console.log([1,2,3,4,5].slice(-3,-3))
// console.log("**************")
// console.log("greater")
// console.log(slice([1,2,3,4,5], -3,7))
// console.log([1,2,3,4,5].slice(-3,7))
// console.log("**************")
// console.log("less than")
// console.log(slice([1,2,3,4,5], 4, 1))
// console.log([1,2,3,4,5].slice(4, 1))





//if target is larger than the array's length
//if the target is 1
//console.log(slice([1,2,3,4,5,6,7,8,9,10], 2,3))





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
arr = resultArr;
return arr;
}

var arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(mySplice(arr, 0, 3, 11, 12, 13));


// **************** reverse(array) // note -- this reverses an array ​*in place*​ -- ie, it mutates the input **************** 
var reverse = function(array){
  for(var i = array.length -1; i>=0; i--){
    array.push(array[i]);
    // console.log(array);
  }
  return mySplice(array, 0, array.length / 2);
}
// console.log(reverse(arr));



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

// console.log(every(evenArr, isEven));
evenArr.push(3);
// console.log(every(evenArr, isEven));

// **************** some(array, callback) **************** 
// a gignatic OR statement
var some = function(arr, predicate){
  every(arr, function(item){

  })
}


// **************** reduce(array, iterator(accumulator, item, index, array), [accumulator]) **************** 
// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

var reduce = function(array, iteratorFunc, start){
  var undefinedStart = arguments[2];
  each(array, function(value, i){
    (i === 0 && undefinedStart === undefined) ? start = value : start = iteratorFunc(start, value)
  })
  return start;
}

var numbers = [1,2,3,4];

//console.log(reduce(numbers, function(a,b){
//   return a + b;
// }, 3);

// total == 6


// **************** first **************** 


var first = function (array, target){
  return target ? slice(array, 0, target) : slice(array,0,1);
}
var arr = [1,2,3,4,5,6,7,8,9,10]

console.log(first(arr, 15))
console.log(first(arr, 3))
console.log(first(arr))














