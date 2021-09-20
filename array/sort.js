// function compare(a,b){
//     if(a<b){
//         return -1;
//     }
//     if(a>b){
//         return 1;
//     }
//     return 0;
// }

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a-b;
// });
// console.log(numbers);

// [1, 2, 3, 4, 5]
 
var numbers = [4, 2, 5, 1, 3];

numbers.sort((a,b)=>(b-a));

console.log(numbers)

console.log(typeof(numbers));
