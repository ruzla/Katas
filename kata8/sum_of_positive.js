// Instructions:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//My code:
function positiveSum(arr) {
    let possitive = [];
    for (let i = 0; i < arr.length; i++){
     if (arr[i] > 0){
      possitive.push(arr[i]);
     };
    }; 
   
    let total = 0;
     for (let i = 0; i < possitive.length; i++){
       total = total + possitive[i];
     };
     return total;
   }


// Sample Test:
// Test.assertEquals(positiveSum([1,2,3,4,5]),15);
// Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
// Test.assertEquals(positiveSum([]),0);
// Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
// Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);


// Some Better Solutions:
// 
// 1)  function positiveSum(arr) {
//      return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
//     }

// 2)  function positiveSum(arr) {
//       return arr.reduce((s,v) => v > 0 ? s + v : s, 0);
//     }

// 3)  const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);