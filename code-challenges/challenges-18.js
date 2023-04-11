'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let words = str.split(" ")
    let countMidWord = words[Math.floor((words.length) / 2)].length;
    return (countMidWord);
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    if (str1.length === str2.length) {
        if (str1.split("").sort().join() === str2.split("").sort().join()) {
            return (true)
        } else {
            return (false)
        }
    } else {
        return (false)
    }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    if (int>Math.max(...arr)){
        return arr.length;
    }
    
    if (int<Math.min(...arr)){
        return 0;
    }
    for (let i=0;i<arr.length;i++){
        if(int==arr[i]){
            return i;
        }
        if(int>arr[i]){
            if (int<arr[i+1]){
                    return i+1;
                }
            }
        }
    }
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };