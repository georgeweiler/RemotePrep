"use strict";
/*if(true) {
  console.log('oh yeaaaaahhh');
}

if(true) {
  console.log('wait, where am I??');
}


if(2===5) {
  console.log('if you are seeing this statement, something has gone terribly wrong');
}*/

//if(prompt('How are you doing?')==="good") {
//  console.log("Well I'm very glad to hear that!")
//}

/*if(prompt("how are you feeling today?")==="sad") {
  document.querySelector('#feeling').textContent = "I'm sorry to hear that."
}
*/

/*if(prompt("What is the secret number?")!=3){
  document.querySelector('#feeling').textContent= "Warning, wrong number!";
}


var pwd = "test123"

if(prompt("Enter your password")!=pwd) {
  window.location = "http://www.google.com";
}
else {
  document.querySelector('#feeling').textContent= "Welcome to the site!"
}
*/
/*
var hero=prompt("Is the hero strong? (type strong)"), bad_guy=prompt("Is the bad guy weak (type weak)?");
  if(hero==="strong") {
    if(bad_guy==="weak") {
      console.log('Ah-ha, an easy victory!');
    }   
  console.log("Let us battle to the death!");  
 }

var response, image_path,
    secret_saying = document.querySelector('#message').textContent;

if (secret_saying === "secret") {
  response = "You may pass";
  image_path = "https://urbanpurpose.files.wordpress.com/2015/06/open-door-2.jpg";
} else {
  response = "Release the hounds!";
  image_path = "https://s-media-cache-ak0.pinimg.com/736x/52/9b/db/529bdbc10bf294c4e31db8505f2f96f1.jpg";
}

document.querySelector('#result').textContent = response;
document.querySelector('img').src = image_path;

*/
/*
var user_input = document.querySelector('#search');
var output_el = document.querySelector('#output');



user_input.addEventListener("keyup", function(event) {
  user_input = document.querySelector('input#search').value;
  output_el.textContent=user_input;
  contentContainer.innerHTML = htmlWrapper;
  

  if (user_input !== "happiness") {
  if (!user_input) { // this tells us something important about empty strings
    // What would happen if we tried to use?     user_input =
    document.querySelector('input').value = "hey you, type here :z";
  } else {
    output_el.textContent = "You're searching for the wrong thing";
  }
} else {
  output_el.textContent = "ahh, the enlightened one!";
}


});*/

var user_input = document.querySelector('#search');
var output_el = document.querySelector('#output');



user_input.addEventListener("keyup", function(event) {
  user_input = document.querySelector('input#search').value;
  output_el.textContent=user_input;
  

if (age < 21) {
  output_el.textContent = "Sorry, son";
} else if ( !(age > 35) ) {
  output_el.textContent = "ID please";
} else if (name === "Bob") {
  output_el.textContent = "You're banned, Bob!";
} else {
  output_el.textContent = "Come on in!";
}

});









