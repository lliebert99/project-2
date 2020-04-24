// jshint esversion: 7

//Req. 3a
let reverseWord = word => {
  var newString = "";
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
};

let revWords1 = sentence => {
  let wordArray = sentence.split(" ");
  var result = "";
  for (var i = 0; i < wordArray.length; i++) {
    let currentWord = wordArray[i];
    let reversedWord = reverseWord(currentWord);
    result += reversedWord;
    if (i != wordArray.length - 1) {
      result += " ";
    }
  }
  return result;
};

//Req. 3b
let revWords2 = sentence => {
  let wordArray = sentence.split(" ");
  var result = "";
  wordArray.forEach(function(word, i) {
    let currentWord = wordArray[i];
    let reversedWord = reverseWord(currentWord);
    result += reversedWord;
    if (i != wordArray.length - 1) {
      result += " ";
    }
  });
  return result;
};

//Req. 3c
let revWords3 = sentence => {
  let wordArray = sentence.split(" ");
  var result = "";
  for (var word of wordArray) {
    let reversedWord = reverseWord(word);
    result += reversedWord;
    if (word != wordArray[wordArray.length - 1]) {
      result += " ";
    }
  }
  return result;
};

//Req. 4 Extra Credit
let containsDuplicates = s => {
  let cArr = new Array(26).fill(0);
  var code;
  for (let i in s) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[code]++;
    }
  }
  return false;
};
