var my_cat = {};
my_cat.name = "Boots";
my_cat.age = 5;
my_cat.alive = true;
my_cat.color = "black";
my_cat.activity_level = "lazy";
my_cat.friendly = true;
my_cat.hungry = true;
my_cat.toys = ['mouse', 'string', 'ball'];


var myDreamLife = {};
var propertyKey = "Job";
myDreamLife[propertyKey] = "Web Developer";
var anotherPropertyKey = "Salary";
myDreamLife[anotherPropertyKey] = 200000;


// console.log(myDreamLife[propertyKey])
// console.log(myDreamLife["Job"])

var nextProp = "Car";
myDreamLife[nextProp] = "Ferrari";

var house = 'House';
var Wife = "Wife";
var NumberOfChildren = "Number_of_Children";

myDreamLife[house] = "3 Bedroom";
myDreamLife[Wife] = "Hot";
myDreamLife[NumberOfChildren] = NaN;

//console.log(myDreamLife)


//CAR OBJECT
var car = {
	make: "Toyota"
};

car["model"] = "Camry";
car["model"];
car.model;

car.model = "Prius";
car["model"];
car.model;

var prop = 'year';
car[prop] =  1992;

var dreamCar = {};
dreamCar.make = "Honda";
dreamCar.model = "Civic";
dreamCar.color = "Black";
dreamCar.year = 2015;
dreamCar.registered = true;

// console.log(dreamCar);


var demo_object = {
	one: 1,
	two: 2,
	three: 3
};
var one = "three";

// console.log(demo_object['two']); //2
// console.log(demo_object[one]); // 3

var state_capitals = {
	California: 'Sacramento',
	Texas: 'Austin'
};

var place = 'California';

// console.log(state_capitals['place']); // undefined
// console.log(state_capitals.place);   // undefined
// console.log(state_capitals[place]); // sacramento

// console.log(state_capitals['California']); // sacramento
// console.log(state_capitals.California);   // sacramento
// console.log(state_capitals[California]); // ERROR

for(var catQuerk in my_cat){
	// console.log(my_cat[catQuerk]);
}

for(var dayDream in myDreamLife){
	// console.log(myDreamLife[dayDream]);
}

for(var prop in dreamCar){
	// console.log(dreamCar[prop]);
}

var obj = {
	greeting: 'howdy',
	direction: 'down',
	color: 'red',
	'spaces-and-dashes can be used': ' but need to have quotes'
};

// for (var key in obj) {
//     console.log(obj[key]); //why don't we need quotes around key??
//     // what would happen if we logged obj.key instead? Why? Test it.
// }

// for (var key in obj){
// 	if( key === 'color'){
// 		$('div').css({'height' : '100px', 'width' : '100px', 'background-color' : obj[key]});
// 	}
// 	if ( obj[key] === 'down'){
// 		$('#test').append('<p>' + key + '</p>');
// 	}
// }

// var target_key = "greeting";
// for (var key in obj){
// 	if (key == target_key){
// 		$("#test").append('<p>' + obj[key] + '</p>');
// 	}
// }



var numbers = [2, 4, 5, 37, 0];

var doubled_numbers = {}; // should be { 2: 4, 4: 8, 5: 10, 37: 74, 0: 0 }

numbers.forEach(function(item){
	doubled_numbers[item] = item*2
	//console.log(doubled_numbers);
})

//console.log(doubled_numbers);


var favorites = [];

var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis'];

for (var i = 0; i < famous.length; i++) {
	if(famous[i][0] === 'a'){
		favorites.push(famous[i]);
	}
}


var obama_jobs = [];

var politicos = {
	secretary_of_state: 'hillary clinton',
	potus: 'barack obama',
	flotus: 'michelle obama',
	vice_prez: 'joe biden',
	gov_of_california: 'jerry brown'
};

for(var politician in politicos){
	famous.push(politicos[politician]);
}

for(var politician in politicos){
	if(politicos[politician].indexOf('obama') > -1){
		obama_jobs.push(politician);
	}
}

//console.log(obama_jobs);


b_named_politicos = {};

for (var politician in politicos){
	if (politicos[politician][0] == 'b') {
		b_named_politicos[politician] = politicos[politician]
	}
	if (politicos[politician].match(' b')){
		b_named_politicos[politician] = politicos[politician]
	}
}
//console.log(b_named_politicos);

var numbers = [1,2,3,4];
//ask about this??
// console.log(numbers[0]);
// console.log(numbers["0"]);

doubled_numbers[0];
doubled_numbers["0"];

typeof 37; // 'number'
//console.log(typeof "0"); //'number'
typeof "hello"; // 'string'
typeof undefined; // 'undefined'
typeof function() {}; // 'function'

typeof { a: 1 }; // 'object'
typeof [ 1, 2, 3 ]; // 'object' (?!?! not useful)

Array.isArray({ a: 1 }); // false
Array.isArray([ 1, 2, 3 ]); // true


var type_tester = function(input) {
	console.log(input);
};

var type_tester = function(data){
	if(Array.isArray(data)){
		console.log("array")
	}
	else{
		console.log(typeof(data));
	}
}


// type_tester(3);
// type_tester('hello');
// type_tester({});
// type_tester([]);


var complex_object = {
	string: "I'm a string!",
	number: 42,
	array: ["all sorts of stuff", 10, true, undefined, {me: "an object", more: "find me in here!"}, function(){console.log('beepity-beep')}],
	simple_object: {name: 'bob', location: 'basement'},
	fn: function(){
		console.log("fn has been invoked! Checking both kinds of invocation-time inputs...");
		console.log("what is my calling context?", this);
		console.log("what are my arguments?", arguments);
	}
};

// complex_object.string;
// complex_object.array[4];
// complex_object.simple_object.name;
// complex_object.fn("stuff", "more stuff", "even more stuff!");

for (var data in complex_object){
	if(data == 'string' || data == 'number'){
		$('#primative_data_types').append('<p>' + data + '</p>');
	}
	if (data == 'array'){
		for(var i = 0; i < complex_object[data].length; i++){
			if (typeof(complex_object[data][i]) == 'string' || typeof(complex_object[data][i]) == 'number'){
				$('#array_values').append('<p>' + complex_object[data][i] + '</p>');
			} else {
				$('#array_values').append('<p>' + typeof(complex_object[data][i]) + '</p>');
			}
		}
	}
}	











