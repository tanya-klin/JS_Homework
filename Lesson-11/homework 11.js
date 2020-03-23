// 1 задание

var arr = [-1, 0, 2, 34, -2];
var NewArr = arr.filter(function(numbers){
	return numbers > 0;
});
NewArr;

//2 задание

var arr = [-20,30,-1,41];
var firstPositiveElement = arr.find(function (numbers) {
    return numbers > 0;
});
firstPositiveElement;

//3 задание 
var word = 'cиний';
function isPalindrome(word) {
    if (word.toLowerCase() == word.toLowerCase().split('').reverse().join('')) {
        return true;
    }
    return false;
}

isPalindrome(word);

// 4 задание

function areAnagrams(word1,word2) {
    var word1='red',
   		word2 = 'blue';
    if (word1.toLowerCase().split('').sort().join('') == word2.toLowerCase().split('').sort().join('')) {
        return true;
    }
    return false;
}
areAnagrams();

// 5 задание

function toDivideArr(arr, size) {
    var dividedArray = [];
    for (var i = 0; i < arr.length; i += size) {
        dividedArray.push(arr.slice(i, i + size));
    }
    return dividedArray;
}
toDivideArr([32,54,23,34,54,656,7687],2)