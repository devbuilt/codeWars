
// 8kyu If you can sleep just count sheep..
var countSheep = function (num){
  let val = '';
  for(let i = 1; i <= num; i++){
  	val += `${i} sheep...`;
  }
  return val;
}
console.log(countSheep());


//  8kyu Get the mean of an array
function getAverage(marks){

  let total = 0;

  for(let i = 0; i < marks.length; i++){
    total += marks[i];

    }
   return Math.floor(total / marks.length )
}


// // 8kyu sum of positive
// function positiveSum(arr){
// 	let total = 0;
//
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 0) {
// 			total += arr[i];
// 		}
//
// 	}
// 	return total;
// }
// positiveSum();



function feast(beast, dish) {

 return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1];

}

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);


// is palindrome

function palindrome(str) {
  // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

  var lowRegStr = str.toLowerCase().replace(re, '');
  // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
  // var lowRegStr = "amanaplanacanalpanama";

  // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  var reverseStr = lowRegStr.split('').reverse().join('');
  // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
  // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
  // And, var reverseStr = "amanaplanacanalpanama";

  // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}

console.log(palindrome("A man, a plan, a canal. Panama"));

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

// (function(){
//   let age1 = prompt('age?');
//
//   if (message < 3 === 'Your a Baby'){
//
//   }if(message< 18 === 'Hello'){
//
//   }if(message < 100 === 'Greetings!'){
//
//   }else('What an unusual age')
//   alert(message)
// })();



//Grasshopper - Summation
var summation = function (num) {



}
