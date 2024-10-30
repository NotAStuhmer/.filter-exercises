// Exercise 1: Filter Even Numbers
// Write a function filterEvens that takes an array of numbers and returns a new array
// containing only the even numbers.

function filterEvens(arrayOfNums) {
    // Your code here
    return arrayOfNums.filter(function (num) {
        return num % 2 === 0;
    });
  }
  
  // Test it
  console.log(filterEvens([1, 2, 3, 4, 5, 6])); // Should output: [2, 4, 6]
//   Hint: You can check if a number is even with the condition num % 2 === 0.

// Exercise 2: Filter Words by Length
// Write a function filterLongWords that takes an array of words and returns a new array
// containing only the words with more than 5 letters.

function filterLongWords(words) {
    // Your code here
    return words.filter(function (str) {
        return str.length > 5;
    });
  }
  
  // Test it
console.log(filterLongWords(["apple", "banana", "cherry", "kiwi", "mango"])); // Should output: ["banana", "cherry"]
// Hint: Use word.length > 5 to filter for words with more than five characters.