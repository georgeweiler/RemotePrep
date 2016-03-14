var recipe = [];

recipe[0] = "Grab a bowl";
recipe[1] = "Pour cereal into bowl";
recipe[2] = "Pour milk into bowl";
recipe[3] = "Eat the cereal";

//console.log(recipe[0]);

var last_step = recipe.length - 1;
recipe[last_step];





var bucketList = [];
bucketList[0] = 'Climb Mount Everest';
bucketList[1] = 'Eat Pizza';
bucketList.push('Go outside');
bucketList.push('Play video games');
bucketList.unshift('Write a book');
bucketList.unshift('Buy a car');
//Arrays length = 6
//console.log(bucketList.length)
var dyingWish = bucketList.pop();
var doItNow = bucketList.shift();
//bucket list length = 4
//console.log(bucketList.length)

 $('#recipe').append('<ol id="recipeList"></ol>');
 $('#bucketList').append('<ol id="bucketListItems"></ol>');
var counter = 0;

while (counter<recipe.length) {
  //$('#recipeList').append('<li>' + recipe[counter] + '</li>');
  counter++;
}

var counter = 0;
while (counter<bucketList.length) {
  //$('#bucketListItems').append('<li>' + bucketList[counter] + '</li>');
  counter++;
}


var append_strings = function(array, apples){
	array.forEach(function(item){$(apples).append('<li>' + item + '</li>')});
};



// var append_strings = function(array, apples){
// 	for(var i =0; i<array.length; i++){
// 		$(apples).append('<li>' + array[i] + '</li>');
// 	}
// };

append_strings(recipe, recipeList);
append_strings(bucketList, bucketListItems);


// now our turn...
var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are";

var scrambled_array = scrambled_poem.split(' ');
var unscrambled_array = [];

while (scrambled_array.length > 0) {
  unscrambled_array.push(scrambled_array.shift());
  if(scrambled_array.length > 0){
  	unscrambled_array.push(scrambled_array.pop());
	}
}
var unscambled_poem = unscrambled_array.join(' ');
//console.log(unscambled_poem);


var reverser = function(array){
	var reversedArr = [];
	for(var i = array.length-1; i>=0; i--){
		reversedArr.push(array[i])
	}
	return reversedArr;
}
