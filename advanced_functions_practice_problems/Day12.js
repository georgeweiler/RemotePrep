//Exercise 1 - Answer Logger - function as input
var answerLogger = function(func){
	//$("#answer").append('<p>' + func() + '</p>')
}
// parameter functions can be anonomous (called directly into the function)
//or they can be saved as variables

//Variable Declaration
var anonFunc = function(){
	return "This is the answer";
}
answerLogger(anonFunc)

//Anonomous Func
answerLogger(function(){
	return "No, THIS is the answer"
})

//EXERCISE 2 - AnswerCollector - Array of functions as input
var answerCollector = function(arrayOfFuncs){
	var resultsArray = [];
	// forEach loop to iterate over the array
	arrayOfFuncs.forEach( function(item){
		resultsArray.push(item());
	}	
		)
	return resultsArray;
}

var func3 = function(){return "You found function 3!"};
var array = [function(){return "You found function 1!"},function(){return "You found function 2!"}, func3 ]

//console.log(answerCollector(array))


//EXERCISE 3 - Secret Keeper

var secretKeeper = function(string1, string2) {
	var secret = "Justin Beiber sucks!";
	//$('#secret').append(string1 + " " + secret +" " + string2);
}
secretKeeper("What's the secret?", " That is the secret.");

//Exercise 4 -Multiplies By

var multiplies_by = function(num, num2){
	return function(num2){
		return num * num2;
	};
};
var times5 = multiplies_by(5);
console.log(times5(4)); // 20



//UNDERSCORE

// first method
var first = function(array, num){
	return array.slice(0, num);
}

var arr = [3, 5, 8, 2, 6]
console.log (first(arr, 8)) // 1,2


