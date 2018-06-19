
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


// 8kyu sum of positive
function positiveSum(arr){
	let total = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			total += arr[i];
		}

	}
	return total;
}
positiveSum();



function feast(beast, dish) {

 return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1];

}

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);
